// ======== GLOBAL VARIABLES ========
// Define global variables here 👇, such as data arrays, or tracking app state
var images = [
  // Array to store image URLs*/
  // This array stores the paths or URLs for all the images the app can use for posters.*/
  // It keeps app data organized and accessible for when the app generate random posters.*/
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];

var unmotivationalImages = [
  "./assets/failure.jpg",
  "./assets/mediocrity.jpg",
  "./assets/regret.jpg",
  "./assets/futility.jpg",
  "./assets/defeat.jpg",
  "./assets/hopelessness.jpg",
  "./assets/neglect.jpg",
  "./assets/fear.jpg",
  "./assets/apathy.jpg",
  "./assets/misery.jpg",
  "./assets/blame.jpg",
  "./assets/doubt.jpg"
];

var unmotivationalTitles = [
  "Failure",
  "Mediocrity",
  "Regret",
  "Futility",
  "Defeat",
  "Hopelessness",
  "Neglect",
  "Fear",
  "Apathy",
  "Misery",
  "Blame",
  "Doubt"
];

var unmotivationalQuotes = [
  "Why bother trying? It's probably not worth it.",
  "Dreams are just that—dreams.",
  "Hard work rarely pays off.",
  "You're not good enough.",
  "It's too late to start now.",
  "Stay in your comfort zone; it's safer.",
  "Happiness is overrated.",
  "Giving up is always an option.",
  "No one cares about your effort.",
  "Why take risks when you can stay stagnant?",
  "Expect disappointment and you'll never be disappointed.",
  "Success is for other people, not you."
];
var titles = [
  // Array to store motivational titles
  // This array contains the motivational titles that will be used for posters. 
  // Each poster generated will jave a randomly selected title from the list.
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  // Array to store motivational quotes
  // These quotes are randomly selected to provide inspirtition in the generated psoter
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
// Array to store saved posters
// This array will be used to store posters that the user descides to save.
// It start aas empty, and posters are added over time as the user interacts with the application.
var currentPoster;
// This variable holds the currently displayed poster
// It starts as an object with the current image URL, title, and quote.
// It will chnage every time a new poster is generated.

// ======== QUERY SELECTORS ========
// Select DOM elements that will be manipulated in the code
var makePosterButton = document.querySelector(".make-poster");
var imageInput = document.getElementById("poster-image-url")
var titleInput = document.getElementById("poster-title");
var quoteInput = document.getElementById("poster-quote");
var posterImg = document.querySelector(".poster-img");
var posterTitle = document.querySelector(".poster-title");
var posterQuote = document.querySelector(".poster-quote");
var mainPosterSection = document.querySelector(".main-poster");
var formSection = document.querySelector(".poster-form");
var savedPostersSection = document.querySelector(".saved-posters");
var showFormButton = document.querySelector(".show-form");
var showRandomButton = document.querySelector(".show-random");
var savePosterButton = document.querySelector(".save-poster");
var viewSavedButton = document.querySelector(".show-saved");
var backToMainButton = document.querySelector(".back-to-main");
var savedPostersGrid = document.querySelector(".saved-posters-grid");
var showUnmotivational = document.querySelector(".show-unmotivational")
var backToMainUnmotivational = document.querySelector(".back-to-main-unmotivational")

// ======== UTILITY FUNCTIONS ========
// Helper functions that perform small, reusable tasks

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(),
    imageURL: imageURL,
    title: title,
    quote: quote
  };
}

function updatePosterInDOM(poster) {
  posterImg.src = poster.imageURL;
  posterTitle.innerText = poster.title;
  posterQuote.innerText = poster.quote;
}

// ======== MAIN FUNCTIONS ========
// Define core app functionality here
// Add delete functionality for saved posters
function deletePoster(event) {
  if (event.target.closest(".mini-poster")) {
    const posterToDelete = event.target.closest(".mini-poster");
    const indexToDelete = [...savedPostersGrid.children].indexOf(posterToDelete);
    savedPosters.splice(indexToDelete, 1);
    displaySavedPosters(); // Refresh the saved posters grid
  }
}

