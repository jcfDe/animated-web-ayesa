gsap.registerPlugin(ScrollTrigger)

const grapeColor = '#0000d0';
const turquesaColor = '#43D8C9';
const lavandaColor = '#ab76ff';
const fucciaColor = '#ff3184';

var height = 45;
var height2 = 135;

var posTop1 = -45;
var posTop2 = -90;
var posTop3 = -135;
var posTop4 = -180;
var posTop5 = -250;
var posTop6 = -360;

var posBottom1 = 45;
var posBottom2 = 60;

var mobile = (window.screen.width < 600)

if (mobile) {
    height = 90;
    height2 = 135;

    posTop1 = -90;
    posTop2 = -180;
    posTop3 = -250;
    posTop4 = -360;
    posTop5 = -400;
    posTop6 = -500;

    var posBottom1 = 45;
    var posBottom2 = 60;
}

const tl0 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step0',
        start: 'top 1%',
        end: 'bottom 1%',
        ease: 'none',
        scrub: 1,
        pinSpacing: true,
        toggleActions: 'play reverse play reverse',
        //markers: false,
        onEnter: () => {

            gsap.to('.background--waves', {
                scale: 1,
                opacity: 1,
            })
            gsap.from('.say', {
                opacity: 0,
                letterSpacing: 20,
                left: -50,
                duration: 1,
            })
            gsap.from('.h', {
                opacity: 0,
                y: posBottom2,
                duration: 1,
            })
            gsap.from('.i', {
                opacity: 0,
                y: 30,
                duration: 1,
            })
            gsap.from('.barra', {
                opacity: 0,
                width: 0,
                duration: 1,

            })
            gsap.from('.barra-container', {
                left: -50,
                duration: 1,
            })
            gsap.from('.name', {
                opacity: 0,
                delay: 1,
                y: posBottom2,
                height: 0,
                duration: 0.5,
            })
        },
    }
});

var bgHeight = $('.background--waves').outerHeight()

tl0.to('.background--waves', {
    y: -bgHeight
}).to('.welcome', {
    y: -400,
    opacity: 0
}, 0)

const tllinesWhite = gsap.timeline({
    scrollTrigger: {
        trigger: '.step1',
        start: 'top 50%',
        end: 'bottom+=205% 50%',
        scrub: 1,
        ease: 'none',
        toggleActions: 'play none play none',
        markers: false,
        onEnter: () => {
            gsap.to('.background--lineas--white, .background--lineas--pink', {
                opacity: 1,
            })
            gsap.to('.background--lineas--blur', {
                opacity: 1,
                delay: 0.61
            })
        },
        onLeave: () => {
            gsap.to('.background--lineas--white, .background--lineas--pink, .background--lineas--blur', {
                opacity: 0,
                duration: 0.3
            })
            gsap.to('.background--lineas--white, .background--lineas--pink, .background--lineas--blur', {
                delay: 0.3,
                backgroundPosition: '0% 0%'
            })
        },
        onLeaveBack: () => {
            gsap.to('.background--lineas--white, .background--lineas--pink, .background--lineas--blur', {
                opacity: 0,
                backgroundPosition: '0% 0%'
            })
        },
        onEnterBack: () => {
            gsap.to('.background--lineas--white, .background--lineas--pink', {
                opacity: 1,
            })
            gsap.to('.background--lineas--blur', {
                opacity: 1,
                delay: 0.61
            })
        },
    }
});
tllinesWhite.to('.background--lineas--white', {
    backgroundPosition: '0% -80%'
}).to('.background--lineas--pink', {
    backgroundPosition: '0% -75%'
}, 0).to('.background--lineas--blur', {
    backgroundPosition: '0% -100%'
}, 0)


