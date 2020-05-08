import React from 'react';
// import ProgressBar from '../common/components/ProgressBar';
import SingleObjectif from './cards/components/SingleObjectif'

function ObjectifsList({objectifs}) {
    // const data = [
    //     {
    //         title: "Faire ses courses",
    //         text: "Lorem Ipsum texte long "
    //     },
    //     {
    //         title: "Faire ses courses",
    //         text: "Lorem Ipsum texte long "
    //     },
    //     {
    //         title: "Faire ses courses",
    //         text: "Lorem Ipsum texte long "
    //     },
    // ]

    function handleData() {
        let arrayLists = []
        objectifs.forEach(single => {
            const singleObjectif = <SingleObjectif title={single.title} text={single.text} />
            arrayLists.push(singleObjectif)
        })
        return arrayLists
    }

    const items = handleData()

    return(
        <div className="objectifs_list">
            {items}
        </div>
    )
}

export default ObjectifsList