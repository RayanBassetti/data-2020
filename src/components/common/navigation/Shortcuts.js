import React, { useState } from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function Shortcuts() {
    const [links, setLink] = useState(["Ceci est un lien"]);

    return (
        <div className="shortcuts">
          <div className="sc_content">
            <p className="title">Mes Raccourcis</p>
            <p>{links}</p>
          </div>
          <Fab aria-label="add" onClick={() => setLink("piti chaton")}>
            <AddIcon />
          </Fab>
        </div>
      );

}

export default Shortcuts