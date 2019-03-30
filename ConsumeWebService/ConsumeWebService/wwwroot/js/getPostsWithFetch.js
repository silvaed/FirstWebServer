
async function getpostswithfetch() {
    const app = document.getElementById('root');

    const postID = document.getElementById("inputpostid").value;

    const container = document.createElement('main');
    container.setAttribute('class', 'container');

    app.appendChild(container);

    fetch("https://jsonplaceholder.typicode1.com/Posts") //defaults to a get
        .then((response) => response.json()) // convert response to json
        .then((j) => (container.innerHTML = JSON.stringify(j))) // put json into the container - 
        .catch((err) => (container.innerHTML = "Error, can't load " + fname + " " + err))
}