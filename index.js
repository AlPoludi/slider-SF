const nextBtn = document.querySelector('#next'); 
const prevBtn = document.querySelector('#prev');

const slides = document.querySelectorAll('.slider_item');
const slidesPoint = document.querySelectorAll('.rect'); 
const cities = document.querySelectorAll('.nav_link'); 

const nameCity = document.querySelector('#city'); 
const area = document.querySelector('#apart');  
const date  = document.querySelector('#time'); 

const aboutCity = [
    {
        city: "Rostov-on-Don LCD admiral",
        apart: "81 m2",
        time: "3.5 months",
    }, 
    {
        city: "Sochi \n Thieves",
        apart: "105 m2",
        time: "4 months", 
    },
    {
       
        city: "Rostov-on-Don \n Patriotic",
        apart: "93 m2",
        time: "3 months", 
    }
];

let currentIndex = 0; 

function activeSlide (index){

    for (let i = 0; i < slides.length; i++){ 

        slides[i].classList.remove('hidden');
        slides[index].classList.add('hidden');

        slidesPoint[i].classList.remove('active');
        slidesPoint[index].classList.add('active');

        cities[i].classList.remove('nav_link-active');
        cities[index].classList.add('nav_link-active');

        nameCity.innerText = aboutCity[index].city;
        area.innerText = aboutCity[index].apart;
        date.innerText = aboutCity[index].time;
    }
}

slidesPoint.forEach(function(item, indexPoint){

    item.addEventListener('click', function (){

        currentIndex = indexPoint;
        activeSlide(currentIndex);
    });
});

cities.forEach(function(item, indexCity){

    item.addEventListener('click', function (){

        currentIndex = indexCity;
        activeSlide(currentIndex);
    });
});

nextBtn.addEventListener('click', function(){

    if (currentIndex == slides.length - 1){

        currentIndex = 0;
        activeSlide(currentIndex);
    } else {

        currentIndex++;
        activeSlide(currentIndex);
    }
});

prevBtn.addEventListener('click', function(){

    if (currentIndex == 0){

        currentIndex = slides.length - 1;
        activeSlide(currentIndex);
    } else {
        currentIndex--;
        activeSlide(currentIndex);
    }
});