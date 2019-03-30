


function getPosts() {
    const app = document.getElementById('root');

    const postID = document.getElementById("inputpostid").value;

    const container = document.createElement('main');
    container.setAttribute('class', 'container');

    app.appendChild(container);
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

    if (postID == "") {
        //this retrives all the posts.
        // Open a new connection, using the GET request on the URL endpoint
        request.open('GET', 'https://jsonplaceholder.typicode.com/Posts', true);

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
                const errorMessage = document.createElement('h2');
                errorMessage.textContent = `Error with web service!`;
                app.appendChild(errorMessage);
            }
        }
    }
    else {
        //this retrieves a numbered post
        request.open('GET', 'https://jsonplaceholder.typicode.com/Posts/' + postID, true);

        request.onload = function () {
            // Begin accessing JSON data here
            var post = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {

                const postcontainer = document.createElement('div');


                const h3 = document.createElement('h3');
                h3.textContent = post.title;

                const p = document.createElement('p');

                p.textContent = `${post.body}...`;

                container.appendChild(postcontainer);
                postcontainer.appendChild(h3);
                postcontainer.appendChild(p);
            }
            else {
                const errorMessage = document.createElement('h2');
                errorMessage.textContent = `Error with web service!`;
                app.appendChild(errorMessage);
            }
        }
    }
    // Send request
    request.send()

}