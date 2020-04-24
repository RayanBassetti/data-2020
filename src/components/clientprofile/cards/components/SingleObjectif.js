import React from 'react'

function SingleObjectif({title, text}) {
    return (
        <div className="single_objectif">
            <div className="so_checkbox">
                <input type="checkbox" onChange={console.log("changed")}/>
            </div>
            <div className="so_content">
                <p className="card_content_text card_title_text">{title}</p>
                <p className="card_content_text card_normal_text">{text}</p>
            </div>
        </div>
    )
}

export default SingleObjectif