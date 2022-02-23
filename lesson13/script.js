
let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;

function nextSlide(){
	goToSlide(currentSlide+1);
}

function previousSlide(){
	goToSlide(currentSlide-1);
}

function goToSlide(e){
	slides[currentSlide].className = 'slide';
	currentSlide = (e+slides.length)%slides.length;
	slides[currentSlide].className = 'slide showing';
}

let next = document.getElementById('next');
let previous = document.getElementById('previous');

next.addEventListener('click' , () => {
  nextSlide();
})
previous.addEventListener('click' , () => {
  nextSlide();
})


