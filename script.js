const userForm = document.querySelector("#userForm");

userForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let JSONformData = {};

    for (let element of this.elements) {
        if (element.type !== 'submit') {
            JSONformData[element.name] = element.value;
        }
    }

    fetch('https://ab-blog-api-backend-production.up.railway.app/catalog/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(JSONformData)
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error:', error));
});
