class Form {
    #fields;
    #submitted;
    
    constructor(){
        this.#fields = [];
    }
    get submitted(){
        return this.#submitted;
    }
    
    set submitted(submitted){
        this.#submitted = submitted;
    }
    
    get fields (){
        return this.#fields;
    }
    
    addField(field){
        this.#fields.push(field);
    }
    
    submit(){
        
    }
    
    validate() {
        for (let i = 0; i < fields.length; i++) {
            if (textField === "") {
                field[i].classList.toggle("nok");
            }
            else {
                field[i].classList.toggle("ok");
            }
            if (emailField === "") {
                field[i].classList.toggle("nok");
            }
            else {
                field[i].classList.toggle("ok");
            }
            if (passwordField === "") {
                field[i].classList.toggle("nok");
            }
            else {
                field[i].classList.toggle("ok");
            }
        }
    }
    
    toJSON(){
        
    }
}

export {Form};