const posts = [
  { title: "Post One", post: "This is post one" },
  { title: "Post Two", post: "This is post two" }
];

// *** Promise / resolve / Reject / .then / .catch ***

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((posts, index) => {
      output += `<li>${posts.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = true;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}
createPost({ title: "Post three", post: "This is post three" })
  .then(getPosts)
  .catch(err => console.log(err));

// *** Async / Await ***

async function init() {
  await createPost({ title: "Post three", post: "This is post three" });
  getPosts();
}
init();

// *** Async / Await / Fetch ***

//     async function fetchUsers (){
//         const res = await fetch ('https://jsonplaceholder.typicode.com/users');
        
//         const data = await res.json();

//         console.log(data);

//     }
// fetchUsers();

// *** Promise.all ***

// const promise1 = Promise.resolve('Hello World!');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>{
//     setTimeout(resolve, 3000, 'Goodbye!');
// });
// const promise4 = fetch
// ('https://jsonplaceholder.typicode.com/users').then(res => res.json())

// Promise.all([promise1, promise2, promise3, promise4]).then(value => console.log(value));
