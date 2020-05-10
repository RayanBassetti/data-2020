import React from 'react'

function SingleObjectif({title, text, keyList, status}) {

    const handleStatus = (value) => {
        console.log(value)
    }

    return (
        <div className="single_objectif" key={keyList}>
            <div className="so_checkbox">
                <input type="checkbox" defaultValue={status} onChange={(event) => handleStatus(event.currentTarget.checked)}/>
            </div>
            <div className="so_content">
                <p className="card_content_text card_title_text">{title}</p>
                <p className="card_content_text card_normal_text">{text}</p>
            </div>
        </div>
    )
}

export default SingleObjectif