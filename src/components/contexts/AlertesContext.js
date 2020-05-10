import React, {createContext, useState, useEffect} from 'react'

export const AlertesContext = createContext()

function AlertesContextProvider({children}) {

    const [alertes, setAlertes] = useState([])
    const [loading, setLoading] = useState(true)
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        fetchAlertes()
        setUpdated(false)
    }, [updated])


    const fetchAlertes = () => {
        setLoading(true)
        fetch('http://localhost:4000/alertes')
            .then(res => res.json())
            .then(res => {
                setAlertes(res.data)
                setLoading(false)
            })
    }

    const updateAlerte = (id, status) => {
        fetch(`http://localhost:4000/alertes/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                "status": status,
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(setUpdated(false))
    }
    
    const handleStatus = (id) => {
        alertes.forEach(item => {
            if(item.id === id) {
                item.status = item.status + 1
                console.log(item)
            }
        })
        return alertes
    }

    return (
        <AlertesContext.Provider value={{
            loading: loading,
            alertes: alertes,
            handleStatus: handleStatus,
            fetchAlertes: fetchAlertes,
            updateAlerte: updateAlerte
        }}>
            {children}
        </AlertesContext.Provider>
    )
}

export default AlertesContextProvider