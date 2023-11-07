import DataService from "../model/DataService.js";

class Controller{
    constructor(){
        this.DataService = new DataService()
        this.DataService.getData("http://localhost:8000/writers", this.megjelenit)
        this.DataService.postData("http://localhost:8000/writers", this.megjelenit)
    }
    megjelenit(list){
        console.log(list)
    }
};

export default Controller;