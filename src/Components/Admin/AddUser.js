import React, { Component, useState} from "react";

const AddUser = () => {
    
    const [user, setUser] = useState([
        firstname :'',
        lastname: '',
        email: '',
        password: ''
    ])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(values => ({...values, [name]: value}));
    }

    return (
        <form>
            <label>
                First Name:
                <input type="text" name="firstname" value={user.firstname} onChange={handleChange} />
            </label>
        </form>
    );
}

export default AddUser;