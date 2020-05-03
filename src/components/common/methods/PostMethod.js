function PostMethod() {

    fetch('http://localhost:4000/campaigns', {
            method: 'POST',
            body: JSON.stringify({
                client_id: "azeazeaze"
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        })
        // .then(res => res.json())
        .then(res => console.log(res))
}

export default PostMethod