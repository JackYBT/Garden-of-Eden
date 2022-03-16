import apiRequest from "./api.js";
import Journal from "./journal.js";

class App {
    constructor() {
        this._journalForm = null;
        this._journaltext = null;
        this._journalRefreshButton = null;
        this._journalUpdate = this._journalUpdate.bind(this);
        this._journalentry = this._journalentry.bind(this);
        this._loadProfile = this._loadProfile.bind(this);
    }

    setup() {
        //Grabbing the form for submitting text to the 
        this._journalForm = document.querySelector("#submitText");
        //Setting the event listener for when the user clicks on "Submit Text"
        this._journalForm.addEventListener("submit", this._journalentry);

        this._journalRefreshButton = document.querySelector("#refresh_journal");
        this._journalRefreshButton.addEventListener("click", this._journalUpdate);
    }

    /**
     * Function: _journalentry
     * Usage: When the user fills the text in, and submits the text to the backend database
     */
    async _journalentry(event) {
        event.preventDefault();
        let new_journal = document.querySelector("#submitText").newtext.value;
        let result = await apiRequest("POST", "/journal", {'text':new_journal});  
        document.querySelector("#submitText").newtext.value = ''; 
    }

    /**
     * Funfction: _journalUpdate
     * Usage: When the user clicks the refresh button, automatically refreshes the front page
     */
    async _journalUpdate(event) {
        event.preventDefault();
        this._journaltext = await apiRequest("GET", "/journal");
        console.log(this._journaltext);
        this._loadProfile();
    }

    async _loadProfile() {
        let new_container = this._createJournalDisplay();
        document.querySelector("#dailyJournalBox").firstChild.replaceWith(new_container);
        
    } 

    _createJournalDisplay() {
        let container = document.createElement("div");
        container.classList.add("dailyJournal");

        let text = document.createElement("span");
        text.textContent = this._journaltext.finalText;
        container.append(text);
        return container;
    }

}

let app = new App();
app.setup();