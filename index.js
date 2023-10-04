// get all images slider
const imagesSlider = Array.from(document.querySelectorAll('.conteinerSlider .images img'));
// get length images
const lengthImages = imagesSlider.length;
// set location stating slider
let locationSlide = 1;
// project Nummber Element
const numElement = document.querySelector('.projectNum');
// controles btns
const nextBtn = document.querySelector('.conteinerControl .next');
const prevBtn = document.querySelector('.conteinerControl .prev');
console.log(nextBtn);
console.log(prevBtn);

// handle click bottons
nextBtn.onclick = nextproject
prevBtn.onclick = prevproject

// create ul bullets
const ul = document.createElement('ul')
ul.setAttribute('id', 'ulBullets')
    // ctrate li
for (let index = 1; index <= lengthImages; index++) {
    const li = document.createElement('li')
    li.setAttribute('data-index', index)
    console.log(li)
    ul.appendChild(li)
}
document.querySelector('.bullest').appendChild(ul)
    // get id ulBullets
const idUl = document.querySelector('#ulBullets')
    // convert ul to Array
const allBuletts = Array.from(document.querySelectorAll('#ulBullets li'));

// loop from li bullets
for (let i = 0; i < allBuletts.length; i++) {
    allBuletts[i].onclick = function() {
        locationSlide = parseInt(this.getAttribute('data-index'));
        checker();
    }
}

// Trigger The Checker Function
checker()

function nextproject() {
    if (nextBtn.classList.contains('desapled')) {
        // you can not typing any thing
        return false
    } else {
        locationSlide++
        checker()
    }
}

function prevproject() {
    if (prevBtn.classList.contains('desapled')) {

    } else {
        locationSlide--
        checker()
    }
}

// ctreate checker function
function checker() {
    // set image slide number
    numElement.textContent = `slide #${locationSlide} of ${lengthImages}`
        //remove class acrive from all
    removeActiveClass()
        // set active class
    imagesSlider[locationSlide - 1].classList.add('active')
        // set bullets active class
    ul.children[locationSlide - 1].classList.add('active')
        // add and ramova class desapled from next and prev btns
    if (locationSlide === 1) {
        // add disaple prev btn
        prevBtn.classList.add('desapled')
    } else {
        // remove disaple prev btn
        prevBtn.classList.remove('desapled')
    }
    if (locationSlide === lengthImages) {
        // add disaple next btn
        nextBtn.classList.add('desapled')
    } else {
        // remove disaple next btn
        nextBtn.classList.remove('desapled')
    }
}

function removeActiveClass() {
    imagesSlider.forEach(images => {
        images.classList.remove('active')
    })
    allBuletts.forEach(buletts => {
        buletts.classList.remove('active')
    })
}