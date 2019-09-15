//What is the output?

var hero = {
    _name : "John Doe",
    getSecretIndentity: function(){
        return this._name;
    }
}

var stealSecretIndentity = hero.getSecretIndentity;

console.log(stealSecretIndentity);
console.log(hero.getSecretIndentity());

//What is the output?

var num = 4;
function outer(){
    var num = 5;
    function inner(){
        num++;
        var num = 3;
        console.log("Num",num);
    }
    inner();
}
outer();

//What is the output?

console.log("Type of: ", typeof typeof 1);