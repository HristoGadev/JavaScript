function leapYear() {
    let btn = document.querySelector('#exercise button').addEventListener('click', checkYear);

    function checkYear() {
        let inputYear = document.querySelector('#exercise input');

        let year = IsLeapYear(inputYear.value)
        let h2= document.querySelector('#year h2')
        
        if(year){
            h2.textContent='Leap Year';
        }
        else{
            h2.textContent='Not Leap Year';
        }
        let div=document.querySelector('#year div');
        div.textContent= inputYear.value;
        console.log(inputYear.value)
        inputYear.value = '';
    }

    function IsLeapYear(inputYear) {
        return ((inputYear % 4 == 0) && (inputYear % 100 != 0) || (inputYear % 400 == 0))
    }
  
  
}