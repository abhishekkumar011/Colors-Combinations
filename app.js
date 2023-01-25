function timelineone() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            pin:true,
            scrub:1,
        }
    })
    
    tl
    .to("#home #circle",{
        scale: 0,
        ease: "power1",
    }, "a")
    
    .to("#circle #btm img",{
        rotate: "-180deg",
        ease:Power0,
        stagger: 0.04,
    }, "a")
    
    .to("#main_h1", {
        y: 500,
    }, "a")
    
    .to("#purplecirc", {
        top: "50%",
        scale:1.4,
    }, "a")
    
    .to("#imgtop",{
        opacity:0,
    }, "a")
    
    .to("#homeimg", {
        scale: 1.2,
    }, "a")
    
    .to("#cimg", {
        opacity:1,
        scale: 0,
        // delay:.12,
    },"a")
    
    .to("#purplecirc", {
        opacity: 0,
    }, "aa")
    
    .to("#smcircle",{
        scale:0,
        ease:Power0,
    }, "aa")
    
    .to("#second_h1", {
        top: "82%",
        ease:Power0,
        rotate: "0deg"
    }, "aa")
    
    .to("#pinkbox",{
        top:0,
        delay:0.1,
    }, "aa")
    
    .to("#homeimg", {
        scale:1,
    }, "aa")
    
    .to("#pinkbox", {
        top:"-100%",
        delay:0.2
    });
}

function timelinetwo() {
    gsap.set("#soverlay #stop .circle", {top:"150%", scale: .3});

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            start: "top top",
            pin: true,
            scrub: 1,
            end: "+=" + (window.innerHeight * 5),
        }
    })

    tl2.
    to(".circle", {
        top: "50%",
        scale: 1,
        ease: "power1",
        stagger: .1
    })
    
    .to(".circle", {
        left: "50%"
    })

    .to(".circle", {
        scale: .8
    })

    .to(".circle", {
        scale: 1
    })

    .to(".circle", {
        scale: 10
    })

    .to("#stop h1", {
        x: "-100%",
        ease: Power0,
        duration:5
    }, "ss")

    .to(".circle", {
        background: "linear-gradient(to right,#D5A7B4, #B4AAD5)",
        ease: Power0,
        delay: 1.5,
    }, "ss")
}

timelineone();
timelinetwo();