import MegjelenitSor from "./MegjelenitSor.js";

class TablaMegjelenit {
  #lista
  #szuloElem
  constructor(szuloElem, lista) {
    this.#szuloElem = szuloElem;
    this.#lista = lista;
    const TABLAELEM = $("table");
    //console.log(this.#lista)
    this.#tablaMegjelenit(this.#lista, TABLAELEM)
  }

  #tablaMegjelenit(lista, tablaElem){
    console.log(lista)
    for (let index = 0; index < lista.length; index++) {
      new MegjelenitSor(lista[index], tablaElem);
    }
  }
}

export default TablaMegjelenit;
