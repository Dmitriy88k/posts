'use strict';
const postsContainer = document.getElementById("posts");
const loadingIndicator = document.getElementById("loading-indicator"); 

function loadPosts() {
    loadingIndicator.style.display = 'block'
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .catch((error) => {
      console.log("error", error);
    })
    .finally(() => {
        loadingIndicator.style.display = 'none';
    //   console.log("promise has resolved or rejected");
    });
}

function loadUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
}

// MacroTasks
// setTimeout(() => {
//   console.log("123123");
// }, 0);

// Promises = microtasks
Promise.all([
    loadPosts(),
    loadUsers()
]).then(([posts, users]) => {
    // const posts = response[0]
    // const users = response[1]
    // const [posts, users] = response

  //   console.log("in posts then");
  // add posts to html page
  // arr.forEach
  for (let post of posts) {
    // for of
    const postContainer = document.createElement("div");
    const title = document.createElement("h3");
    title.innerText = post.title;

    const body = document.createElement("p");
    body.innerText = post.body;

    
    // search in array
    const userData = users.find(user => user.id === post.userId);

    let user;
    if (userData) {
        user = document.createElement("p");
        user.innerText = `Author: ${userData.username}`;
    }

    postContainer.appendChild(title);
    postContainer.appendChild(body);
    user && postContainer.appendChild(user);

    postsContainer.appendChild(postContainer);
  }
});

// for(let i = 0; i < 10_000; i++) {
//     console.log(i+1)
// }

// console.log('123123123')

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello')
    }, 1000)

//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((response) => {
//       resolve({
//         myData: "hello",
//         posts: response,
//       });
//     }).catch(error => {
//         reject(error);
//     })
});

// console.log(myPromise)

myPromise.then(response => {
    // console.log(myPromise)
    // console.log('log from myPromise', response)
}).catch(error => {
    // console.log(myPromise)
})

// function MyPromise () {
//     // console.log('hello')
//     // console.log('this', this)

//     console.log('this', this)

//     if (!this) {
//         throw new Error('MyPromise constructor cannot be invoked without \'new\'')
//     }

//     this.value = 1;
//     this['age'] = 20;
// }

// MyPromise.prototype.then = function () {
//     this.value++;
// }
