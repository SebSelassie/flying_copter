
/*
 * A little copter that flies over your console
 * Author: Sebastianos Hapte-Selassie (sebhs)
 */


const ELAPSES = 6
const PAUSE_TIME = 50
var clear = require('clear');

for (let i = 0; i < ELAPSES; i++) {
		let ident = get_ident_string(i)

		clear();
		console.log("")
		console.log(ident + ":XXXX:XXXX:OOO:XXXX:XXXX:")
		console.log(ident + "           ^            ")
		console.log(ident + "  X   /–––––––––––     ")
		console.log(ident + "  O  ===       [] \\    ")
		console.log(ident + "  X    \\           \\  ")
		console.log(ident + "        \\___________]  ")
		console.log(ident + "            I     I    ")
		console.log(ident + "")

		
		pause(PAUSE_TIME);	
		clear();
		console.log(ident + "")
		console.log(ident + "             :OOO:XXXX:XXXX:")
		console.log(ident + "              ^            ")
		console.log(ident + "         /–––––––––––     ")
		console.log(ident + "    XOX ===       [] \\   ")
		console.log(ident + "          \\           \\  ")
		console.log(ident + "           \\___________]  ")
		console.log(ident + "               I     I    ")
		console.log(ident + "")

		pause(PAUSE_TIME);

		clear();
		console.log(ident + "")
		console.log(ident + "      :XXXX:XXXX:OOO:")
		console.log(ident + "                 ^            ")
		console.log(ident + "        X   /–––––––––––     ")
		console.log(ident + "        O  ===       [] \\    ")
		console.log(ident + "        X    \\           \\  ")
		console.log(ident + "              \\___________]  ")
		console.log(ident + "                  I     I    ")
		console.log(ident + "")
		pause(PAUSE_TIME);


}

function get_ident_string(num) {
	let ident = "";
	for(let i = 0; i < num; i++) {
		ident += "         "
	}
	ident += "   "
	return ident;


}
function pause(milliseconds) {
	var dt = new Date();
	while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}
