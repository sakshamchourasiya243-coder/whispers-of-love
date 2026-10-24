window.addEventListener("load", () => {

  setTimeout(() => {

    const loader = document.getElementById("loader");

    if(loader){
      loader.style.display = "none";
    }

  }, 2000);

});// Music Button
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

if (musicBtn && music) {
  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicBtn.innerText = "🔇 Stop";
    } else {
      music.pause();
      musicBtn.innerText = "🎵 Music";
    }
  });
}

// Gallery Images
const photos = document.querySelectorAll(".photos img");

photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    window.open(photo.src, "_blank");
  });
});

// Begin Journey
const startBtn = document.getElementById("startBtn");

if (startBtn) {
  startBtn.addEventListener("click", () => {

    const container = document.querySelector(".container");

    container.innerHTML = `
      <h1>✨ Chapter 1 ✨</h1>
      <p id="typing"></p>
      <button id="nextPage">Continue ❤️</button>
    `;

    const text = "Every love story begins with a simple hello...";
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
      }
    }

    typeWriter();

    document.getElementById("nextPage").addEventListener("click", () => {

      container.innerHTML = `
        <h1 class="glowText">💖 Chapter 2 💖</h1>
        <p id="typing2"></p>
      `;

      const text2 =
        "Sometimes the smallest moments become the biggest memories.";

      let j = 0;

      function typeWriter2() {
        if (j < text2.length) {
          document.getElementById("typing2").innerHTML += text2.charAt(j);
          j++;
          setTimeout(typeWriter2, 60);
        }
      }

      typeWriter2();

    });

  });
}
constphotos = document.querySelectorAll(".photos img");

console.log("Photos Found:", photos.length);

photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    alert("Photo Clicked");
  });
});
const contactBtn = document.getElementById("contactBtn");

if(contactBtn){
  contactBtn.addEventListener("click", () => {
    alert("Thanks for visiting my website ❤️");
  });
}
const themeBtn = document.getElementById("themeBtn");

if(themeBtn){

  themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
      themeBtn.innerText = "☀️ Light";
    }else{
      themeBtn.innerText = "🌙 Dark";
    }

  });

}
const openLetter = document.getElementById("openLetter");
const letterPopup = document.getElementById("letterPopup");
const closeLetter = document.getElementById("closeLetter");

if(openLetter){

  openLetter.addEventListener("click", () => {
    letterPopup.style.display = "flex";
  });

}

if(closeLetter){

  closeLetter.addEventListener("click", () => {
    letterPopup.style.display = "none";
  });

}
window.addEventListener("load", () => {

  const openLetter = document.getElementById("openLetter");
  const letterPopup = document.getElementById("letterPopup");
  const closeLetter = document.getElementById("closeLetter");

  if (openLetter && letterPopup) {

    openLetter.addEventListener("click", () => {
      letterPopup.style.display = "flex";
    });

  }

  if (closeLetter && letterPopup) {

    closeLetter.addEventListener("click", () => {
      letterPopup.style.display = "none";
    });

  }

});
const cursorGlow = document.getElementById("cursorGlow");

document.addEventListener("mousemove", (e) => {

  if(cursorGlow){
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
  }

});
constcursorGlow = document.getElementById("cursorGlow");

if(cursorGlow){

  document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

  });

}
