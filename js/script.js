// console.log("Hi!");

// var mainTitle = document.querySelector("h1");
// console.log(mainTitle.outerHTML);

// mainTitle.innerText = "Yay, JavaScript!";

// var body = document.querySelector("body");
// console.log(body);

// body.style.backgroundColor = "#FEF2F1";

var firstListItem = document.querySelector("ul li");
// console.log(firstListItem.outerHTML);

firstListItem.style.textTransform = "uppercase";

var moreReasons = document.querySelector(".more-reasons");
// console.log(moreReasons.outerHTML);

moreReasons.style.fontSize = "2.5em";

var whyJS = document.querySelector("h2");
// console.log(whyJS.outerHTML);

whyJS.innerHTML = 'Why learn <span class="highlight">JavaScript</span>';
// console.log(whyJS);

var highlight = document.querySelector(".highlight");
highlight.style.backgroundColor = "#ffff82";

var mainImage = document.querySelector("img");
// console.log(mainImage.outerHTML);

mainImage.src = "img/js-code.png";
mainImage.alt = "JavaScript code example";
