// https://www.youtube.com/watch?v=c5SIG7Ie0dM
// 1 hs  25'  34''
// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');


navToggle.addEventListener('click', function() {
	console.log(links.classList);
	
	const cssClassTest = links.classList.contains('show-links');
	console.log(cssClassTest);
	
	// 1. Toggle 1
	//cssClassTest ? links.classList.remove('show-links') : links.classList.add('show-links');
	
	// 1. Toggle 2
	links.classList.toggle('show-links');
});




