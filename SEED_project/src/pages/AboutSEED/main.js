//selectors
const textB = document.querySelector('.aboutB');
const imageB = document.querySelector('.image');
const imageS = document.querySelector('.image2')
const textS = document.querySelector('.aboutS')
window.addEventListener('scroll', appearOnScroll);

function appearOnScroll() {
    let textPositionB = textB.getBoundingClientRect().top;
    let textPositionS = textS.getBoundingClientRect().top;
    let windowHeight = window.innerHeight/1.5;
    if (windowHeight>textPositionB){
        //make appear
        textB.classList.remove('push-right');
        imageB.classList.remove('push-left');
    } else {
        textB.classList.add('push-right');
        imageB.classList.add('push-left');
    }
    // Shelley
    if (windowHeight>textPositionS){
        //make appear
        textS.classList.remove('push-right');
        imageS.classList.remove('push-left');
    } else {
        textS.classList.add('push-right');
        imageS.classList.add('push-left');
    }

}