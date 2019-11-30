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
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}
createPost({ title: "Post three", post: "This is post three" }, getPosts);
