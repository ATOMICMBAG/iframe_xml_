
function loadXMLDoc() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {

        // Request finished and response 
        // is ready and Status is "OK"
        if (this.readyState == 4 && this.status == 200) {
            empDetails(this);
        }
    };

    // employee.xml is the external xml file
    xmlhttp.open("GET", "test3employee.xml", true);
    xmlhttp.send();
}

function empDetails(xml) {
    let i;
    let xmlDoc = xml.responseXML;
    let table =
        `<tr><th>Firstname</th><th>Lastname</th>
            <th>Title</th><th>Division</th>
            <th>Building</th><th>Room</th>
        </tr>`;
    let x = xmlDoc.getElementsByTagName("employee");

    // Start to fetch the data by using TagName 
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("firstname")[0]
                .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("lastname")[0]
                .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("title")[0]
                .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("division")[0]
                .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("building")[0]
                .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("room")[0]
                .childNodes[0].nodeValue + "</td></tr>";
    }

    // Print the xml data in table form
    document.getElementById("id").innerHTML = table;
}