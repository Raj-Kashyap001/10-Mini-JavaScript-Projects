const sounds = ["bomb-blast", "victory", "wasted", "mission-passed", "battle"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.innerText = "🎵  " + sound;
  btn.addEventListener("click", () => {
    stopSound();
    document.getElementById(sound).play();
  });
  document.body.appendChild(btn);
});

function stopSound() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
