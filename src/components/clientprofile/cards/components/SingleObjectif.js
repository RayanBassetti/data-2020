import React from 'react'

function SingleObjectif({title, text, keyList}) {
    return (
        <div className="single_objectif" key={keyList}>
            <div className="so_checkbox">
                <input type="checkbox" onChange={() => console.log("changed")}/>
            </div>
            <div className="so_content">
                <p className="card_content_text card_title_text">{title}</p>
                <p className="card_content_text card_normal_text">{text}</p>
            </div>
        </div>
    )
}

export default SingleObjectif