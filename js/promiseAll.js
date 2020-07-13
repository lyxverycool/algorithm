const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
const promise2 = new Promise((resolve,reject)=>{
  reject(3)
})
const promise3 = 42;


Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
},err=>{console.log(err)});
// expected output: Array [3, 42, "foo"]