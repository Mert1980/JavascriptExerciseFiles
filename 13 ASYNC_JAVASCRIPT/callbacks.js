const posts = [
  { title: "Post One", post: "This is post one" },
  { title: "Post Two", post: "This is post two" }
];

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(posts, index) {
      output += `<li>${posts.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

getPosts();
