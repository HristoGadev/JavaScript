function solve(args) {
    args = args.toString();
    let flightInfo = args.split(',');

    let direction = flightInfo[0];
    let destination = flightInfo[1];
    let flightNumber = flightInfo[3];
    let time = flightInfo[2];
    let gate = flightInfo[4];

    console.log(`${direction}: Destination - ${destination}, Flight - ${flightNumber}, Time - ${time}, Gate - ${gate}`)
}
solve(['Departures', 'London', '22:45', 'BR117', '42'])