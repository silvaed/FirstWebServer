// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


const app = document.getElementById('root');

const container = document.createElement('main');
container.setAttribute('class', 'container');


app.appendChild(container);
//document.getElementById('getsample').addEventListener('click', getAPI);



// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://jsonplaceholder.typicode.com/Posts', true)


request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach(post => {
            const postcontainer = document.createElement('div');


            const h3 = document.createElement('h3');
            h3.textContent = post.title;

            const p = document.createElement('p');

            p.textContent = `${post.body}...`;

            container.appendChild(postcontainer);
            postcontainer.appendChild(h3);
            postcontainer.appendChild(p);
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
}


// Send request
request.send()
