function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

init();
var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");

main.addEventListener("mousemove", function(dets) {
    crsr.style.left = (dets.pageX - crsr.offsetWidth / 2) + "px";
    crsr.style.top = (dets.pageY - crsr.offsetHeight / 2) + "px";
});


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        markers: false, 
        start: "top 27%",
        end: "top 0",
        scrub: 2
    }
});


tl.to(".page1 h1", { x: -100 }, "start");

 tl .to(".page1 h2", { x: 100 }, "start"); 
 tl.to(".page1 video",{ width:"90%"},"start");

 
 const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -127%",
        end: "top -130%",
        scrub: 2
    }
});


tl2.to(".main", {
    backgroundColor: "#fff"
});

const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        markers: false,
        start: "top -280%",
        end: "top -300%",
        scrub: 2
    }
});

tl3.to(".main", {
    backgroundColor: "#0F0D0D" 
})
.to(".elem h1", {
    color: "white",
    duration: 0.5 
}, "<"); 



