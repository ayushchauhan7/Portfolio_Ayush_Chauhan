import React from 'react'
import AnimatedHeaderSection from "../components/AnimatedHeaderSection.jsx";

const About = () => {

    const text = `Passionate about clean architecture
     I build scalable, high-performance solutions
  from prototype to production`;

    return (
        <section id="about" className='min-h-screen bg-black rounded-b-4xl'>
<AnimatedHeaderSection subTitle={"Code with purpose, Built to scale"} title={"About"} text={text} textColor={"text-white"} withScrollTrigger={true} />
            <div className='flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60'>
                <img src="" alt=""/>
            </div>
        </section>
    )
}
export default About
