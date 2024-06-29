import './Project.css'

function Project({ name, image, url }) {
    
    return (
        <div className='each-project' onClick={() => window.open(url, '_blank')}>
            <h3 className='project-name'>{name}</h3>
            <img 
                src={image} 
                alt={`Image of ${name} project`} 
                className='project-image'
            />
        </div>
    )
}

export default Project;