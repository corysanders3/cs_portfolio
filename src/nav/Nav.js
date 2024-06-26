import './Nav.css'

function Nav() {

    return (
        <nav className='nav-container'>
            <div>
                <h1 className='nav-header'>Cory Sanders</h1>
            </div>
            <div className='nav-buttons'>
                <a href='https://www.linkedin.com/in/corysanders3/' target='_blank' className='nav-button'>LinkedIn</a>
                <a href='https://github.com/corysanders3' target='_blank' className='nav-button'>GitHub</a>
                <a href='https://drive.google.com/file/d/19FMnxY-ADBdl-q_NKgkd8d8HBI7R_NTg/view?usp=sharing' target='_blank' className='nav-button'>Resume</a>
            </div>
        </nav>
    )
}

export default Nav;