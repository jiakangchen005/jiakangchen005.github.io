const sleep = (milliseconds) => {
	return new Promise(resolve => setTimeout(resolve, milliseconds))
}

var current = 0;

var url = window.location.pathname;
var currentDirectory = url.substring(url.lastIndexOf('/'));
var pageNumber = 0;

if (currentDirectory == "/index.html") {
	pageNumber = 0;
} else if (currentDirectory == "/about.html") {
	pageNumber = 1;
} else if (currentDirectory == "/resume.html") {
	pageNumber = 2;
} else if (currentDirectory == "/connections.html") {
	pageNumber = 3;
}

var words = [
	["Competitive Programmer", "CTF Player", "Mathematics Enjoyer", "Musicophile"], 
	["whoami"],
	["wget jiakangchen005.github.io/resume.pdf"],
	["ls -Ral ~/connections/"]
];

async function typewriter() {
	while (true) {
		var word = words[pageNumber][current];

		// Type word
		for (let i = 0; i < word.length; i = i + 1) { 
			var length = document.getElementById("display").innerHTML.length;
			document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.substring(0, length - 1) + word[i] + "|";
			await sleep(64);
		}
		
		// Flashing Cursor Effect
		for (let i = 0; i < 3; i = i + 1) {
			var length = document.getElementById("display").innerHTML.length;
			document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.substring(0, length - 1) + " ";
			await sleep(500);
			document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.substring(0, length - 1) + "|"
			await sleep(500);
		}
		
		// Remove word (Backspace)
		for (let i = 0; i < word.length; i = i + 1) {
			var length = document.getElementById("display").innerHTML.length;
			document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.substring(0, length - 2) + "|";
			await sleep(32);
		}

		current = (current + 1) % words[pageNumber].length;
	}
}

typewriter();