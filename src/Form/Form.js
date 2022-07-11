import React from 'react';
import "./Form.css";
import { useState } from 'react';

export default function Form() {

    const initialValue = {
        name: "",
        username: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",

    }

    const [form, setForm] = useState(initialValue)

    const formHandler = () => {
        console.log(form)
        var name = document.getElementsByName("name").value
        console.log(name)
        var username = document.getElementsByName("username").value;
        var email = document.getElementsByName("email").value;
        var password = document.getElementsByName("password").value;
        var confirmPassword = document.getElementsByName("confirmpassword").value;



        if ((name.length < 3) || (name.length > 30)) {
            document.getElementById("name").console.log("*please fill the username between 3 and 20!")

            return false;

        }

        if (!isNaN(name)) {
            document.getElementById("name").innerHTML = "**please enter character!";
            return false;
        }
        if ((username.length < 3) || (username.length > 30)) {
            document.getElementById("username").innerHTML = "**please fill the username between 3 and 20!";
            return false;
        }
        if (email.indexOf('@') <= 0) {
            document.getElementById("email").innerHTML = "**please fill the email-id in proper formate!";
            return false;
        }
        if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 4 != "."))) {
            document.getElementById("email").innerHTML = "**please fill the email-id in proper formate!";
            return false;
        }
    
    
    
        if ((password.length < 5) || (password.length > 20)) {
            document.getElementById("confirmPassword").innerHTML = "**please fill the name between 5 and 20!";
            return false;
        }
    
        let uppercase = 0, lowercase = 0, number = 0, special = 0;
    
        for (let index = 0; index < password.length; index++) {
            if (password[index] >= 'A' && password[index] <= 'Z') {
                uppercase = 1;
            }
            if (password[index] >= 'a' && password[index] <= 'z') {
                lowercase = 1;
    
            }
            if (password[index] >= '0' && password[index] <= '9') {
                number = 1;
    
            }
            if (password[index] >= '!' && password[index] <= '&' || password[index] == '@') {
                special = 1;
    
            }
        }
        if (uppercase == 0)
            document.getElementById('passwordId').innerHTML = "*password must contain atleast one uppercase"
    
        if (lowercase == 0)
            document.getElementById('passwordId').innerHTML = "*password must contain atleast one lowercase"
    
        if (number == 0)
            document.getElementById('passwordId').innerHTML = "*password must contain atleast one number"
    
        if (special == 0)
            document.getElementById('passwordId').innerHTML = "*password must contain atleast one special character"
        if (uppercase == 1 && lowercase == 1 && number == 1 && special == 1)
            console.log(password);
    
        if (password !== confirmPassword) {
            document.getElementById("confirmPasswordId").innerHTML = "**password are not matching!";
            return false;
        }
    
    }

    

    const onChangeHandler = (e) => {
        e.preventDefault()

        switch (e.target.name) {
            case "name":
                setForm({ ...form, name: e.target.value })
                break;
            case "username":
                setForm({ ...form, username: e.target.value })
                break;
            case "email":
                setForm({ ...form, email: e.target.value })
                break;
            case "phoneNumber":
                setForm({ ...form, phoneNumber: e.target.value })
                break;
            case "password":
                setForm({ ...form, password: e.target.value })
                break;
            case "confirmPassword":
                setForm({ ...form, confirmPassword: e.target.value })
                break;
            default:
                break;
        }
    }


    return (
        <div className='form-body'>
            <div className='container'>
                <div className='card-details'>
                    <div className='title'>Registration</div>
                    <form action='#'>
                        <div className='user-details'>

                            <div className='input-box'>
                                <span className='details' >Full Name</span>
                                <input type="text" name='name' value={form.name} onChange={onChangeHandler} required />
                                <span id='name'></span>

                            </div>
                            <div className='input-box'>
                                <span className='details'>Username</span>
                                <input type="text" name='username' value={form.username} onChange={onChangeHandler} required />
                                <span id='username'></span>
                            </div>
                            <div className='input-box'>
                                <span className='details'>Email</span>
                                <input type="email" name='email' value={form.email} onChange={onChangeHandler} required />
                                <span id='email'></span>
                            </div>
                            <div className='input-box'>
                                <span className='details'>Phone Number</span>
                                <input type="number" name='phoneNumber' value={form.phoneNumber} onChange={onChangeHandler} required />
                                <span id='phoneNumber'></span>
                            </div>
                            <div className='input-box'>
                                <span className='details'>Password</span>
                                <input type="password" name='password' value={form.password} onChange={onChangeHandler} required />
                                <span id='password'></span>
                            </div>
                            <div className='input-box'>
                                <span className='details'>Confirm Password</span>
                                <input type="password" name='confirmPassword' value={form.confirmPassword} onChange={onChangeHandler} required />
                                <span id='confirmPassword'></span>
                            </div>

                            <div className='button'>
                                <input type="submit" value="Register" onClick={formHandler} />

                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