const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step1',
        start: '10% 50%',
        end: '50% 50%',
        ease: 'power1.out',
        pinSpacing: true,
        markers: false,
        onEnter: () => {
            gsap.to('.text--1', {
                opacity: 1,
                height: height,
                y: posTop1
            })
            gsap.to('.text--2', {
                opacity: 0,
                height: 0,
                y: 0
            })
        },
        onLeave: () => {},
        onEnterBack: () => {
            gsap.to('.text--2', {
                opacity: 0,
                height: 0,
                y: 0
            })
        },
        onLeaveBack: () => {
            gsap.to('.text--1', {
                opacity: 0,
                height: 0,
                y: posBottom1
            })
        },
    }
});
const tl1_2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step1',
        start: '50% 50%',
        end: 'bottom 50%',
        ease: 'power1.out',
        pinSpacing: true,
        //toggleActions: 'play reverse play reverse',
        markers: false,
        onEnter: () => {
            gsap.to('.text--2', {
                opacity: 1,
                height: height,
                y: posTop1
            })
            gsap.to('.text--1', {
                y: posTop2
            })
        },
        onLeave: () => {
            gsap.to('.text--2', {
                opacity: 0,
                height: 0,
                y: posTop2
            })
            gsap.to('.text--1', {
                y: posTop3,
                opacity: 0,
                height: 0,
            })
        },
        onEnterBack: () => {
            gsap.to('.text--2', {
                opacity: 1,
                height: height,
                y: posTop1
            })
            gsap.to('.text--1', {
                opacity: 1,
                height: height,
                y: posTop2
            })
        },
        onLeaveBack: () => {
            gsap.to('.text--2', {
                opacity: 0,
                height: 0,
                y: posTop2
            })
            gsap.to('.text--1', {
                y: posTop1
            })
        },
    }
});

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step2',
        start: 'top 50%',
        end: '50% 50%',
        ease: 'power1.out',
        pinSpacing: true,
        toggleActions: 'play none none reverse',
        markers: false,
        onEnter: () => {
            gsap.to('.text--3', {
                opacity: 1,
                height: height,
                y: posTop2
            })
            gsap.to('.text--3b', {
                opacity: 1,
                height: height,
                y: posTop1
            })
            gsap.to('.text--4', {
                opacity: 0,
                height: 0,
                y: 0
            })
        },
        onLeave: () => {},
        onEnterBack: () => {
            gsap.to('.text--4', {
                opacity: 0,
                height: 0,
                y: 0
            })
        },
        onLeaveBack: () => {
            gsap.to('.text--3', {
                opacity: 0,
                height: 0,
                y: posBottom1
            })

            gsap.to('.text--3b', {
                opacity: 0,
                height: 0,
                y: posBottom1
            })
        },
    }
});

const tl2_2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step2',
        start: '50% 50%',
        end: 'bottom 50%',
        ease: 'power1.out',
        pinSpacing: true,
        //toggleActions: 'play reverse play reverse',
        markers: false,
        onEnter: () => {
            gsap.to('.text--4', {
                opacity: 1,
                height: height,
                y: posTop1
            })
            gsap.to('.text--3', {
                opacity: 0,
                height: 0,
            })
            gsap.to('.text--3b', {
                opacity: 0,
                height: 0,
            })
        },
        onLeave: () => {
            gsap.to('.text--4', {
                opacity: 0,
            })
            gsap.to('.text--3', {
                y: posTop3,
                opacity: 0,
                height: 0,
            })
            gsap.to('.text--3b', {
                y: posTop3,
                opacity: 0,
                height: 0,
            })
        },
        onEnterBack: () => {
            gsap.to('.text--4', {
                opacity: 1,
                height: height,
                y: posTop1
            })
            gsap.to('.text--3', {
                opacity: 0,
            })
            gsap.to('.text--3b', {
                opacity: 0,
            })
        },
        onLeaveBack: () => {
            gsap.to('.text--4', {
                opacity: 0,
                height: 0,
            })
            gsap.to('.text--3', {
                opacity: 1,
                height: height,
                y: posTop2
            })
            gsap.to('.text--3b', {
                opacity: 1,
                height: height,
                y: posTop1
            })
        },
    }
});

tl2.to('.container__animation', {
    backgroundColor: turquesaColor,
});

const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step3',
        start: 'top 50%',
        end: '50% 50%',
        //scrub: 1,
        ease: 'power1.out',
        //pinSpacing: true,
        toggleActions: 'play none none reverse',
        markers: false,
        onEnter: () => {
            gsap.to('.text--5', {
                opacity: 1,
                height: height,
                y: posTop1
            })

        },
        onLeave: () => {},
        onEnterBack: () => {
            gsap.to('.text--5', {
                opacity: 1,
                height: height,
                y: posTop1
            })
        },
        onLeaveBack: () => {
            gsap.to('.text--5', {
                opacity: 0,
                height: 0,
                y: posBottom1
            })
        },
    }
});

