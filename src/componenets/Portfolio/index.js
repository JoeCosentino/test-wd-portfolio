import React, {useState} from 'react';
import './portfolio.css'

function Portfolio() {

    const [projects] = useState([
        {
            name: 'Cineflex',
            description: 'Full stack movie blog application',
            link: 'https://frozen-oasis-34307.herokuapp.com/'
        },
        {
            name: 'Tech Me About It',
            description: 'Full stack social netowrk application',
            link: 'https://serene-fortress-25326.herokuapp.com/'
        },
        {
            name: 'Team Profile Generator',
            description: 'a profile generator that utilizes node and SQL',
            link: 'https://drive.google.com/file/d/19azA9pA6nU-Vgxytu98BxYtUma2pA2io/view'

        }
    ]);

    return (
        <div className='portfolio'>
            {projects.map((project, i) => (
                <div className='projects'>
                    <a href={project.link}>
                        <img
                            src={require(`../../assets/images/${i}.PNG`)}
                            alt={project.description}
                        />
                    </a>    
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Portfolio