// Add functionality to create a custom poster
function createCustomPoster(event) {
  event.preventDefault();
  var customImage = imageInput.value;
  var customTitle = titleInput.value;
  var customQuote = quoteInput.value;
  currentPoster = createPoster(customImage, customTitle, customQuote);
  updatePosterInDOM(currentPoster);
  showView(mainPosterSection);
}

function generateRandomPoster() {
  var randomImage = images[getRandomIndex(images)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomQuote = quotes[getRandomIndex(quotes)];
  currentPoster = createPoster(randomImage, randomTitle, randomQuote);
  updatePosterInDOM(currentPoster);
  console.log("Random poster generated:", currentPoster);
}

function savePoster() {
  if (!savedPosters.some(poster => poster.id === currentPoster.id)) {
    savedPosters.push(currentPoster);
    console.log("Poster saved:", currentPoster);
  } else {
    console.log("Poster already saved.");
  }
}

function displaySavedPosters() {
  savedPostersGrid.innerHTML = ""; // Clear existing posters
  savedPosters.forEach(poster => {
    var miniPoster = document.createElement("div");
    miniPoster.classList.add("mini-poster");
    miniPoster.innerHTML = `
      <img src="${poster.imageURL}" alt="Poster Image">
      <h2>${poster.title}</h2>
      <h4>${poster.quote}</h4>
    `;
    savedPostersGrid.appendChild(miniPoster);
  });
}

function displayUnmotivationalPosters() {
  var grid = document.querySelector(".unmotivational-posters-grid"); // Select the unmotivational posters grid
  grid.innerHTML = ""; // Clear existing content

  // Loop through the unmotivational posters data
  for (var i = 0; i < unmotivationalImages.length; i++) {
    var posterDiv = document.createElement("div"); // Create a container for each poster
    posterDiv.classList.add("unmotivational-poster"); // Add class for styling
    posterDiv.innerHTML = `
      <img src="${unmotivationalImages[i]}" alt="${unmotivationalTitles[i]}">
      <h2>${unmotivationalTitles[i]}</h2>
      <h4>${unmotivationalQuotes[i]}</h4>
    `;
    grid.appendChild(posterDiv); // Add the poster to the grid
  }
}

// ======== EVENT HANDLERS ========
// Define event handler functions here

function handleShowForm() {
  showView(formSection);
}

function handleShowSaved() {
  showView(savedPostersSection);
  displaySavedPosters();
}

function handleBackToMain() {
  showView(mainPosterSection);
}

function handleShowUnmotivational() {
  showView(document.querySelector(".unmotivational-posters"));
  displayUnmotivationalPosters();
}

function handleBackToMainFromUnmotivational() {
  showView(mainPosterSection);
}

// ======== EVENT LISTENERS ========
// Add event listeners to make the page interactive

showRandomButton.addEventListener("click", generateRandomPoster);
savePosterButton.addEventListener("click", savePoster);
showFormButton.addEventListener("click", handleShowForm);
viewSavedButton.addEventListener("click", handleShowSaved);
backToMainButton.addEventListener("click", handleBackToMain);
makePosterButton.addEventListener("click", createCustomPoster);
savedPostersGrid.addEventListener("dblclick", deletePoster);
showUnmotivational.addEventListener("click", handleShowUnmotivational);
backToMainUnmotivational.addEventListener("click", handleBackToMainFromUnmotivational);

// ======== VIEW MANAGEMENT ========
// Functions to toggle views

function showView(viewToShow) {
  mainPosterSection.classList.add("hidden");
  formSection.classList.add("hidden");
  savedPostersSection.classList.add("hidden");
  viewToShow.classList.remove("hidden");
  console.log("View switched to:", viewToShow.className);
}

// ======== INITIALIZATION ========
// Set up the initial state of the app
generateRandomPoster();