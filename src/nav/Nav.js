import './Nav.css'

function Nav() {

    return (
        <nav className='nav-container'>
            <div>
                <h1>Cory Sanders</h1>
            </div>
            <div className='nav-buttons'>
                <a href='https://www.linkedin.com/in/corysanders3/' className='nav-button'>LinkedIn</a>
                <a href='https://github.com/corysanders3' className='nav-button'>GitHub</a>
                <a href='https://drive.google.com/file/d/1ivzryjZakDKHhFEistfuRA9_yRyrA89-/view?usp=sharing' className='nav-button'>Resume</a>
            </div>
        </nav>
    )
}

export default Nav;