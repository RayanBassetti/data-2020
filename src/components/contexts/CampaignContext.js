import React, {createContext, useState} from 'react'

export const CampaignContext = createContext();

function CampaignContextProvider({children}) {

    const [campaign, setCampaign] = useState(false)

    const createCampaign = (id, start, end) => {
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
    }

    const fetchCampaign = (id) => {
        fetch(`http://localhost:4000/campaigns/${id}`)
            .then(res => res.json())
            .then(res => setCampaign(res.data))
    }

    return(
        <CampaignContext.Provider value={{
            ...campaign, createCampaign: createCampaign, fetchCampaign: fetchCampaign
        }}>
            {children}
        </CampaignContext.Provider>
    )
}

export default CampaignContextProvider