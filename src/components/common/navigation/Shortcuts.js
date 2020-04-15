import React, { useState } from 'react'

function Shortcuts() {
    const [links, setLink] = useState(["Ceci est un lien"]);

    return (
        <div className="shortcuts">
          <p>Mes raccourcis</p>
          <p>{links}</p>
          <input value="" type="text" />
          <button onClick={() => setLink("aze")}>
            Cliquez ici
          </button>
        </div>
      );

}

export default Shortcuts