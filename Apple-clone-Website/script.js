// --------------------- N A V I G A T I O N ------------------------

$(
  "#store,#ipad-section,#mac-section,#iphone-section,#watch-section,#airpods-section,#tv-and-home-section,#entertainment-section,#accessories-section,#support-section"
).hide();

$(".nav-link").on("click", function () {
  $(
    "#home-page,#store,#mac-section,#ipad-section,#iphone-section,#watch-section,#airpods-section,#tv-and-home-section,#entertainment-section,#accessories-section,#support-section"
  ).hide();
  $($(this).attr("href")).show();
});

// --------------------- M A C - S E C T I O N -------------------------

// -------------- P R O D U C T ----------------
$("#desktop-sec,#display-sec").hide();

$(".product-button").on("click", function () {
  $("#laptops-sec,#desktop-sec,#display-sec").hide();
  $($(this).attr("href")).show();
});

$("#mac-accor-2,#mac-accor-3").hide();

$(".mac-accor").on("click", function () {
  $("#mac-accor-1, #mac-accor-2, #mac-accor-3").hide();
  $($(this).attr("for")).show();
});

// ------------------ I P A D - S E C T I O N -------------

$("#ipad-accor-2").hide();

$(".ipad-accor").on("click", function () {
  $("#ipad-accor-1, #ipad-accor-2").hide();
  $($(this).attr("for")).show();
});

// ---------------- I P H O N E - S E C T I O N -------------

$("#iphone-accor-2,#iphone-accor-3").hide();

$(".iphone-accor").on("click", function () {
  $("#iphone-accor-1, #iphone-accor-2, #iphone-accor-3").hide();
  $($(this).attr("for")).show();
});

// ----------------- W A T C H - S E C T I O N -------------

$("#watch-accor-2").hide();

$(".watch-accor").on("click", function () {
  $("#watch-accor-1, #watch-accor-2").hide();
  $($(this).attr("for")).show();
});

// -------------- A I R P O D S - C A R O U S E L ---------------

$(".air-pod-content, .bxs-x-circle").hide();
$(".airpod-button").on("click", function () {
  $($(this).attr("for")).toggle();
});

// ---------------------- A C C E S S O R I E S - P R O D U C T - S E C T I O N ------------------

$("#accessories-category").hide();
$(".accessories-btn").on("click", function () {
  $("#accessories-product, #accessories-category").hide();
  $($(this).attr("href")).show();
});

$("#show-more-category, .show-less").hide();
$(".show-all-btn").on("click", function () {
  $("#show-more-category, .show-less, .show-more").slideToggle();
});

// ------------------ T V & H O M E - T E X T - A N I M A T I O N -------------------

const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2"),
};

const texts = [
  "Hey Siri, set my bedtime scene",
  "Hey Siri, turn off the lights downstairs",
  "Hey Siri, make it warmer",
];

const morphTime = 1;
const cooldownTime = 1;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++;
    }

    doMorph();
  } else {
    doCooldown();
  }
}

animate();
