import apiRequest from "./api.js";
import Journal from "./journal.js";
import Photo from "./photo.js";

class App {

    constructor() {
        this._journal = null;
        this._journalFormButton = null;
        this._journalUpdate = this._journalUpdate.bind(this);
        this._journalentry = this._journalentry.bind(this);

        this._photo = null;
        this._photoButton = null;
        this._photoButtonUpdate = this._photoButtonUpdate.bind(this);
        this._photoEntry = this._photoEntry.bind(this);

        this._RefreshButton = null;
        this._loadProfile = this._loadProfile.bind(this);

        this._emotion = null;
        this._emotionUpdate = this._emotionUpdate.bind(this);
    }

    setup() {
        //Grabbing the form for submitting text to the 
        this._journalFormButton = document.querySelector("#submitText");
        //Setting the event listener for when the user clicks on "Submit Text"
        this._journalFormButton.addEventListener("submit", this._journalentry);

        this._photoButton = document.querySelector("#submitPicture");
        this._photoButton.addEventListener("submit",this._photoEntry);

        this._RefreshButton = document.querySelector("#refresh_journal");
        this._RefreshButton.addEventListener("click", this._loadProfile);
   
        deepai.setApiKey('16f21b1e-94e8-46c1-91c6-70242121f345');

        this._journalUpdate();
        this._photoButtonUpdate();

    }

    /**
     * Function: _journalentry
     * Usage: When the user fills the text in, and submits the text to the backend database
     */
    async _journalentry(event) {
        event.preventDefault();
        let new_journal = document.querySelector("#submitText").newtext.value;
        Journal.postJournal(new_journal);
        document.querySelector("#submitText").newtext.value = ''; 
    }

    /**
     * Function: _journalUpdate
     * Usage: Helper function to update the frontend with a new journal entry 
     */
    async _journalUpdate() {
        this._journal = await Journal.getJournal();
        let new_container = this._createJournalDisplay();
        document.querySelector("#dailyJournalBox").firstChild.replaceWith(new_container);
        
    }

    /**
     * Function:_createJournalDisplay() 
     * Usage: Return a container that containes a div with the returned random
     * journal entry and the analyzed emotion from the backend
     */
    _createJournalDisplay() {
        let container = document.createElement("div");
        container.classList.add("dailyJournal");

        let text = document.createElement("span");
        text.id = "journal";
        text.textContent = this._journal.finalText;
        container.append(text);

        let emotion = document.createElement("span");
        emotion.id = "emotion";
        emotion.textContent = this._emotion[0];
        container.append(emotion);

        return container;
    }    

    /**
     * Function: _photoEntry
     * Usage: When the user fills the photoURL in, and submits the photoURL to the backend database
     */
    async _photoEntry(event) {
        event.preventDefault();
        let new_photoURL = document.querySelector("#submitPicture").newpicture.value;
        Photo.postPhoto(new_photoURL);
        document.querySelector("#submitPicture").newpicture.value = ''; 
    }


    /**
     * Function: _photoButtonUpdate
     * Usage: Helper function to update the frontend with a new picture
     */
     async _photoButtonUpdate() {
        this._photo = await apiRequest("GET", "/picture");
        let new_container = this._createPhotoDisplay();
        document.querySelector("#dailyPictureBox").firstChild.replaceWith(new_container);

    }
   /**
     * Function:_createPhotoDisplay() 
     * Usage: Return a container that containes a div with the returned random
     * picture from the backend
     */
    _createPhotoDisplay() {
        
        let container = document.createElement("div");
        container.classList.add("dailyPhoto");

        let img = document.createElement("img");
        img.src = this._photo.photoURL;
        img.alt = "Image deleted or moved to a different location";

        container.append(img);
        return container;
    }

    /**
     * Function: _emotionUpdate()
     * Usage: Returns the emotion of the text analyzed 
     */
    async _emotionUpdate() {
        this._emotion = await this._journal.getEmotion();
        console.log("This is emotion!", this._emotion[0]);
    }

    /**
     * Function: _loadProfile
     * Usage: Uploads the frontend with a pair of new picture and journal entry
     */ 
    async _loadProfile(event) {
        event.preventDefault();
        this._journalUpdate();
        this._photoButtonUpdate();
        this._emotionUpdate();
    } 
}

let app = new App();
app.setup();