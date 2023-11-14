import DataService from "../model/DataService.js";
import TablaMegjelenit from "../view/TablaMegjelenit.js";

class Controller{
    #szuloElem;
    constructor(){
        this.#szuloElem = $(".lista");
        this.DataService = new DataService()
        this.DataService.getData("http://localhost:8000/writers", (list) => new TablaMegjelenit(this.#szuloElem, list))
        this.DataService.postData("http://localhost:8000/writers", (list) => new TablaMegjelenit(this.#szuloElem, list))
    }
    
    megjelenit(list){
        console.log(this)
        
    }
};

export default Controller;