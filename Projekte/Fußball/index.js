let urlTeams = "https://www.openligadb.de/api/getbltable/bl1/2021"

fetch(urlTeams)
    .then(function(respose) {
        return respose.json();
    })
    .then(function(data) {
        let placeholder = "&nbsp &nbsp &nbsp"
        let teams = placeholder + "&nbsp " + "Teams" + "<br>";
        let points = "Punkte" + "<br>";
        let i = 1;

        document.getElementById("teams").innerHTML = teams;
        document.getElementById("points").innerHTML = points;
        data.forEach(element => {
            if (i > 9) {
                placeholder = "&nbsp &nbsp"
            }
            teams += i + placeholder + element.ShortName + "<br>";
            points += "&nbsp &nbsp" + element.Points + "<br>";
            i++;
        });
        document.getElementById("teams").innerHTML = teams;
        document.getElementById("points").innerHTML = points;
    });