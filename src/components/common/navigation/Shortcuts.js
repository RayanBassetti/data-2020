import React, { useState } from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withRouter } from 'react-router';

function Shortcuts(props) {
    const [links, setLink] = useState([]);

    const handleNewLink = (path, name) => {
      if(name) {
        setLink(links => [...links, {
          path: path,
          name: name
        }]) 
      } else {
        setLink(links => [...links, path]) 
      }
    }

    return (
        <div className="shortcuts">
          <div className="sc_content">
            <p className="title">Mes Raccourcis</p>
            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '3%'}}>
              {links.map(item => {
                  if(item.name) {
                    return <a href={item.path}>{item.name}</a>
                  } else {
                    return (
                      <a href={item}>{item}</a>
                    )
                  }
              })}
            </div>
          </div>
          <Fab aria-label="add" onClick={() => handleNewLink(props.history.location.pathname, props.history.location.state.name)}>
            <AddIcon />
          </Fab>
        </div>
      );

}
export default withRouter(Shortcuts)