function PostMethod(id) {

    fetch('http://localhost:4000/campaigns', {
            method: 'POST',
            body: JSON.stringify({
                client_id: id
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .then(
            fetch(`http://localhost:4000/campaigns/${id}`)
                .then(res => res.json())
                .then(res => console.log(res))
                .catch(err => console.log(err))
        )
}

export default PostMethod