tl3.to('.container__animation', {
    backgroundColor: lavandaColor,
});

const tl3_2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step3',
        start: '50% 50%',
        end: 'bottom 50%',
        ease: 'power1.out',
        pinSpacing: true,
        //toggleActions: 'play reverse play reverse',
        //markers: false,
        onEnter: () => {
            gsap.to('.text--5', {
                y: posTop2
            })
            gsap.to('.text--6', {
                opacity: 1,
                height: height,
                y: posTop1
            })
        },
        onLeave: () => {
            gsap.to('.text--5', {
                y: posTop3,
                opacity: 0,
                height: 0,
            })
            gsap.to('.text--6', {
                opacity: 0,
                height: 0,
                y: posTop2
            })
        },
        onEnterBack: () => {
            gsap.to('.text--5', {
                opacity: 1,
                height: height,
                y: posTop2
            })
            gsap.to('.text--6', {
                opacity: 1,
                height: height,
                y: posTop1
            })
        },
        onLeaveBack: () => {
            gsap.to('.text--5', {
                y: posTop1
            })
            gsap.to('.text--6', {
                opacity: 0,
                height: 0,
                y: 0
            })
        },
    }
});

const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step4',
        start: 'top 50%',
        end: '90% 50%',
        scrub: 1,
        ease: 'power1.out',
        pinSpacing: true,
        toggleActions: 'play none play reverse',
        markers: false,
        onEnter: () => {
            gsap.to('.cuadro-rosa', {
                opacity: 1,
            });
        },
        onLeave: () => {},
        onEnterBack: () => {
            gsap.to('.cuadro-rosa', {
                opacity: 1,
            })
        },
        onLeaveBack: () => {
            gsap.to('.cuadro-rosa', {
                opacity: 0,
            })
        },
    }
});

tl4.to('.cuadro-rosa', {
    width: '100%',
    height: '100%',
});

const tl4_1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step4',
        start: '10% 50%',
        end: '40% 50%',
        ease: 'power1.out',
        pinSpacing: true,
        //toggleActions: 'play none play reverse',
        markers: false,
        onEnter: () => {
            gsap.to('.text--7', {
                opacity: 1,
                height: height,
                y: posTop1,
            });
        },
        onLeave: () => {
            gsap.to('.text--7', {
                opacity: 0,
                height: 0,
                y: posTop2,
            });
        },
        onEnterBack: () => {
            gsap.to('.text--7', {
                opacity: 1,
                height: height,
                y: posTop1
            })
        },
        onLeaveBack: () => {
            gsap.to('.text--7', {
                opacity: 0,
                height: 0,
                y: 0,
            })
        },
    }
});

const tl4_2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step4',
        start: '10% 50%',
        end: '40% 50%',
        scrub: 1,
        ease: 'power1.out',
        pinSpacing: true,
        toggleActions: 'play none play reverse',
        markers: false,
        onEnter: () => {
            gsap.to('.container__animation', {
                backgroundColor: grapeColor,
            });
        },
        onLeave: () => {},
        onEnterBack: () => {
            gsap.to('.container__animation', {
                backgroundColor: grapeColor,
            })
        },
        onLeaveBack: () => {
            gsap.to('.container__animation', {
                backgroundColor: lavandaColor,
            })
        },
    }
});

const tl4_3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step4',
        start: '40% 50%',
        end: 'bottom 50%',
        scrub: 1,
        ease: 'power1.out',
        pinSpacing: true,
        toggleActions: 'play none play reverse',
        markers: false,
        onEnter: () => {
            gsap.to('.container__animation', {
                backgroundColor: turquesaColor,
            });
        },
        onLeave: () => {
            gsap.to('.container__animation', {
                backgroundColor: grapeColor,
            });
        },
        onEnterBack: () => {
            gsap.to('.container__animation', {
                backgroundColor: turquesaColor,
            })
        },
        onLeaveBack: () => {
            gsap.to('.container__animation', {
                backgroundColor: lavandaColor,
            })
        },
    }
});

