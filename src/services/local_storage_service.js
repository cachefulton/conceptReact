export default class LocalStorageService {
   "use strict"
    constructor(data, key) {
        this.origModel = data;
        this.key = key;
        
        //if data is NOT in local storage, init and sort using sortCol and sortDir from the model
        if(!this.retrieve()){   
            this.model = this.cloneObject(data);   //get copy of data
            this.sort(this.sortCol, this.sortDir, true);   //apply default sort
        }
    }
        //Getters
    get sortCol(){
        return this.model.app.sortCol;
    }
    set sortCol(col){
        this.model.app.sortCol=col;
    }
    get sortDir(){
        return this.model.app.sortDir;
    }
    set sortDir(dir){
        this.model.app.sortDir=dir;
    }
    get filterStr() {
        return this.model.app.filterStr;
    }
    set filterStr(filterStr) {
        this.model.app.filterStr = filterStr;
    }
    get size() {
        //TODO: should return the number of items in model.data
        return this.model.data.length;
    }
    
    
    list() {
        this.sort(this.sortCol, this.sortDir, true);
        let filterObj = {};
        if(this.filterStr) {
            filterObj[this.sortCol] = this.filterStr;
            return this.filter(filterObj);
        }
        return this.model.data;
    }
        
    //CRUD FUNCTIONS
    create(obj) {
        //TODO
        //append new object to data store
        // persist in local storage by calling store()
        this.model.data.push(obj);
        this.store();
    }
    read(getId) {
        //TODO: returns the item in the array with id=getId, null if it is not found
        let idx = this.getItemIndex(getId);
        if (idx != -1) {
            return this.model.data[idx];
        }
        return null;
    }
    update(obj) {
        //TODO
        //find index of object in array
        //update object with new contents
        // persist in local storage by calling store()
        let idx = this.getItemIndex(obj.id);
        if (idx != -1) {
            this.model.data[idx] = obj;
            // not sure if I should use this for loop below to update specific items or just update the whole obj with line above
            // for(const key in obj) {
            //     this.model.data[idx][key] = obj[key];
            // }
            this.store();
        }
    }
    
    delete(removeId) {
        //TODO
        //find index of object in array
        //remove object with specified id from model.data (splice?)
        // persist in local storage by calling store()
        let idx = this.getItemIndex(removeId);
        if (idx === -1) {
            return //delete nothing
        }
        this.model.data.splice(idx, 1);
        this.store();
    }
    
        //LocalStorage Functions
    reset() {
        //TODO:
        //should clear local storage 
        //should restore model from origModel 
        //(use utility function 'cloneObject' at bottom of file)
        this.clear();
        this.model = this.cloneObject(this.origModel);

        //store in local storage?
        this.store();
    }
    clear() {
        //TODO: should clear local storage
        localStorage.clear();
    }
    store() {
        //TODO: should store your model in localStorage
        localStorage[this.key] = JSON.stringify(this.model); 
    }
    retrieve() {
        //TODO
        //should retrieve your model from localStorage using this.key
        //If data retrieved from LocalStorage, updates this.model
        //hint:  remember to 'parse' the LocalStorage string value back into an object!
        //return true if model retrieved from localStorage, false if key wasn't found in localStorage 
        let storage = localStorage[this.key];
        if (storage) {
            this.model = JSON.parse(storage);
            return true;
        }
        return false;
    }
    
    //Sorting and Filtering Functions
    sort(col, direction, perm = false) {
        //TODO
        //returns a copy of the model.data (util func 'cloneArray'), sorted using the 'col' and 'direction' specifications (see index.html for example)
        // storageSvc.sort('name','asc')
        // if 'perm' param is set to true, you should update the internal model.data 
        //with the sorted list, and call 'store' to store in local storage
        //also, store the sort col and direction in the 'app' portion of the model
        let tempMod = this.cloneObject(this.model);
        tempMod.app.sortCol = col;
        tempMod.app.sortDir = direction;
        tempMod.data.sort((a, b) => {
            let team1 = a[col].toString().toUpperCase(); //make strings and not case sensitive
            let team2 = b[col].toString().toUpperCase();
            if (team1 > team2) {
                return (direction === 'asc') ? 1 : -1;
            }
            if (team1 < team2) {
                return (direction === 'asc') ? -1 : 1;
            }
            return 0;
        });
        if (perm) {
            this.model = tempMod;
            this.store();
        }
        return tempMod.data;
    }
        
    filter(filterObj) {
        //returns a copy of the filtered array
        //filterObj contains an object with all the key/value pairs you 
        //will filter model.data with.
        //See MDN array 'filter' function documentation
        //Example call: storageSvc.filter({coachLicenseLevel:1,coachLast:"Jenson"});
        let filtered = this.model.data.filter((team) => {
            for(const key in filterObj) {
                //if the value does not contain any value of filterObj, return false
                //use toString() because numbers cannot use the .includes() or toUpperCase()
                let team1 = team[key].toString().toUpperCase();
                let team2 = filterObj[key].toString().toUpperCase();
                if (!team1.includes(team2)) { 
                    return false;
                }
            }
            return true; //return true only after every filter object is checked
        });
        return filtered;
    }
    
    //Utility functions-IMPLEMENT THESE FIRST
    getItemIndex(id){
        //TODO
        //return index of team with given id
        //see MDN array 'find' documentation  
        //created separate function for this since multiple methods need to get the index of an item
        id = parseInt(id); //convert to int if string
        return this.model.data.findIndex (
            (team) => {
                return team.id === id;
            }
        );
    }
    cloneObject(obj){
        //util function for returning a copy of an object
        return JSON.parse(JSON.stringify(obj));  //giving you this one as of class on Feb 4
    }
    
}