var mounth = 1;
var day = 1;
var maxDay = 28;
var week = 0;

function calender(){
    for(mounth; mounth<=12; mounth++){
        document.write("|MO|DI|MI|DO|FR|SA|SO|" + "<br>");
        document.writeln("");
        if(mounth == 1 || mounth == 3 || mounth == 5 || mounth == 7 || mounth == 9 || mounth == 11){
            maxDay = 31;
        }
        if(mounth == 4 || mounth == 6 || mounth == 8 || mounth == 10 || mounth == 12){
            maxDay = 30;
        }
        for(day; day<=maxDay; day++){
            document.writeln("|"+ day + "|");
            week = week + 1;
            if(week>6){
                document.write("<br>");
                week = 0;
            }
        }
        document.write("<br>")
        day = 1;
    }
}

calender(day, mounth, maxDay);