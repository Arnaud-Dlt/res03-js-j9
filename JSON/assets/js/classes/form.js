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
        fields[i].validate();
    }
    
    toJSON(){
        
    }
}

export {Form};