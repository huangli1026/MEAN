Array.prototype.myFilter=function(Fn){
    let newArr=[];
    for(let i=0; i<this.length; i++){
        if(Fn(this[i])){
            newArr.push(this[i]);
        }
    }
    return newArr
}

let arr=[1,2,3,4,5];
console.log(arr.myFilter((x)=>x%2===0)) //output [2,4]

Array.prototype.myReduce=function(Fn, init){
    let result=init?init:0;
    for(let i=0; i<this.length; i++){
        result=Fn(result, this[i], i)
    }
    return result;
}

console.log(arr.myReduce((x ,y)=>x+y)) 
console.log(arr.myReduce(((x,y)=>x+y), 10))