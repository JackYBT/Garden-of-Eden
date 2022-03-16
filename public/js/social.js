import apiRequest from "./api.js";
import Journal from "./journal.js";
import Photo from "./photo.js";

class App {
    constructor() {
        this._journalForm = null;
        this._journaltext = null;
        this._journalRefreshButton = null;
        this._journalUpdate = this._journalUpdate.bind(this);
        this._journalentry = this._journalentry.bind(this);
        this._loadProfile = this._loadProfile.bind(this);

        this._photo = null;
        this._photoURL = null;
        this._photoUpdate = this._photoUpdate.bind(this);
        this._photoentry = this._photoentry.bind(this);

    }

    setup() {
        //Grabbing the form for submitting text to the 
        this._journalForm = document.querySelector("#submitText");
        //Setting the event listener for when the user clicks on "Submit Text"
        this._journalForm.addEventListener("submit", this._journalentry);

        this._photo = document.querySelector("#submitPicture");
        this._photo.addEventListener("submit",this._photoentry);

        this._journalRefreshButton = document.querySelector("#refresh_journal");
        this._journalRefreshButton.addEventListener("click", this._loadProfile);
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
     * Function: _photoentry
     * Usage: When the user fills the photoURL in, and submits the photoURL to the backend database
     */
    async _photoentry(event) {
        event.preventDefault();
        console.log("14");
        let new_photo = document.querySelector("#submitPicture").newpicture.value;
        let result = await apiRequest("POST", "/picture", {'photoURL':new_photo});  
        document.querySelector("#submitPicture").newpicture.value = ''; 
    }

    /**
     * Function: _journalUpdate
     * Usage: Helper function to update the frontend with a new journal entry 
     */
    async _journalUpdate() {
        this._journaltext = await apiRequest("GET", "/journal");
        console.log(this._journaltext);

        let new_container = this._createJournalDisplay();
        document.querySelector("#dailyJournalBox").firstChild.replaceWith(new_container);
        
    }

    /**
     * Function: _photoUpdate
     * Usage: Helper function to update the frontend with a new picture
     */
     async _photoUpdate() {
        console.log("13");
        this._photoURL = await apiRequest("GET", "/picture");
        console.log(this._photoURL);
        let new_container = this._createPhotoDisplay();
        document.querySelector("#dailyPictureBox").firstChild.replaceWith(new_container);

    }

    _createPhotoDisplay() {
        
        let container = document.createElement("div");
        container.classList.add("dailyPhoto");

        let img = document.createElement("img");
        img.src = this._photoURL.photoURL;

        //let date = document.createElement("span");
        container.append(img);
        return container;
    }

    /**
     * Function: _loadProfile
     * Usage: Uploads the frontend with a pair of new picture and journal entry
     */ 
    async _loadProfile(event) {
        console.log("12");
        event.preventDefault();
        this._journalUpdate();
        this._photoUpdate();
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