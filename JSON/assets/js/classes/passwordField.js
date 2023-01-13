import {Field} from './field.js';

class PasswordField extends Field {
    
    constructor (element){
        super(element);
    }
    
    validate (){
        if (this.element.value === "") {
            this.element.classList.add("nok");
            this.errors.push("Le champ ${this.#name} ne peut pas être vide");
        }
        
        else if (this.element.value < 5){
            this.element.classList.add("ok");
            this.errors.push("Le champ ${this.#name} est trop court (5 caractères minimum)")
        }
        
        console.log(this.element);
    }
}
export {PasswordField}