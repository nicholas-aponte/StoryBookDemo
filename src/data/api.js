function getDocument(document) {
    const url = `http://localhost:3004/register/${document}`;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        
            const document = data;
            localStorage.setItem("Document", JSON.stringify(document))
        
        }).catch((error) => {
        console.log(error)
    })
}


export {getDocument}