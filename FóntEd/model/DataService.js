class DataService {
  constructor() {}

  getData(apivegpont, callback) {
    axios
      .get(apivegpont)
      .then(function (response) {
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
      .post(apivegpont, callback, {nev: "Zénó", szul: 1998})
      .then((response) => {
        callback("RESP", response);
      })
      .catch((error) => {
        console.log("hiba", error);
      });
  }
}
export default DataService;
