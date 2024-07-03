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
            </div>
            <div className='about-text'>
                <p className='cory-text'>Cory</p>
                <p className='sanders-text'>Sanders</p>
                
            </div>
        </main>
    )
}

export default About;