/**
 * Defining the class for all journal types
 */

 import apiRequest from "./api.js";

 export default class Photo {

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
    static async getPhoto() {
        let data = await apiRequest("GET", "/picture");
        return data;
    }

    /**
     * Posts the avatrURL into the backend database
     */

    static async postPhoto(text) {
        let result = await apiRequest("POST", "/picture", {'photoURL': text});
    }
 }