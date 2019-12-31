const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('some went wrong.')
        // resolve('This is my resolved data')
        // resolve('This is my other resolved data')
    },5000)

})
console.log('before')
promise.then((data) => {
    console.log('1',data)
}).catch((error) => {
    console.log('error: ', error)
})

// promise.then((data) => {
//     console.log('2',data)
// })
console.log('after')