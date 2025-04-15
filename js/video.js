var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.getElementById("play").addEventListener("click", playVideo);

function playVideo(){
	const video = document.querySelector("#player1");
	const slider = document.querySelector("#slider");
	const volumeValue = slider.value;
	video.play();
	document.querySelector("#volume").innerHTML = volumeValue + "%";
	console.log("Play Video");
}

document.getElementById("pause").addEventListener("click", pauseVideo);
function pauseVideo(){
	video = document.querySelector("#player1");
	video.pause();
	console.log("Pause Video");
}

document.getElementById("slower").addEventListener("click", slowVideo);
function slowVideo() {
	const video = document.querySelector("#player1");
	video.playbackRate *= 0.9;
	console.log("New playback rate: " + video.playbackRate.toFixed(2));
}

document.getElementById("faster").addEventListener("click", fastVideo);
function fastVideo() {
	const video = document.querySelector("#player1");
	video.playbackRate /= 0.9;
	console.log("New playback rate: " + video.playbackRate.toFixed(5));
}

document.getElementById("skip").addEventListener("click", skipAhead);
function skipAhead() {
	const video = document.querySelector("#player1");
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current location: " + video.currentTime);
}

document.getElementById("mute").addEventListener("click", muteVolume);
function muteVolume() {
	const video = document.querySelector("#player1");
	const muteButton = document.getElementById("mute");
	if (video.muted) {
		video.muted = false;
		muteButton.textContent = "Mute";
		console.log("Unmuted");
	} else {
		video.muted = true;
		muteButton.textContent = "Unmute";
		console.log("Muted");
	}
}
document.getElementById("slider").addEventListener("input", changeVolume);
function changeVolume(){
	const video = document.querySelector("#player1");
	const volume = document.querySelector("#slider").value;
	video.volume = volume / 100;
	document.querySelector("#volume").textContent = volume + "%";
	console.log("Volume: " + volume);
}
// Set default volume to 100% on page load
// window.addEventListener("load", function() {
// 	const video = document.querySelector("#player1");
// 	const slider = document.querySelector("#slider");
// 	video.volume = 1; 
// 	slider.value = 100;
// 	document.querySelector("#volume").textContent = "100%";
// 	console.log("Default volume set to 100%");
// });

document.getElementById("vintage").addEventListener("click", vintageStyle);
function vintageStyle() {
	const video = document.querySelector("#player1");
	video.classList.add("oldSchool");
	console.log("Vintage style toggled");
}

document.getElementById("orig").addEventListener("click", originalStyle);
function originalStyle() {
	const video = document.querySelector("#player1");
	video.classList.remove("oldSchool");
	console.log("Original style applied: oldSchool class removed");
}


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

