// ===============================
// Portfolio JavaScript
// ===============================

// Page Load Message
window.onload = function () {
    console.log("Portfolio Loaded Successfully");
};



// ===============================
// Header Background On Scroll
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY < 50) {

        header.style.background = "#081b29";
        header.style.boxShadow = "0 0 20px aqua";

    } else {

        header.style.background = "rgba(0,0,0,0.6)";
        header.style.boxShadow = "none";

    }

});



// ===============================
// Smooth Scrolling Navbar
// ===============================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e) {

        const target = this.getAttribute("href");
        const section = document.querySelector(target);

        if (section) {

            e.preventDefault();

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});



// ===============================
// Typing Effect
// ===============================

const highlight = document.querySelector(".highlight");

const text = "Java Full Stack Developer";

let index = 0;

function typingEffect(){

    if(index < text.length){

        highlight.innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect,100);

    }
    else{

        setTimeout(()=>{

            highlight.innerHTML="";
            index=0;
            typingEffect();

        },1000);

    }

}

if(highlight){
    highlight.innerHTML="";
    typingEffect();
}



// ===============================
// Card Scroll Animation
// Fixed Hover Problem
// ===============================

const cards = document.querySelectorAll(
    ".skill, .Projects-card, .certificate"
);

// Add hidden class

cards.forEach(card=>{

    card.classList.add("hidden-card");

});



// ===============================
// Project Card Width & Position
// ===============================

const projectCards = document.querySelectorAll(".Projects-card");

projectCards.forEach(card => {

    card.style.width = "92%";
    card.style.maxWidth = "1400px";
    card.style.marginLeft = "30px";
    card.style.marginRight = "auto";
    card.style.boxSizing = "border-box";

});



// Scroll reveal

window.addEventListener("scroll",()=>{

    cards.forEach(card=>{

        let position = card.getBoundingClientRect().top;

        let screenHeight = window.innerHeight;

        if(position < screenHeight - 100){

            card.classList.add("show-card");

        }

    });

});



// ===============================
// Contact Form
// ===============================

const form = document.querySelector(".contact-form");

if(form){

    form.addEventListener("submit",function(e){

        e.preventDefault();

        let name = form.querySelector(
            "input[type='text']"
        ).value;

        let email = form.querySelector(
            "input[type='email']"
        ).value;

        let message = form.querySelector(
            "textarea"
        ).value;

        if(name==="" || email==="" || message===""){

            alert("Please fill all fields");

        }
        else{

            alert("Message Sent Successfully");

            form.reset();

        }

    });

}



// ===============================
// Profile Image Hover Effect
// ===============================

const image = document.querySelector(".profile-img");

if(image){

    image.addEventListener("mouseenter",()=>{

        image.style.transform="scale(1.1)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform="scale(1)";

    });

}



// ===============================
// Back To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML="↑";

topButton.id="topButton";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="20px";
topButton.style.right="20px";
topButton.style.padding="12px 18px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.background="aqua";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.fontSize="20px";



window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topButton.style.display="block";

    }
    else{

        topButton.style.display="none";

    }

});



topButton.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};



// ===============================
// Console
// ===============================

console.log(
    "Abhishek Yadav Portfolio"
);