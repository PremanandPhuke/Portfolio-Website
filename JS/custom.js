
// let btn1= document.getElementById('refresh1')
// let btn2= document.getElementById('refresh2')
// let btn3= document.getElementById('refresh3')
// let btn4= document.getElementById('refresh4')
// let btn5= document.getElementById('refresh5')



// btn1.addEventListener('click', ()=>{
//     window.location.reload();
// })
// btn2.addEventListener('click', ()=>{
//     window.location.reload();
// })
// btn3.addEventListener('click', ()=>{
//     window.location.reload();
// })
// btn4.addEventListener('click', ()=>{
//     window.location.reload();
// })
// btn5.addEventListener('click', ()=>{
//     window.location.reload();
// })


// downloadcv.addEventListener('click', ()=>{
//     downloadcv.href = `documents/PHUKE PREMANAND_CV.pdf`;
//     downloadcv.setAttribute('download');
//     downloadcv.download = `documents/PHUKE PREMANAND_CV.pdf`;
// })

let downloadcv = document.getElementById('downloadcv');
let downloadcvimg = document.getElementById('downloadcvimg');
let hii = document.getElementById('hii');
let myname = document.getElementById('myname');
let myintro = document.getElementById('myintro');
let myintro2 = document.getElementById('myintro2');
let skillcard = document.getElementById('skillcard');

let progress_line1 = document.getElementById("progress-line1");
let progress_line2 = document.getElementById("progress-line2");
let progress_line3 = document.getElementById("progress-line3");
let progress_line4 = document.getElementById("progress-line4");
let progress_line5 = document.getElementById("progress-line5");
let progress_line6 = document.getElementById("progress-line6");

let project1 = document.getElementById('project1');
let project2 = document.getElementById('project2');
let project3 = document.getElementById('project3');
let project4 = document.getElementById('project4');
let project5 = document.getElementById('project5');
let project6 = document.getElementById('project6');

let form = document.getElementById('form');
let logos = document.getElementById('logos');
let contact = document.getElementById('contact');

let emailid = document.getElementById('emailid');
let megforme = document.getElementById('megforme');
let send = document.getElementById('send');

let tab1=document.getElementById('tab1');
let tab2=document.getElementById('tab2');
let tab3=document.getElementById('tab3');
let tab4=document.getElementById('tab4');
let tab5=document.getElementById('tab5');


window.addEventListener("scroll", function () {

    // stars.addEventListener('click', scrolled1)

    if (window.pageYOffset >= 500) {
        downloadcvimg.classList.add('commingstyle');
        downloadcv.classList.add('commingstyle2');
        hii.classList.add("introstyle");
        myname.classList.add("introstyle");
        myintro.classList.add("introstyle");
        myintro2.classList.add("introstyle");

    }

    if (window.pageYOffset >= 1300) {
        // skillcard.classList.add("visiblity");
        progress_line1.style.animationPlayState = 'running';
        progress_line2.style.animationPlayState = 'running';
        progress_line3.style.animationPlayState = 'running';
        progress_line4.style.animationPlayState = 'running';
        progress_line5.style.animationPlayState = 'running';
        progress_line6.style.animationPlayState = 'running';

    }
    if (window.pageYOffset >= 2015) {
        project1.style.animationPlayState = 'running';
        project2.style.animationPlayState = 'running';
        project3.style.animationPlayState = 'running';
        project4.style.animationPlayState = 'running';
        project5.style.animationPlayState = 'running';
        project6.style.animationPlayState = 'running';

    }
    if (window.pageYOffset >= 3000) {
        form.style.animationPlayState = 'running';
        contact.style.animationPlayState = 'running';
        logos.style.animationPlayState = 'running';

    }

})


if(window.innerWidth<450){
    tab1.classList.add('col');
    tab2.classList.add('col');
    tab3.classList.add('col');
    tab4.classList.add('col');
    tab5.classList.add('col');

}
