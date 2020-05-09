function PostMethod(id, start, end) {

    fetch('http://localhost:4000/campaigns', {
            method: 'POST',
            body: JSON.stringify({
                "client_id": id,
                "starting_date": start,
                "ending_date": end
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(
            fetch(`http://localhost:4000/campaigns/${id}`)
                .then(res => res.json())
                .then(res => {return res})
        )
}

export default PostMethod