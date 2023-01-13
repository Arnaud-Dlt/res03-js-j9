import {textField} from './classes/textField.js';
import {passwordField} from './classes/passwordField.js';
import {emailField} from './classes/emailField.js';
import {Field} from './classes/field.js';
import {Form} from './classes/form.js';

window.addEventListener("DOMContentLoaded", function() {
    let firstname=document.getElementById("firstname");
    let lastname=document.getElementById("lastname");
    let email=document.getElementById("email");
    let password=document.getElementById("password");
    let confirmPwd=document.getElementById("confirm-password");
    
    let firstnameField= new textField (firstname);
    firstnameField.name = firstname.getAttribute("name");
    
    let lastnameField= new textField (lastname);
    lastnameField.name = lastname.getAttribute("name");
    
    let emailField= new emailField (email);
    emailField.name = email.getAttribute("name");
    
    let passwordField= new passwordField (password);
    passwordField.name = password.getAttribute("name");
    
    let confirmPwdField= new passwordField (confirmPwd);
    passwordField.name = confirmPwd.getAttribute("name");
    
    console.log(firstnameField);
    console.log(lastnameField);
    console.log(emailField);
    console.log(passwordField);
    
})