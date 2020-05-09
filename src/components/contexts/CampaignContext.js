import React, {createContext} from 'react'

export const CampaignContext = createContext();

class CampaignContextProvider extends React.Component {

    componentDidMount() {
        this.setState({
            campaign: false
        })
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
        .then(this.setState({
            campaign: true,
        }))
        .then(this.fetchCampaign(id))
    }

    fetchCampaign = (id) => {
        fetch(`http://localhost:4000/campaigns/${id}`)
            .then(res => {return res.json()})
            .then(res => this.setState({
                campaignData: res.data
            }))
    }

    render() {
        return (
            <CampaignContext.Provider value={{...this.state, fetchCampaign: this.fetchCampaign, createCampaign: this.createCampaign}}>
                {this.props.children}
            </CampaignContext.Provider>

        )
    }
}

export default CampaignContextProvider