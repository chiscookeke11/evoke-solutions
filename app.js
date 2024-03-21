gsap.registerPlugin(ScrollTrigger);



gsap.to(".square1", {
	scale:1,
	duration: 0.5,
	scrollTrigger: ".square1 ",
	filter: "blur(0)"
}) 