const posts = [
  { title: "Post One", post: "This is post one" },
  { title: "Post Two", post: "This is post two" }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((posts, index) => {
      output += `<li>${posts.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
getPosts();
