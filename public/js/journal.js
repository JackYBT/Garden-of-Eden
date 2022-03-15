/**
 * Defining the class for all journal types
 */

 import apiRequest from "./api.js";

 export default class Journal {

    /** Function: Constructor
    * Usage://Copies over all the JSON "id:key" pairs over to this 
    */
    constructor(data) {
        //For example, this.id would be assigned to what's returned by the JSON object
        Object.assign(this,data);
    }
     
    /**
     * Returns a random journal entry from the past
     */
    static async getJournal() {
        let data = await apiRequest("GET", "/journal");
        return data;
    }

    //static async postJournal(text) {
    //    let result = await apiRequest("POST", "/journal",)
    //}
 }