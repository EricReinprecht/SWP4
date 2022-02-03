let urlTeams = "https://www.openligadb.de/api/getbltable/bl1/2021"

fetch(urlTeams)
    .then(function(respose) {
        return respose.json();
    })
    .then(function(data) {
        let html = "";
        data.forEach(element => {
            console.log(element.ShortName);
            document.write("<li>" + element.ShortName + "</li>");
        });


    });
teams = document.getElementById("teams");