function Person(_name){
    var name=_name
    this.setName = function(_name){
        return name=_name;
    }
    this.getName = function(){
        return name;
    }
}

var person = new Person("LamPham");
console.log(person.name);
console.log(person.getName());
console.log(person.setName('LPDEVS'));