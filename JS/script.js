//FAQ
const faqQuestions = document.querySelectorAll(".faq");
const faqAnswers = document.querySelectorAll(".faq-a");
const faqIcons = document.querySelectorAll(".faq-icon");

faqQuestions.forEach((faqQuestion, index) => {
  faqQuestion.addEventListener("click", () => {
    faqIcons[index].classList.toggle("expand");
    faqAnswers[index].classList.toggle("expand");
  });
});

//IMAGE
var myInput = document.getElementById("myInput");
var body = document.getElementById("body");

myInput.addEventListener("input", function() {
  body.style.backgroundImage = "url(" + this.value + ")";
});
