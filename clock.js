let degreesH, degreesM, degreesS;
let countH = 1;
let countS = 1;
let countM = 1;
var date = new Date();

turnH = () => {
	turnMaster(degreesH, 'hour', countH)
	countH++;
 }


turnM = () => {
	turnMaster(degreesM, 'minute', countM)
	countM++;
}

turnS = () => {
	turnMaster(degreesS, 'second', countS)
	//turnMaster2(turnS, 'second', date.getSeconds())
	countS++;
}

turnMaster = (degrees, type, counter) => {
	if (degrees == 360) {
		counter = 1;
	}
		degrees = (1/60) * 360 * counter;
	

	document.getElementById(type).style.transform = "rotate(" + degrees + "deg)";
}
//date function wouldn't update when used
// turnMaster2 = (degrees, type, counter) => {
// 		console.log(counter);

	
// 		degrees = (1/60) * 360 ;
	

// 	document.getElementById(type).style.transform = "rotate(" + degrees + "deg)";
// }

let HTimer = setInterval(turnH, 1000 * 60 * 12);
let MTimer = setInterval(turnM, 1000 * 60);
let STimer = setInterval(turnS, 1000);