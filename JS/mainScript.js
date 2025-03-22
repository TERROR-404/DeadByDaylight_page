let image = document.getElementsByClassName("images")[0];
const dots = document.getElementsByClassName('fa-solid fa-circle');
dots[0].style.filter = 'contrast(100%)';
let interval;
let a = 0;
const images = [
    '<img src="images/killerImage1.jpg" alt="killerImage">',
    '<img src="images/killerImage2.jpg" alt="killerImage">',
    '<img src="images/killerImage3.jpg" alt="killerImage">',
    '<img src="images/killerImage4.jpg" alt="killerImage">',
    '<img src="images/killerImage5.jpg" alt="killerImage">'
    ];
for (let dot = 0; dot < dots.length; dot++) {
    dots[dot].addEventListener("click", () =>{
        for (let i of dots) {
            i.style.filter = null;
        }
        dots[dot].style.filter = 'contrast(100%)';
        image.innerHTML = images[dot];
        a = dot;
        a == 4 ? a=-1 : a=a ;
        clearInterval(interval);
        interval = setInterval(Inter,2000);
    })
}
function Inter() {
    a++;
    image.innerHTML = images[a];
    for (let i of dots) {
        i.style.filter = null;
    }
    dots[a].style.filter = 'contrast(100%)';
    if (a == 4){
        a = -1;
    }
};
interval = setInterval(Inter,2000);

