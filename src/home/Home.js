import './Home.css'
import Project from '../project/Project';
import { projects } from '../util/data';
import { useRef } from 'react';

function Home() {
    const scroll = useRef(null)

    const handleScroll = e => {
        e.preventDefault();
        if(scroll.current) {
            scroll.current.scrollLeft += e.deltaY;
        }
    }

    let allProjects = projects.map((project) => {
        return (
            <Project 
                key={project.id} 
                name={project.name} 
                image={project.image}
                url={project.url}
                summary={project.summary}
            />
        )
    })

    return (
        <section className='project-section'>
            <h2 className='featured'>Featured Projects</h2>
            <section 
                className='project-container' 
                onWheel={handleScroll}
                ref={scroll}
            >
                {allProjects}
            </section>
        </section>
    )
}

export default Home;