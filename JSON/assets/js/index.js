import {TextField} from './classes/textField.js';
import {PasswordField} from './classes/passwordField.js';
import {EmailField} from './classes/emailField.js';
import {Form} from './classes/form.js';

window.addEventListener("DOMContentLoaded", function() {
    let inputs=document.querySelectorAll("input")
    
    let firstname=document.getElementById("firstname");
    let lastname=document.getElementById("lastname");
    let email=document.getElementById("email");
    let password=document.getElementById("password");
    let confirmPwd=document.getElementById("confirm-password");
    
    let firstnameField = new TextField (firstname);
    let lastnameField = new TextField (lastname);
    let emailField = new EmailField (email);
    let passwordField = new PasswordField (password);
    let confirmPwdField = new PasswordField (confirmPwd);
    
    firstnameField.name = firstname.getAttribute("name");
    lastnameField.name = lastname.getAttribute("name");
    emailField.name = email.getAttribute("name");
    passwordField.name = password.getAttribute("name");
    confirmPwdField.name = confirmPwd.getAttribute("name");
    
    console.log(firstnameField);
    console.log(lastnameField);
    console.log(emailField);
    console.log(passwordField);
    console.log(confirmPwdField); 
    
    let form = new Form();
    form.addField(firstname);
    form.addField(lastname);
    form.addField(email);
    form.addField(password);
    form.addField(confirmPwd);
    
    console.log(form);
    
    let userInfo=document.getElementById("user-information");
    
    userInfo.addEventListener("submit", function()
    {
        userInfo.preventDefault();
        form.submit();
    });
    
    /*Vous allez ajouter un EventListener sur l'évenement change de chacun des input. Il devra appeler la méthode validate() 
    du Form.La méthode validate du Form va appeler toutes les méthodes validate() des fields.*/
    
    inputs.addEventListener("change", function()
    {
        
    });
    
    /*Si tous les champs sont valides, le bouton ne doit plus avoir la classe CSS disabled et son attribut HTML disabled doit
    être false.*/
    
    
    
})