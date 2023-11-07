class DataService {
  constructor() {}

  getData(apivegpont, callback) {
    axios
      .get(apivegpont)
      .then(function (response) {
        //console.log("Válasz objektum",response);
        //console.log("adatok",response.data);
        //console.log("státusz",response.status);
        //console.log("Státusz szöveg",response.statusText);
        //console.log("Válasz fejléc",response.headers);
        //console.log("Válasz config",response.config);
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  postData(apivegpont, callback) {
    axios
      .post(apivegpont, callback, {
        headers: {
          "X-CSRF-TOKEN": response.headers["x-csrf-token"],
        },
      })
      .then((response) => {
        console.log("RESP", response);
      })
      .catch((error) => {
        console.log("hiba", error);
      });
  }
}
export default DataService;