const tl4_4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step4',
        start: '40% 50%',
        end: '70% 50%',
        ease: 'power1.out',
        pinSpacing: true,
        //toggleActions: 'play none play reverse',
        markers: false,
        onEnter: () => {
            gsap.to('.text--8', {
                opacity: 1,
                height: height,
                y: posTop1,
            });
        },
        onLeave: () => {
            gsap.to('.text--8', {
                opacity: 0,
            });
        },
        onEnterBack: () => {
            gsap.to('.text--8', {
                opacity: 1,
                height: height,
                y: posTop1
            })
        },
        onLeaveBack: () => {
            gsap.to('.text--8', {
                opacity: 0,
            })
        },
    }
});

if (mobile) {
    const tl4_5 = gsap.timeline({
        scrollTrigger: {
            trigger: '.step4',
            start: '70% 50%',
            end: 'bottom 50%',
            ease: 'power1.out',
            pinSpacing: true,
            //toggleActions: 'play none play reverse',
            markers: false,
            onEnter: () => {
                gsap.to('.text--9', {
                    opacity: 1,
                    scale: 1,
                    height: 170,
                    y: -135,
                });
            },
            onLeave: () => {},
            onEnterBack: () => {
                gsap.to('.text--9', {
                    opacity: 1,
                    scale: 1,
                    height: 170,
                    y: -135,
                })
            },
            onLeaveBack: () => {
                gsap.to('.text--9', {
                    opacity: 0,
                    scale: 0.7,
                    height: 0,
                    y: 0,
                })
            },
        }
    });

}
else {
    const tl4_5 = gsap.timeline({
        scrollTrigger: {
            trigger: '.step4',
            start: '70% 50%',
            end: 'bottom 50%',
            ease: 'power1.out',
            pinSpacing: true,
            //toggleActions: 'play none play reverse',
            markers: false,
            onEnter: () => {
                gsap.to('.text--9', {
                    opacity: 1,
                    scale: 1,
                    height: height2,
                    y: posTop4,
                });
            },
            onLeave: () => {},
            onEnterBack: () => {
                gsap.to('.text--9', {
                    opacity: 1,
                    scale: 1,
                    height: height2,
                    y: posTop4,
                })
            },
            onLeaveBack: () => {
                gsap.to('.text--9', {
                    opacity: 0,
                    scale: 0.7,
                    height: 0,
                    y: 0,
                })
            },
        }
    });
}

const tl4_6 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step4',
        start: '70% 50%',
        end: 'bottom 50%',
        scrub: 1,
        ease: 'power1.out',
        toggleActions: 'play none reverse reverse',
        markers: false,
    }
});


tl4_6.from('.rosse-symbol', {
    rotation: -45,
    scale: 1.1
}).to('.rosse-symbol', {
    opacity: 0.2,
}, 0)

const tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step5',
        start: 'top 50%',
        end: '50% 50%',
        ease: 'power1.out',
        scrub: 1,
        toggleActions: 'play none reverse none',
        markers: false,
        onEnter: () => {
            gsap.to('.text--9', {
                height: 0,
                y: posTop6
            })
            gsap.to('.text--10', {
                opacity: 1,
                height: height,
                y: posTop1
            })
        },
        onLeave: () => {
            gsap.to('.text--10', {
                opacity: 0,
                y: posTop5
            })
            gsap.to('.rosse-symbol', {
                opacity: 1,
                duration: 0.5,
            })
        },
        onEnterBack: () => {
            gsap.to('.text--10', {
                opacity: 1,
                y: posTop1
            })
            gsap.to('.rosse-symbol', {
                opacity: 0.2,
                duration: 0.5
            })
        },
        onLeaveBack: () => {
            gsap.to('.text--9', {
                //y: posTop1
            })
            gsap.to('.text--10', {
                height: 0,
                y: 0
            })
        },
    }
});

tl5.to('.rosse-symbol', {
    rotation: 280,
    scale: 0.3
}, 0)

const tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step6',
        start: 'top-=40% 50%',
        end: '50% 50%',
        scrub: 1,
        ease: 'power1.out',
        toggleActions: 'play none reverse reverse',
        markers: false,
    }
});

tl6.to('.rosse-symbol', {
    rotation: 720,
    scale: 0
}, 0)

const tl6_1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step6',
        start: 'top-=30% 50%',
        end: 'top-=10% 50%',
        scrub: 1,
        ease: 'power1.out',
        toggleActions: 'play none reverse reverse',
        markers: false,
    }
});

tl6_1.to('.rosse-symbol', {
    opacity: 0
}, 0)

