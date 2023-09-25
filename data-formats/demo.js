let person = {
    first_name : "Bob",
    last_name : "Smith",
    age : 42,
    cities_lived_in : ["Fairfax", "Manassas"],
    address : {
        street: "123 Main Street",
        city: "Any Town, USA",
        state: "VA"
    },
    full_name : function() {
        return this.first_name + " " + this.last_name;
    }
}

let person2 = {
    first_name : "Sam",
    last_name : "Miller",
    age : 42,
    cities_lived_in : ["Fairfax", "Manassas"],
    address : {
        street: "123 Main Street",
        city: "Any Town, USA",
        state: "VA"
    },
    full_name : function() {
        return this.first_name + " " + this.last_name;
    } 
}

console.log(person.full_name());
console.log(person2.full_name());





