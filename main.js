var httpRequest = new XMLHttpRequest();

function makeRequest() {
  httpRequest.onreadystatechange = getResponse;

  httpRequest.open("GET", "http://localhost:8080/resources");
  httpRequest.send();
}
function getResponse() {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      let response = JSON.parse(httpRequest.responseText);
      console.log(response);

      let table = document.getElementById("table");
      console.log(table.rows.length);
      if (table.rows.length === 1) {
        response.resources.forEach((element) => {
          let row = table.insertRow(-1);

          let c1 = row.insertCell(0);
          let c2 = row.insertCell(1);
          let c3 = row.insertCell(2);

          c1.innerText = element.id;
          c2.innerText = element.name;
          c3.innerText = element.source;
        });
      }
    }
  }
}
