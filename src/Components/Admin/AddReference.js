import React, { Component, useState } from "react";

const AddReference = () => {

    const [reference, setReference] = useState({
       name: '',
       testimonial: '',
       position: '',
       company: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setReference(values => ({...values, [name]: value}));
    }

    return (
        <form>
            <label>
                Name:
                <input type="text" name="name" value={reference.name} onChange={handleChange} />
            </label>
            <label>
                Testimonial:
                <input type="text" name="testimonial" value={reference.testimonial} onChagne={handleChange} />
            </label>
            <label>
                Position:
                <input type="text" name="position" vaalue={reference.testimonial} onChange={handleChange} />
            </label>
            <label>
                Company:
                <input type="text" name="company" value={reference.company} onChange={handleChange} />
            </label>
        </form>
    );
}

export default AddReference;