const tl6_2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step6',
        start: 'top-=20% 50%',
        end: '70% 50%',
        scrub: 1,
        ease: 'power1.out',
        pinSpacing: true,
        toggleActions: 'play none play reverse',
        markers: false,
        onEnter: () => {
            gsap.to('.cuadro-rosa', {
                backgroundColor: turquesaColor,
                duration: 1
            })
        },
        onLeaveBack: () => {
            gsap.to('.cuadro-rosa', {
                backgroundColor: fucciaColor,
                duration: 1
            })
        },
    }
});

tl6_2.to('.cuadro-rosa', {
    width: '20%',
    height: '20%',
});

const tl6_3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step6',
        start: 'top-=15% 50%',
        end: '20% 50%',
        //scrub: 1,
        ease: 'power1.out',
        //pinSpacing: true,
        toggleActions: 'play none none reverse',
        markers: false,
        onEnter: () => {
            gsap.to('.text--11', {
                opacity: 1,
                height: height,
                y: posTop1
            })

        },
        onLeave: () => {},
        onEnterBack: () => {
            gsap.to('.text--11', {
                opacity: 1,
                height: height,
                y: posTop1
            })
        },
        onLeaveBack: () => {
            gsap.to('.text--11', {
                opacity: 0,
                height: 0,
                y: posBottom1
            })
        },
    }
});

const tl6_4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step6',
        start: '20% 50%',
        end: '50% 50%',
        ease: 'power1.out',
        pinSpacing: true,
        //toggleActions: 'play reverse play reverse',
        markers: false,
        onEnter: () => {
            gsap.to('.text--11', {
                y: posTop2
            })
            gsap.to('.text--12', {
                opacity: 1,
                height: height,
                y: posTop1
            })
        },
        onLeave: () => {
            gsap.to('.text--11', {
                y: posTop3,
                opacity: 0,
                height: 0,
            })
            gsap.to('.text--12', {
                height: 0,
                y: posTop2
            })
        },
        onEnterBack: () => {
            gsap.to('.text--11', {
                opacity: 1,
                height: height,
                y: posTop2
            })
            gsap.to('.text--12', {
                height: height,
                y: posTop1
            })
        },
        onLeaveBack: () => {
            gsap.to('.text--11', {
                y: posTop1
            })
            gsap.to('.text--12', {
                opacity: 0,
                height: 0,
                y: 0
            })
        },
    }
});

const tllinesPink = gsap.timeline({
    scrollTrigger: {
        trigger: '.step6',
        start: '20% 50%',
        end: 'bottom+=100% 50%',
        scrub: 1,
        ease: 'none',
        markers: false,
        toggleActions: 'play none reverse none',
        onEnter: () => {
            gsap.to('.background--lineas--white, .background--lineas--pink', {
                opacity: 1,
            })
            gsap.to('.background--lineas--blur', {
                opacity: 1,
                delay: 0.61
            })
        },
        onLeave: () => {
            gsap.to('.background--lineas--white, .background--lineas--pink', {
                opacity: 0,
            })
            gsap.to('.background--lineas--blur', {
                opacity: 0,
            })
        },
        onLeaveBack: () => {
            gsap.to('.background--lineas--white, .background--lineas--pink, .background--lineas--blur', {
                opacity: 0,
            })
        },
        onEnterBack: () => {
            gsap.to('.background--lineas--white, .background--lineas--pink', {
                opacity: 1,
            })
            gsap.to('.background--lineas--blur', {
                opacity: 1,
                delay: 0.61
            })
        },
    }
});
tllinesPink.fromTo('.background--lineas--white', {
    backgroundPosition: '0% 0%'
}, {
    backgroundPosition: '0% -80%'
}).fromTo('.background--lineas--pink', {
    backgroundPosition: '0% 0%'
}, {
    backgroundPosition: '0% -75%'
}, 0).fromTo('.background--lineas--blur', {
    backgroundPosition: '0% 0%'
}, {
    backgroundPosition: '0% -100%'
}, 0)

