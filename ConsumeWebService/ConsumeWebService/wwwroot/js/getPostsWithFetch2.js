
async function getpostswithfetch2() {
    const app = document.getElementById('root');

    const postID = document.getElementById("inputpostid").value;

    const container = document.createElement('main');
    container.setAttribute('class', 'container');

    app.appendChild(container);

        try {
            var response = await fetch("https://jsonplaceholder.typicode1.com/Posts");
            var j =  await response.json()
            container.innerHTML = JSON.stringify(j)
        }
        catch (err) {
            container.innerHTML = "Error, can't load " + fname + " " + err ;
        }

}