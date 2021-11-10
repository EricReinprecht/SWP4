var spaceLeft = 0;
var spaceFilled = 0;
var space = 35;
var day = 1;
var maxDay = 28;
var mounth = 1;
var week = 1;
var perfectMounth = false;


function calender(spaceLeft, day, mounth, maxDay, week, space, spaceFilled){
    for(mounth; mounth<=12; mounth++){
        maxDay = 28;
        document.write("|MO|DI|MI|DO|FR|SA|SO|" + "<br>");
        if(mounth == 1 || mounth == 3 || mounth == 5 || mounth == 7 || mounth == 9 || mounth == 11){
            maxDay = 31;
        }
        if(mounth == 4 || mounth == 6 || mounth == 8 || mounth == 10 || mounth == 12){
            maxDay = 30;
        }
        
        if(spaceFilled>5){
            space = 42;
        }else{space = 35;}

        spaceLeft = space - maxDay - spaceFilled;
        for(spaceFilled; spaceFilled>0; spaceFilled--){
            document.write("| -- ")
        }

        for(day; day<=maxDay; day++){
            if(day<=10){
                document.write(" | "  + day);
            }else{document.write("|" + day);}
            
            week++;
            if(week>7){
                document.write(" | <br>")
                week = 1;
            }
        }

        if(spaceLeft == 0){
            perfectMounth = true;
        }else{
            perfectMounth =false;
            spaceFilled = 7 - spaceLeft;
        }

        for(spaceLeft; spaceLeft>0; spaceLeft--){
                document.write("| -- ");
            }

            if(perfectMounth == false){
                document.write(" | <br>");
            }
            
            day = 1;
            document.write("<br>");
        }
        

    }


calender(spaceLeft, day, mounth, maxDay, week, space, spaceFilled);