const tl6_5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step6',
        start: '50% 50%',
        end: '80% 50%',
        ease: 'power1.out',
        pinSpacing: true,
        //toggleActions: 'play reverse play reverse',
        markers: false,
        onEnter: () => {
            gsap.to('.text--13', {
                opacity: 1,
                height: height,
                y: posTop1
            })
        },
        onLeave: () => {
            gsap.to('.text--13', {
                y: posTop3,
                opacity: 0,
            })
        },
        onEnterBack: () => {
            gsap.to('.text--13', {
                opacity: 1,
                height: height,
                y: posTop1
            })
        },
        onLeaveBack: () => {
            gsap.to('.text--13', {
                opacity: 0,
                height: 0,
                y: 0
            })
        },
    }
});

const tl6_6 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step6',
        start: '80% 50%',
        end: 'bottom 50%',
        scrub: 1,
        ease: 'power1.out',
        pinSpacing: true,
        toggleActions: 'play reverse play reverse',
        markers: false,
    }
});

tl6_6.to('.cuadro-rosa', {
    width: '0%',
    height: '0%',
    opacity: 0
});
if (mobile) {
    const tl6_7 = gsap.timeline({
        scrollTrigger: {
            trigger: '.step6',
            start: '80% 50%',
            end: 'bottom 50%',
            ease: 'power1.out',
            pinSpacing: true,
            //toggleActions: 'play none play reverse',
            markers: false,
            onEnter: () => {
                gsap.to('.text--14', {
                    height: height2,
                    opacity: 1,
                    y: -135,
                });
            },
            onLeave: () => {},
            onEnterBack: () => {
                gsap.to('.text--14', {
                    height: height2,
                    opacity: 1,
                    y: -135,
                })
            },
            onLeaveBack: () => {
                gsap.to('.text--14', {
                    height: 0,
                    opacity: 0,
                    y: 0
                })
            },
        }
    });
}
else {
    const tl6_7 = gsap.timeline({
        scrollTrigger: {
            trigger: '.step6',
            start: '80% 50%',
            end: 'bottom 50%',
            ease: 'power1.out',
            pinSpacing: true,
            //toggleActions: 'play none play reverse',
            markers: false,
            onEnter: () => {
                gsap.to('.text--14', {
                    height: height2,
                    opacity: 1,
                    y: posTop4,
                });
            },
            onLeave: () => {},
            onEnterBack: () => {
                gsap.to('.text--14', {
                    height: height2,
                    opacity: 1,
                    y: posTop4,
                })
            },
            onLeaveBack: () => {
                gsap.to('.text--14', {
                    height: 0,
                    opacity: 0,
                    y: 0
                })
            },
        }
    });
}

const tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step7',
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 1,
        ease: 'power1.out',
        pinSpacing: true,
        toggleActions: 'play none play reverse',
        markers: false,
        onEnter: () => {
            gsap.to('.cuadro-rosa', {
                opacity: 1,
                duration: 1,
                backgroundColor: fucciaColor
            });
        },
        onLeaveBack: () => {
            gsap.to('.cuadro-rosa', {
                opacity: 1,
                duration: 1,
                backgroundColor: turquesaColor
            });
        },
    }
});

tl7.to('.cuadro-rosa', {
    width: '100%',
    height: '100%',
});

const tl7_1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step7',
        start: 'top 50%',
        end: 'bottom 50%',
        ease: 'power1.out',
        pinSpacing: true,
        //toggleActions: 'play none play reverse',
        markers: false,
        onEnter: () => {
            gsap.to('.text--14', {
                scale: 0,
                opacity: 0,
            });
        },
        onLeaveBack: () => {
            gsap.to('.text--14', {
                scale: 1,
                opacity: 1,
            })
        },
    }
});
const tl7_2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step7',
        start: 'top 50%',
        end: '25% 50%',
        ease: 'power1.out',
        pinSpacing: true,
        //toggleActions: 'play none play reverse',
        markers: false,
        onEnter: () => {
            gsap.to('.text--15', {
                height: height,
                opacity: 1,
                y: posTop1,
            });
        },
        onLeave: () => {
            gsap.to('.text--15', {
                height: 0,
                y: posTop2
            })
        },
        onEnterBack: () => {
            gsap.to('.text--15', {
                height: height,
                opacity: 1,
                y: posTop1,
            })
        },
        onLeaveBack: () => {
            gsap.to('.text--15', {
                height: 0,
                opacity: 0,
                y: 0
            })
        },
    }
});

const tl7_2_1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step7',
        start: '10% 50%',
        end: '25% 50%',
        scrub: 1,
        ease: 'power1.out',
        pinSpacing: true,
        toggleActions: 'play none play none',
        markers: false,
    }
});

