import React, { Component, useState } from "react";

const AddProject = () => {

    const [project, setProject] = useState({
        tite: '',
        date: '',
        description: '',
        image: ''
    });

    const handleChange = (e) => {
        const name= e.target.name;
        const value = e.target.value;
        setProject(values => ({...values, [name]: value}));
    }

    return (
        <form>
            <label>
                Project Title:
                <input type="text" name="title" value={project.title} onChange={handleChange} />
            </label>
            <label>
                Date Completed:
                <input type="text" name="date" value={project.date}  />
            </label>
            <label>
                Description:
                <inpt type="text" name="description" value={project.description} onChange={handleChange} />
            </label>
            <label>
                Image: 
                <input type="text" name="image" value={project.image} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit Project"></input>
        </form>
    );
}

export default AddProject;