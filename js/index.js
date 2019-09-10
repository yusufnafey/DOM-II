// Your code goes here
const mainTitle = document.querySelector(".logo-heading");
mainTitle.addEventListener("copy", e => {
  mainTitle.style.display = "none";
});

window.addEventListener("keydown", e => {
  const welcomeTitle = document.querySelector(".home .intro h2");
  welcomeTitle.textContent = "You Pressed A Button!";
});

const busImage = document.querySelector(".home .intro img");
busImage.addEventListener("contextmenu", e => {
  busImage.src =
    "https://images.unsplash.com/photo-1517259059569-1501714ec1ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80";
});

const firstParagraph = document.querySelector("p");
firstParagraph.addEventListener("click", e => {
  firstParagraph.style.color = "red";
});

const header = document.querySelector(".container .intro");
header.addEventListener("dblclick", e => {
  header.style.background = "green";
});

const riverImage = document.querySelector(".inverse-content .img-content img");
riverImage.addEventListener("mouseover", e => {
  e.currentTarget.style.display = "none";
});

const footer = document.querySelector(".content-pick div:nth-child(2) p");
footer.addEventListener("click", e => {
  e.currentTarget.parentNode.style.background = "red";
});

const mainHeader = document.querySelector(".main-navigation");
mainHeader.addEventListener("click", () => {
  console.log("mainHeader was clicked!");
});

const firstPic = document.querySelector(".intro img");
firstPic.addEventListener("mouseover", e => {
  e.currentTarget.parentNode.style.color = "red";
});

const introText = document.querySelector("p");
introText.addEventListener("dblclick", () => {
  introText.style.background = "black";
});
