const postsContainer = document.getElementById('posts');
const usersContainer = document.getElementById('users');
const searchBtn = document.getElementById('searchBtn');
const idInput = document.getElementById('idInput');



searchBtn.addEventListener('click', function() {
  fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then(response => response.json())

  // if (idInput === ${post.userId}) {

  // }

  setTimeout(() => {
    postsContainer.innerHTML = "";
  }, 1000)
})



function loadPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(response => 
  response.json())
}

function loadUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
}

Promise.all([
  loadPosts(),
  loadUsers()
]).then(([posts, users]) => {


  

  for (let post of posts) { 
    users.forEach(user => {

      //Создаём две Div-ки 
      const postContainer = document.createElement('div');
      const userContainer = document.createElement('div');


      //Контекст внутри первой div-ки
      const title = document.createElement('h3');
      title.innerText = post.title;

      const body = document.createElement('p');
      body.innerText = post.body;

      const userId = document.createElement('p');
      // userId.innerText = `Author id: #${post.userId}`;


      //Контекст внутри второй div-ки. 
      const userName = document.createElement('p');
      userName.innerText = `Name: ${user.name}`;

      const userEmail = document.createElement('p');
      userEmail.innerText = `Email: ${user.email}`;

      const userCity = document.createElement('p');
      userCity.innerText = `City: ${user.address.city}.`;
      
  

      //пОстаем в определенной последовательности контекст из двух div-ок
      postContainer.appendChild(title);
      postContainer.appendChild(body);
      postContainer.appendChild(userId);
      postContainer.appendChild(userName);
      postContainer.appendChild(userEmail);
      postContainer.appendChild(userCity);

      //????Почему мы можем только использовать postContainer.appendChild(userName),(userEmail),etc.
      //????Почему не можем использовать userContainer? не отображает на странице данные если написать код вот так
      // userContainer.appendChild(userName);
      // userContainer.appendChild(userEmail);
      // userContainer.appendChild(userCity); 

      
      //вбиваем всё в div-ки с ID из HTML file. 
      postsContainer.appendChild(postContainer);
      usersContainer.appendChild(userContainer);

    })
  }
})



