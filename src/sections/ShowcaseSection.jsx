import React, {useRef} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);

    useGSAP(() => {
    const projects = [project1Ref.current];

    projects.forEach((card, index) => {
        gsap.fromTo(
        card,
            {
                y: 50, opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100'
                }
            }
        )});

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
                <div className="w-full">
                    <div className="showcaselayout">
                        { /* left */}
                        <div className="first-project-wrapper" ref={project1Ref}>
                            <div className="image-wrapper">
                                <img src="/images/project1.png" alt="Algograph"/>
                            </div>

                            <div className="text-content">
                                {/* link on top*/}
                                <a href="https://www.algograph.io" target="_blank" rel="noreferrer"
                                   className="project-link">
                                    Algograph
                                    <span className="ml-2">↗</span>
                                </a>

                                <h2>Grid-based path finding algorithms visualizer</h2>
                                <p className="text-white-50 md:text-xl">
                                    A website built with React, Expo and Three.js.
                                </p>
                            </div>
                        </div>

                        {/* right */}
                    </div>
                </div>
        </section>
    )
}
export default ShowcaseSection
