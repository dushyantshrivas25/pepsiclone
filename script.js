gsap.from(".nav img , h5,.nav-part2",{
    y:-100,
    duration:0.4,
    stagger:0.2,
    opacity:0.9,
})



gsap.from(".page-7-left .twil-can",{
    x:-100,
    duration:0.01,
  
    opacity:0,
    scrollTrigger:{
 trigger:".page-7-left .twil-can",
 scroller:"body",
   } 
})
gsap.from(".page-7-right img",{
    x:100,
    duration:0.01,

    opacity:0,
    scrollTrigger:{
 trigger:".page-7-right img",
 scroller:"body",
    }
})

gsap.from(".page-8-left button ",{
    x:-100,
    duration:0.1111,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".page-8-left h1",
        scroller:"body"
    }
    
})
gsap.from(".page-8-left h1 ",{
    x:-100,
    duration:0.1111,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".page-8-left h1",
        scroller:"body"
    }
    
})
gsap.from(".page-8-left p ",{
    x:-100,
    duration:0.1111,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".page-8-left h1",
        scroller:"body"
    }
    
})

gsap.from(".page-8-right img ",{
    x:100,
    duration:0.1,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".page-8-right img",
        scroller:"body"
    }
})
gsap.from(".section-9 h1",{
    y:50,
    duration:0.1,
    delay:.8,
    opacity:0.01,
    scrollTrigger:{
        trigger:".section-9",
        scroller:"body"
    }
})
gsap.from(".page-9-main >div ",{
    y:100,
    duration:0.1,
    delay:.9,
    opacity:0.01,
    stagger:.1,
  
    scrollTrigger:{
        trigger:".section-9",
        scroller:"body"
    }
})

const arrow = document.querySelector(".nav-part1 .ri-arrow-down-s-line")
const page = document.querySelector(".nav-up-slide")
const main = document.querySelector(".main")
let flag = 0;
arrow.addEventListener("click",function(){
    if(flag == 0){
page.style.top = "0"
// main.style.display = "none"
flag = 1;
    }
    else{
page.style.top = "-200%"
// main.style.display = "initial"
flag = 0;
    }
})

