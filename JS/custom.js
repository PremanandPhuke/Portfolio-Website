// var btn1= document.getElementById('refresh1')
// var btn2= document.getElementById('refresh2')
// var btn3= document.getElementById('refresh3')
// var btn4= document.getElementById('refresh4')
// var btn5= document.getElementById('refresh5')



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

var downloadcv = document.getElementById('downloadcv');
var downloadcvimg = document.getElementById('downloadcvimg');
var hii = document.getElementById('hii');
var myname = document.getElementById('myname');
var myintro = document.getElementById('myintro');
var myintro2 = document.getElementById('myintro2');
var skillcard = document.getElementById('skillcard');

var progress_line1 = document.getElementById("progress-line1");
var progress_line2 = document.getElementById("progress-line2");
var progress_line3 = document.getElementById("progress-line3");
var progress_line4 = document.getElementById("progress-line4");
var progress_line5 = document.getElementById("progress-line5");
var progress_line6 = document.getElementById("progress-line6");

var project1 = document.getElementById('project1');
var project2 = document.getElementById('project2');
var project3 = document.getElementById('project3');
var project4 = document.getElementById('project4');
var project5 = document.getElementById('project5');
var project6 = document.getElementById('project6');

var form = document.getElementById('form');
var logos = document.getElementById('logos');
var contact = document.getElementById('contact');

var emailid = document.getElementById('emailid').value;
var megforme = document.getElementById('megforme').value;
var send = document.getElementById('send');

var tab1 = document.getElementById('tab1');
var tab2 = document.getElementById('tab2');
var tab3 = document.getElementById('tab3');
var tab4 = document.getElementById('tab4');
var tab5 = document.getElementById('tab5');

var portfolio= document.getElementById('portfolio');

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
    // if (window.pageYOffset >= 2015) {
    //     project1.style.animationPlayState = 'running';
    //     project2.style.animationPlayState = 'running';
    //     project3.style.animationPlayState = 'running';
    //     project4.style.animationPlayState = 'running';
    //     project5.style.animationPlayState = 'running';
    //     project6.style.animationPlayState = 'running';
    // }
    if (window.pageYOffset >= 2500) {
        form.style.animationPlayState = 'running';
        contact.style.animationPlayState = 'running';
        logos.style.animationPlayState = 'running';
    }
})


if (window.innerWidth < 450) {
    tab1.classList.add('col');
    tab2.classList.add('col');
    tab3.classList.add('col');
    tab4.classList.add('col');
    tab5.classList.add('col');
}

portfolio.addEventListener('click', ()=>{
    window.location.reload();
})
