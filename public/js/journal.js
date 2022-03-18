/**
 * Defining the class for all journal types
 */

 import apiRequest from "./api.js";
 //import require from "https://cdnjs.deepai.org/deepai.min.js";
 //import deepai from "./deepai.min.js";

 
 //const deepai_Var = require('deepai');
// deepai.setApiKey("quickstart-QUdJIGlzIGNvbWluZy4uLi4K");



 export default class Journal {

    /** Function: Constructor
    * Usage://Copies over all the JSON "id:key" pairs over to this 
    * data has sets of "{key:value}", and then if i call this.key, it will return value 
    */
    constructor(data) {
        //For example, this.id would be assigned to what's returned by the JSON object
        Object.assign(this,data);
    }

     /**First Step: Change the front end javascript code, so instead of calling
      * methods of journal class like its any type of class, call it on a specific instance
      * of the class. (need to copy assign 4, where i create an instance in the front end, 
      * and then send it to the backend or store it in the frontend)
      * @returns
      */
    /**
     * Returns a random journal entry from the past
     */
    static async getJournal() {
        let data = await apiRequest("GET", "/journal");
        let final = new Journal(data);
        return final;
    }
   /**
     * Posts the new journal entry into the backend database
     */
    static async postJournal(text) {
        let result = await apiRequest("POST", "/journal", {'text': text});
    }

    async getEmotion() {
        console.log("444");
        //console.log(deepai);

        //let result = await deepai.callStandardApi("text-generator", {
        //    text: "My name is Bi Tian Yuan"
        //});

        //console.log("222");
        //console.log(result.output);

        console.log("this.data" + this.finalText);
        let result = await deepai.callStandardApi("sentiment-analysis", {
            text: this.finalText
        });
        console.log(typeof(this.finalText));
        //console.log("11");
        //console.log(result.output);
        //let data = await deepai.callStandardApi("text-generator", {text: "My name is Bi Tian Yuan"});
        return result.output;
    }
 }