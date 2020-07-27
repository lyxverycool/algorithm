const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(222)
  }, 1000)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(222)
  }, 2000)
})

function promise_all(arr) {

}


promise_all([promise1, promise2])