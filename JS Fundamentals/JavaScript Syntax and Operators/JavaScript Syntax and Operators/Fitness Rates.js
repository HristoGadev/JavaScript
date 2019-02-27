function solve(day,service,hour){

    let dayOfWeekIndex=function (day) {
        return['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
            .indexOf(day);
    }
    let dayOfWeekPrice={
        'Fitness':5,
        'Sauna':4,
        'Instructor':10

    }
    let weekendPrice={
        'Fitness':8,
        'Sauna':7,
        'Instructor':15
    }

    if (dayOfWeekIndex(day)<=4) {

        if (hour<=15) {
            return dayOfWeekPrice[service];
        }
        else{
            return dayOfWeekPrice[service]+2.5;
        }

    }
    else{
        return weekendPrice[service];
    }

}
console.log(solve('Sunday', 'Fitness', 22.00))
solve('Monday', 'Sauna', 15.30)