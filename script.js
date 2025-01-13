// Script File

// Home Section Starts
var menuBtn = document.querySelector('.main-navbar .menu-btn');
var menuList = document.querySelector('.main-navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menuList.classList.toggle('active');
});

for(var i = 0; i < menuListItems.length; i++){
	menuListItems[i].addEventListener('click', menuItemClicked);
}
function menuItemClicked(){
	menuBtn.classList.remove('active');
	menuList.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 120){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
// Home Section Ends

// Partners Section Starts 
$('.partners-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
        	items:5
        }
    }
})
// Partners Section Ends 

// Testimonials Section Starts
$('.testimonials-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
})
// Testimonials Section Ends


// Initialize EmailJS with your User ID
emailjs.init('C6SQiU60Lgz54G-Ga'); // Replace with your EmailJS User ID

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = this;
    console.log(form)
    // Show a loading message or spinner if needed
    const responseMessage = document.getElementById('response-message');
    responseMessage.textContent = 'Sending...';

    // Send the form data using EmailJS
    emailjs.sendForm('service_kpwjft8', 'template_d3l67vo', form) // Replace placeholders
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            responseMessage.textContent = 'Your message has been sent successfully!';
            responseMessage.style.color = '#28a745';
            form.reset(); // Reset the form
        })
        .catch((error) => {
            console.error('FAILED...', error);
            responseMessage.textContent = 'Failed to send the message. Please try again later.';
            responseMessage.style.color = '#dc3545';
        });
});