tl7_2_1.to('.container__animation', {
    backgroundColor: turquesaColor,
});

const tl7_3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step7',
        start: '25% 50%',
        end: '50% 50%',
        ease: 'power1.out',
        pinSpacing: true,
        //toggleActions: 'play none play reverse',
        markers: false,
        onEnter: () => {
            gsap.to('.text--16', {
                height: height,
                opacity: 1,
                y: posTop1,
            });
        },
        onLeave: () => {
            gsap.to('.text--16', {
                height: 0,
                y: posTop1
            })
        },
        onEnterBack: () => {
            gsap.to('.text--16', {
                height: height,
                opacity: 1,
                y: posTop1,
            });
        },
        onLeaveBack: () => {
            gsap.to('.text--16', {
                height: 0,
                opacity: 0,
                y: 0,
            });
        },
    }
});

const tl7_3_1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step7',
        start: '30% 50%',
        end: '50% 50%',
        scrub: 1,
        ease: 'power1.out',
        pinSpacing: true,
        toggleActions: 'play none play reverse',
        markers: false,
    }
});

tl7_3_1.to('.container__animation', {
    backgroundColor: lavandaColor,
});



if (mobile) {
    const tl7_4 = gsap.timeline({
        scrollTrigger: {
            trigger: '.step7',
            start: '50% 50%',
            end: '75% 50%',
            ease: 'power1.out',
            pinSpacing: true,
            //markers: false,
            onEnter: () => {
                gsap.to('.text--18', {
                    opacity: 1,
                    height: height,
                    y: -90,
                });
                gsap.to('.text--19', {
                    opacity: 1,
                    height: height,
                    y: -45,
                });
            },
            onLeave: () => {
                gsap.to('.text--18', {
                    height: 0,
                    y: -90
                })
                gsap.to('.text--19', {
                    height: 0,
                    y: -45
                })
            },
            onEnterBack: () => {
                gsap.to('.text--18', {
                    height: height,
                    opacity: 1,
                    y: -90,
                });
                gsap.to('.text--19', {
                    height: height,
                    opacity: 1,
                    y: -45,
                });
            },
            onLeaveBack: () => {
                gsap.to('.text--18', {
                    height: 0,
                    opacity: 0,
                    y: 0,
                });
                gsap.to('.text--19', {
                    height: 0,
                    opacity: 0,
                    y: posBottom1,
                });
            },
        }
    });
}
else {
    const tl7_4 = gsap.timeline({
        scrollTrigger: {
            trigger: '.step7',
            start: '50% 50%',
            end: '75% 50%',
            ease: 'power1.out',
            pinSpacing: true,
            //markers: false,
            onEnter: () => {
                gsap.to('.text--18', {
                    opacity: 1,
                    height: height,
                    y: posTop2,
                });
                gsap.to('.text--19', {
                    opacity: 1,
                    height: height,
                    y: posTop1,
                });
            },
            onLeave: () => {
                gsap.to('.text--18', {
                    height: 0,
                    y: posTop2
                })
                gsap.to('.text--19', {
                    height: 0,
                    y: posTop1
                })
            },
            onEnterBack: () => {
                gsap.to('.text--18', {
                    height: height,
                    opacity: 1,
                    y: posTop2,
                });
                gsap.to('.text--19', {
                    height: height,
                    opacity: 1,
                    y: posTop1,
                });
            },
            onLeaveBack: () => {
                gsap.to('.text--18', {
                    height: 0,
                    opacity: 0,
                    y: 0,
                });
                gsap.to('.text--19', {
                    height: 0,
                    opacity: 0,
                    y: posBottom1,
                });
            },
        }
    });
}

const tl7_5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step7',
        start: '75% 50%',
        end: 'bottom 50%',
        scrub: 1,
        ease: 'power1.out',
        pinSpacing: true,
        toggleActions: 'play play none reverse',
        //markers: false,
    }
});

tl7_5.to('.rosse-symbol-2', {
    scale: 0.7,
    rotation: 250,
    opacity: 0.2
});

const tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step8',
        start: 'top 50%',
        end: '60% 50%',
        scrub: 1,
        ease: 'power1.out',
        pinSpacing: true,
        toggleActions: 'play play none reverse',
        //markers: false,
    }
});

