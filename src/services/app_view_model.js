// import teamData from "./team_data";

let appViewModel = {
    // data: teamData,
    endPoint: "localhost:8080",

    header: {
        title: "The Royal Army",
        logo: "imgs/knight_logo.svg"
    },

    list: {
        entity: "teams", //local storage key
        entitySingle: "team",
        listTitle: "Team Information",
        tableClasses: "table table-striped table-hover mt-2",
        options: {  //default options
            sortCol: "name",
            sortDir: "asc",
            limit: "",
            offset: "",
            filterCol: "",
            filterStr: ""
        }
    }
}
export default appViewModel;