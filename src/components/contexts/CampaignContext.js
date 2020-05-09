import React, {createContext} from 'react'

export const CampaignContext = createContext();

class CampaignContextProvider extends React.Component {

    createObjectif = (id, title, text) => {
        fetch(`http://localhost:4000/campaigns/${id}/objectifs`, {
            method: 'POST',
            body: JSON.stringify({
                "title": title,
                "text": text
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        })
    }

    fetchsObjectifs = (id) => {
        fetch(`http://localhost:4000/campaigns/${id}/objectifs`)
            .then(res => res.json())
            .then(res => this.setState({
                objectifs: res.data
            }))
            .catch(err => console.log(err))
    }


    createCampaign = (id, start, end) => {
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

    fetchCampaign = (id) => {
        fetch(`http://localhost:4000/campaigns/${id}`)
            .then(res => res.json())
            .then(res => this.setState({
                campaignData: res.data[0]
            }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <CampaignContext.Provider value={{
                ...this.state, 
                fetchCampaign: this.fetchCampaign, 
                createCampaign: this.createCampaign,
                fetchsObjectifs: this.fetchsObjectifs,
                createObjectif: this.createObjectif
            }}>
                {this.props.children}
            </CampaignContext.Provider>

        )
    }
}

export default CampaignContextProvider