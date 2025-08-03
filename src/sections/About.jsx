import React, {useRef} from 'react'
import AnimatedHeaderSection from "../components/AnimatedHeaderSection.jsx";
import AnimatedTextLines from "../components/AnimatedTextLines.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const About = () => {

    const text = `Passionate about clean architecture
     I build scalable, high-performance solutions
  from prototype to production`;
    const aboutText = `Passionate about crafting full-stack applications that blend seamless user experiences with robust backend architecture. From React frontends to Spring Boot APIs, I build with purpose and precision.

When I'm not coding:
⚡️ Contributing to open source and exploring new tech stacks
👥 Mentoring fellow developers and leading technical workshops
🚀 Building side projects that solve real problems
🎯 Staying curious about emerging technologies and best practices`;
    const imgRef = useRef(null);

    useGSAP(() => {
        gsap.to("#about", {
            scale: 0.95,
            scrollTrigger: {
                trigger: "#about",
                start: "bottom 80%",
                end: "bottom 20%",
                scrub: true,
                markers: false,
            },
            ease: "power1.inOut",
        });

        gsap.set(imgRef.current, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.to(imgRef.current, {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: imgRef.current
            },
        });
    });


    return (
        <section id="about" className='min-h-screen bg-black rounded-b-4xl'>
<AnimatedHeaderSection subTitle={"Code with purpose, Built to scale"} title={"About"} text={text} textColor={"text-white"} withScrollTrigger={true} />
            <div className='flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60'>
                <img ref={imgRef} src="../../public/images/man.jpeg" alt="man" className='w-md rounded-3xl' />
                <AnimatedTextLines text={aboutText} className={"w-full"} />
            </div>
        </section>
    )
}
export default About
