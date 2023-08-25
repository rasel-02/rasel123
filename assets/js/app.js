let word = document.querySelectorAll(".word");
word.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span =document.createElement("span");
        span.textContent = letter;
        span.className = "lettaer";
        word.append(span);
    });
});

let currentWordIndex =0;
let maxWordIndex = word.length -1;
word[currentWordIndex].styel.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
        letter.className = "letter out";
        },i * 80);
    });
    nextWord.styel.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className ="letter behind";
        setTimeout(()=>{
            letter.className = "letter in"
        },340 + i * 80);
    })
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex = 1;
};

changeText();
setInterval(changeText,3000)



// skilss section -----------------------------------//
const chrekile = document.querySelectorAll('.chrekile');
chrekile.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;


    for(let i = 0 ; i < dots ; i++){
        points += `<div class="points" styel="--(i):${i}; --rot:${rotate}deg"></div>`
    }
    elem.innerHTML = points;
})

// filer section //
var mixer = mixitup('.Portfolio-gallery');


// nav list section // 
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu(){
    let len = section.length;
    while(--len && window.scroll +97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

// stky nav ber /////
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 50)
    
})




