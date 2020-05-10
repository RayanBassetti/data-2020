import React, {useMemo} from 'react'

import CardKanban from './CardKanban'

function AlerteColonne({title, titleStyle, data}) {

    const cardsLists = useMemo(
        function() {
          return <>
          {
            data.map(item => {
                return <CardKanban data={item} key={item.id} />
            })
          }
          </>
        }, [data]
      )

    return(
        <div className="single_kanban">
            <div className="sk_header flexed-row-around">
                <p className="sk_title" style={titleStyle}>{title}</p>
                <p className="sk_count">{data.length}</p>
            </div>
            <div className="sk_content">
                {cardsLists}
            </div>

        </div>
    )
}

export default AlerteColonne