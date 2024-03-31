// const a=[1,2,3,4]
// a.push(5)
// console.log(a);
// const a= {number:10};
// a.number=12
// a=5;
// if(a){
//     console.log("hello")
// }
// let res=true + false
// console.log(res)

class Person {
    constructor(name,age) {
        //a ?  b : c
        this.name = name ? name : "JR"
        this.age = age;
    }
    isHumanBeing = true;
    firstCharofName(){
        return this.name.charAt(1)
    }
}
const person1 = new Person(undefined,0)
console.log(person1)

return 2;