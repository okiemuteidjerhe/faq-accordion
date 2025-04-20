/* let card = document.getElementById("f");
let qu = document.getElementById("q");
let btn = document.getElementById("b")
let img = document.getElementById("m")
let an = document.getElementById("a")
        
card.addEventListener("click",()=>{
    an.classList.toggle("reveal");
    if(an.classList.contains("reveal")){
        img.setAttribute("src", "images/icon-minus.svg")
    }else{
        img.setAttribute("src", "images/icon-plus.svg")
    }
}) */

let faqItems = document.querySelectorAll(".faq");

for(let currentFaqItem of faqItems){
    let currentAnswer = currentFaqItem.querySelector(".faq-answer");
    let currentToggleImg = currentFaqItem.querySelector(".toggle-btn img");
    let currentQuestion = currentFaqItem.querySelector(".faq-question");

    currentQuestion.addEventListener(
        "click",
        ()=>{
            let isOpen = currentAnswer.classList.contains("reveal");

            for(let otherFaqItems of faqItems){
                let otherAnswer = otherFaqItems.querySelector(".faq-answer");
                let otherToggleImg = otherFaqItems.querySelector(".toggle-btn img");
                otherAnswer.classList.remove("reveal")
                otherToggleImg.setAttribute("src", "images/icon-plus.svg")
            }

            if(!isOpen){
                currentAnswer.classList.add("reveal");
                currentToggleImg.setAttribute("src", "images/icon-minus.svg");
            }
            /* answer.classList.toggle("reveal");
            if(answer.classList.contains("reveal")){
                toggleImg.setAttribute("src", "images/icon-minus.svg")
            }else{
                toggleImg.setAttribute("src", "images/icon-plus.svg")
            } */
        }
    )
}

