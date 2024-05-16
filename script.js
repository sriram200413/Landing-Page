let button = document.querySelector(".send-btn");

function sendMsg(){
  alert('Successfully Sended review to SLP Restaurant We Contact You Soon!!!');

}


const scrollRevealOption = {
    distance: "50px",
    origin: "left",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".main-container .heading-container .heading", {
    ...scrollRevealOption,
    delay: 500,
    reset: true,
  });
  
  ScrollReveal().reveal(".main-container .heading-container .information", {
    ...scrollRevealOption,
    delay: 1000,
    reset:true,
  });

  ScrollReveal().reveal(".about-info h1", {
    ...scrollRevealOption,
    delay: 500,
    origin: "bottom",
    reset:true,
  });
  ScrollReveal().reveal(".about-info h3", {
    ...scrollRevealOption,
    delay: 1000,
    origin: "bottom",
    reset:true,
  });
  
  ScrollReveal().reveal(".about-info p", {
    ...scrollRevealOption,
    delay: 1500,
    origin: "bottom",
    reset:true,

  });
  ScrollReveal().reveal(".about-details .btn", {
    ...scrollRevealOption,
    delay: 2000,
    origin: "bottom",
    reset:true,

  });
  ScrollReveal().reveal(".about img", {
    ...scrollRevealOption,
    delay: 700,
    origin: "right",
    reset:true,

  });
  ScrollReveal().reveal(".special-info h2", {
    ...scrollRevealOption,
    delay: 1000,
    origin: "left",
    reset:true,

  });

  ScrollReveal().reveal(".special-info p", {
    ...scrollRevealOption,
    delay: 1000,
    origin: "bottom",
    reset:true,

  });



 
