function Rectangle(a, b) {
    var rectangle = {
        length: a,
        width: b,
        perimeter:2*(a+b),
        area:(a*b)   
    }
    return rectangle;
}

const rec = new Rectangle(4, 5);
    
console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);


function getCount(objects) {
    var count = 0;
    // objects.forEach(element => {
    //     if(element.x===element.y){
    //         count++;
    //     }
    // })
    for(let elem of objects){
       if(elem.x === elem.y){
           count++;
       }
    }
    return count;
}
objects = [
{x:1, y:1},
{x:2,y:3},
{x:3, y:3},
{x:3, y:4},
{x:4, y:5}]

console.log(getCount(objects));