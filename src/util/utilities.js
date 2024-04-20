import $ from 'jquery'; 

export default class Utilities{
    constructor()
    {
       this.files={}
    }

    async getFileContents(url){
        if (!(url in this.files)){
            this.files[url]=await $.get(url);
        }
        return this.files[url]
     }

    cloneObject(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    //Add the following utility method 'getQueryString'
    // example:   ?SortCol=name&SortDir=asc&limit=5&offset=20
    getQueryString(options = this.options) {     
        //break out options object into a query string and return
        //for in
        let queryStr = '?';

        for(const opt in options) {
            if(options[opt]) {
                queryStr += `${opt}=${options[opt]}&`; //& will need to be removed on last item
            } 
        }
        queryStr = queryStr.slice(0, -1); //get rid of &

        return queryStr;
    }
}