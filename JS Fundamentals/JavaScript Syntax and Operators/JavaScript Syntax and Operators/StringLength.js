function solve(firstString,secondString,thirdString) {
    let fStringLenght=firstString.length;
    let sStringLenght=secondString.length;
    let tStringLenght=thirdString.length;

    let sumStringLenghts=fStringLenght+sStringLenght+tStringLenght;
    console.log(sumStringLenghts);
    let avrgStringLengts=Math.floor(sumStringLenghts/3);
    console.log(avrgStringLengts);

}
solve('pasta', '5', '22.3')