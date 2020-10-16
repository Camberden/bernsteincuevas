/* eslint-disable no-unused-vars */
'use strict';
/* exported clickmeboy sampleTypingTest */

window.onload = () => console.log('Running!');
const missouri = new Audio('assets/missouri.mp3');


function clickmeboy(){
	document.getElementById('pedestal').innerHTML -= -1;
	document.getElementById('hitbutton').classList.add('red');
	setTimeout(() => document.getElementById('hitbutton').classList.remove('red'), 200);
}

printTimer();
setInterval(printTimer, 1000);

function printTimer(){
	const d = new Date();
	document.getElementById('miniclock').innerHTML = d.toLocaleTimeString();
}

function inMo(){
	document.getElementById('demotxt').style = 'font-size:50px; color:red; background-blend-mode: exclusion';
	missouri.play();
}

function sampleTypingTest(){
	const para = 'The quick brown fox jumps over the lazy dog.';
	const typed = document.getElementById('sampleTypingField').value;
	const marker = document.getElementById('pangram');

	if (typed === para.substring(0, typed.length)){
		marker.innerHTML = para.replace(typed, '<span class="red">' + typed + '</span>');
	}

	if (typed === para){
		document.getElementById('sampleTypingField').value = '';
		marker.innerHTML = para;
		alert('✨');
	}
}
