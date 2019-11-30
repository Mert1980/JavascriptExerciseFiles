
async function fetchData(){
    const res = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    let output = "";
    data.forEach(item => {
        output += `<li>${item.name}</li>`;
        document.body.innerHTML = output;
    });
}
fetchData();


