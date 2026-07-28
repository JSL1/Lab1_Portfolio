import React, { Component , useState} from 'react';

const EditProject = () => {
    const projects, setProjects = useState([
        {
            title: 'Untitled Weather App',
            description: 'A weather app built with JavaScript, CSS animations and weatherAPI.',
            date: '',
            live: 'https://jsl1.github.io/Assignment6/weather',
            repo: 'https://github.com/JSL1/Assignment6'
        },
        {
            title: 'Burning Rush',
            description: 'A vertical shooter built with HTML and PhaserJS. An arcade classic',
            live: 'https://jstp.itch.io/burning-rush',
            repo: 'https://github.com/JSL1/Burning-Rush'
        }
    ])

    const handleChange = (e) => {

    }

    return (
        <>
        {   
            projects.map(p => {
                <div className='project-edit'>
                    <TextField id="outlined-basic" label={p.title} variant="outlined" />
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue={p.description}
                    />
                    <TextField id="outlined-basic" label="Live Demo (URL)" variant="outlined" />
                    <TextField id="outlined-basic" label="Repo (URL)" variant="outlined" />
                </div>
            })
        }
        
        </>
    );
}

export default EditProject;