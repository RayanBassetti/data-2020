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
        .then(this.setState({
            submitted: true
        }))
    }

    fetchObjectifs = (id) => {
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
        .then(this.setState({
            submitted: true
        }))
    }

    fetchCampaign = (id) => {
        fetch(`http://localhost:4000/campaigns/${id}`)
            .then(res => res.json())
            .then(res => this.setState({
                campaignData: res.data[0]
            }))
            .catch(err => console.log(err))
    }

    setSubmit = () => {
        this.setState({
            submitted: false
        })
    }

    render() {
        return (
            <CampaignContext.Provider value={{
                ...this.state, 
                setSubmit: this.setSubmit,
                fetchCampaign: this.fetchCampaign, 
                createCampaign: this.createCampaign,
                fetchObjectifs: this.fetchObjectifs,
                createObjectif: this.createObjectif
            }}>
                {this.props.children}
            </CampaignContext.Provider>

        )
    }
}

export default CampaignContextProvider