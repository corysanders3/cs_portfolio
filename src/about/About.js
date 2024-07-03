import './About.css'

function About() {

    return (
        <main className='about-main'>
            <div className='pic-container'>
                <img 
                    src='/images/cory_headshot.png'
                    alt='picture of Cory'
                    className='cory-pic'
                />
                <div className='tech-stack'>
                    <p className='tech-header'>Tech Stack</p>
                    <div>
                        <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge" alt="react badge"/>
                        <img src="https://img.shields.io/badge/JavaScript-E8D44D?style=for-the-badge&logo=javascript&logoColor=fff" alt="javascript badge"/>
                        <img src="https://shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=fff" alt="typescript badge"/>
                        <img src="https://img.shields.io/badge/threejs-000?style=for-the-badge&logo=three.js&logoColor=fff" alt="three js badge"/>
                        <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=for-the-badge" alt="html badge"/>
                        <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=for-the-badge" alt="css badge"/>
                        <img src="https://img.shields.io/badge/SCSS-C56494?style=for-the-badge&logo=sass&logoColor=fff" alt="scss badge"/>
                        <img src="https://img.shields.io/badge/Cypress-69D3A7?logo=cypress&logoColor=fff&style=for-the-badge" alt="cypress badge"/>
                        <img src="https://img.shields.io/badge/Mocha-886446?style=for-the-badge&logo=mocha&logoColor=fff" alt="mocha badge"/>
                        <img src="https://img.shields.io/badge/Chai-980B05?style=for-the-badge&logo=chai&logoColor=fff" alt="chai badge"/>
                    </div>
                </div>
                <div>
                    <p className='tech-header'>Highlights</p>
                    <ul className='ul'>
                        <li>Accredited Software Engineering Certificate from Turing School of Software and Design</li>
                        <li>Awarded Second Place in Turing Demo Comp for Spilled Project (see project below)</li>
                    </ul>
                </div>
            </div>
            <div className='about-container'>
                <p className='name-text'>Cory Sanders</p>
                <p className='title-text'>Software Engineer</p>
                <p className='about-text'>
                    In my previous experience working with SAAS companies as an Implementation Specialist, I gained a great deal of understanding in the user experience, and how users interact with software. I saw where I could make a difference, and I wanted to have a deeper impact. This led me to software development!
                    <br></br>
                    <br></br>
                    Given my background, I am ahead of the pack when it comes to facilitating and supporting the customer through the development of the programs they use everyday. I’m inspired to keep growing my knowledge and build impactful applications.
                    <br></br>
                    <br></br>
                    Connect with me through <a href='https://www.linkedin.com/in/corysanders3/' target='_blank'>LinkedIn</a> or at coryleesanders3@gmail.com.
                </p>
            </div>
        </main>
    )
}

export default About;