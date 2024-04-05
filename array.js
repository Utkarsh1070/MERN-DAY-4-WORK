const msg=()=>console.log("arrow function");

let data=[10, 20, 30, 40, 50, 60,"KIET",msg];
console.log(data);
 data[7]();

//  for(let i=0; i<data.length; i++)
//  {
//     console.log(`Value of ${i} is ${data[i]}`);
//  }


// for(let index in data){
//     console.log(`value of ${index} is ${data[index]}`)
// }


// for (let value of data){
//     console.log(`value of array ${value}`);
// }

// data.foreach(vlaue=>console.log(`value of array =${value}`));