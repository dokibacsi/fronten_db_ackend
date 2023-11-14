class MegjelenitSor {
    
    #data;
    #szuloElem
  constructor(data, szuloElem) {
    this.#data = data;
    this.#szuloElem = szuloElem;
    this.#sortLetrehoz();
  }

  #sortLetrehoz() {
    let txt = "<tr>";
    console.log(this.#data)
    for (const KEY in this.#data) {
        const ELEM = this.#data[KEY]
        console.log(ELEM)
        txt += `<td>${ELEM}</td>`;
    }
    txt += "</tr>";
    console.log(txt)
    this.#szuloElem.append(txt);
  }
}

export default MegjelenitSor;
