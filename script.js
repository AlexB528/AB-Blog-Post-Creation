/*--Functions--*/
async function submitForm(e, form) {
    // 1. Prevent reloading page
    e.preventDefault();
    // 2. Submit the form
    // 2.1 User Interaction
    const btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.disabled = true;
    setTimeout(() => btnSubmit.disabled = false, 2000);
    // 2.2 Build JSON body
    const jsonFormData = buildJsonFormData(form);
    // // 2.3 Build Headers
    // const headers = buildHeaders();
    // 2.4 Request & Response
    fetch("https://ab-blog-api-backend-production.up.railway.app/catalog/post", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: jsonFormData,
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })

    // Converting to JSON
    .then(response => response.json())
 
    // Displaying results to console
    .then(json => console.log(json));
}

// function buildHeaders(authorization = null) {
//     const headers = {
//         "Content-Type": "application/json",
//         "Authorization": (authorization) ? authorization : "Bearer TOKEN_MISSING"
//     };
//     return headers;
// }

function buildJsonFormData(form) {
    const jsonFormData = { };
    for(const pair of new FormData(form)) {
        jsonFormData[pair[0]] = pair[1];
    }
    return jsonFormData;
}
/*--/Functions--*/

/*--Event Listeners--*/
const userForm = document.querySelector("#userForm");
if(userForm) {
    userForm.addEventListener("submit", function(e) {
        submitForm(e, this);
    });
}
/*--/Event Listeners--*/