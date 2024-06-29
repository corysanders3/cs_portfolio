import './About.css'

function About() {

    return (
        <main className='about-main'>
            <img 
                src='/images/cory_headshot.png'
                alt='picture of Cory'
                className='cory-pic'
            />
            <div>
                <p className='cory-text'>Cory</p>
                <p className='sanders-text'>Sanders</p>
            </div>
        </main>
    )
}

export default About;