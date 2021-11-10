var spaceLeft = 0;
var space = 35;
var day = 1;
var mounth = 1;
var maxDay = 28;
var week = 1;



function calender(spaceLeft, day, mounth, maxDay, week){
    for(mounth; mounth<=12; mounth++){
        maxDay = 28;
        document.write("|MO|DI|MI|DO|FR|SA|SO|" + "<br>");
        for(var i =1; i<spaceLeft; i++){
            document.write("|--")
        }
        week = 1;
        if(spaceLeft>0){
            week = week + spaceLeft -1;
        }
        space = 35 - spaceLeft;
        spaceLeft = 0;
        if(mounth == 1 || mounth == 3 || mounth == 5 || mounth == 7 || mounth == 9 || mounth == 11){
            maxDay = 31;
        }
        if(mounth == 4 || mounth == 6 || mounth == 8 || mounth == 10 || mounth == 12){
            maxDay = 30;
        }
        for(day; day<=space; day++){
            if(day + spaceLeft>maxDay){
                document.write("|--")
                spaceLeft = spaceLeft +1;
            }
            if(day<=maxDay){
                document.write("|" + day);
            }
            if(week>=7){
                document.write("|" + "<br>");
                week = 0;
            }
             week++;
            }
            day = 1;
            document.write("<br>");
        }   
}























calender(spaceLeft, day, mounth, maxDay, week);