tl8.to('.rosse-symbol-2', {
    scale: 0.15,
    rotation: 720,
    opacity: 1
});

if (mobile) {
    const tl8_1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.step8',
            start: '80% 50%',
            end: 'bottom 50%',
            ease: 'power1.out',
            pinSpacing: true,
            //toggleActions: 'play play none reverse',
            //markers: false,
            onEnter: () => {
                gsap.to('.ayesa-logo', {
                    opacity: 1,
                    x: 0
                });
            },
            onLeave: () => {
                gsap.to('.ayesa-logo', {
                    opacity: 0,
                    y: -21
                });
            },
            onEnterBack: () => {
                gsap.to('.ayesa-logo', {
                    opacity: 1,
                    y: -21
                });
            },
            onLeaveBack: () => {
                gsap.to('.ayesa-logo', {
                    opacity: 0,
                    y: -21
                });
            },
        }
    });
}
else {
    const tl8_1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.step8',
            start: '80% 50%',
            end: 'bottom 50%',
            ease: 'power1.out',
            pinSpacing: true,
            //toggleActions: 'play play none reverse',
            //markers: false,
            onEnter: () => {
                gsap.to('.ayesa-logo', {
                    opacity: 1,
                    x: 0
                });
            },
            onLeave: () => {
                gsap.to('.ayesa-logo', {
                    opacity: 0,
                    y: posTop2
                })
            },
            onEnterBack: () => {
                gsap.to('.ayesa-logo', {
                    opacity: 1,
                    y: -45
                });
            },
            onLeaveBack: () => {
                gsap.to('.ayesa-logo', {
                    opacity: 0,
                    x: -25
                });
            },
        }
    });
}
const tl8_2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step8',
        start: '65% 50%',
        end: '80% 50%',
        scrub: 1,
        ease: 'power1.out',
        pin: true, // Pin el elemento al terminar la animación
        pinSpacing: true,
        toggleActions: 'play reverse reverse reverse',
        //markers: false,
    }
});

if (mobile) {
    tl8_2.to('.rosse-symbol-2', {
        scale: 0.15,
        x: -110,
        y: 21
    });
}
else {
    tl8_2.to('.rosse-symbol-2', {
        scale: 0.1,
        translateX: -160,
        translateY: 10
    });
}

const tl8_3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step8',
        start: '85% 50%',
        end: '87% 50%',
        scrub: 1,
        ease: 'power1.out',
        pinSpacing: true,
        toggleActions: 'play play none reverse',
        //markers: false,
    }
});

tl8_3.to('.rosse-symbol-2', {
    opacity: 0,
    //y: -21
});

const tl8_4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.step8',
        start: '70% 50%',
        end: '75% 50%',
        scrub: 1,
        ease: 'power1.out',
        pinSpacing: true,
        toggleActions: 'play reverse none reverse',
        // markers: false,
    }
});

tl8_4.to('.cuadro-rosa', {
    backgroundColor: grapeColor,
});

if (mobile) {
    const tl9 = gsap.timeline({
        scrollTrigger: {
            trigger: '.step9',
            start: 'top 50%',
            end: '30% 50%',
            ease: 'power1.out',
            pinSpacing: true,
            markers: false,
            onEnter: () => {
                gsap.to('.text--20', {
                    opacity: 1,
                    height: height2,
                    y: -135
                });
            },
            onLeave: () => {},
            onEnterBack: () => {},
            onLeaveBack: () => {
                gsap.to('.text--20', {
                    opacity: 0,
                    height: 0,
                    y: 135
                });
            },
        }
    });
}
else {
    const tl9 = gsap.timeline({
        scrollTrigger: {
            trigger: '.step9',
            start: 'top 50%',
            end: '30% 50%',
            ease: 'power1.out',
            pinSpacing: true,
            markers: false,
            onEnter: () => {
                gsap.to('.text--20', {
                    opacity: 1,
                    height: height2,
                    y: posTop4
                });
                gsap.to('.arrow-scroll', {
                    opacity: 0
                });
            },
            onLeave: () => {},
            onEnterBack: () => {},
            onLeaveBack: () => {
                gsap.to('.text--20', {
                    opacity: 0,
                    height: 0,
                    y: 180
                });
                gsap.to('.arrow-scroll', {
                    opacity: 1
                });
            },
        }
    });
}
