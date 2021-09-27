async function getDataFromUrl() {
    let apiUrl =
    "https://newsapi.org/v2/top-headlines?country=id&apiKey=fc790381326d45058656ffc4616c2166";
    let a = await fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));
    return a;
}

async function getDataFromUrlWithKeyWord(filter){

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd ;
        let apiUrl = `https://newsapi.org/v2/everything?q=${filter}&from=${today}&sortBy=popularity&apiKey=fc790381326d45058656ffc4616c2166`;
        let a = await fetch(apiUrl)
        .then((res)=> res.json())
        .then((data) => data)
        .catch((err) => console.log(err));
      return a;
}

export { getDataFromUrl, getDataFromUrlWithKeyWord };