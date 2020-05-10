import React, {createContext, useState, useEffect} from 'react'

export const AlertesContext = createContext()

function AlertesContextProvider({children}) {

    const [alertes, setAlertes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchAlertes()
    }, [])


    const fetchAlertes = () => {
        setLoading(true)
        fetch('http://localhost:4000/alertes?limit=5')
            .then(res => res.json())
            .then(res => {
                setAlertes(res.data)
                setLoading(false)
            })
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
            fetchAlertes: fetchAlertes
        }}>
            {children}
        </AlertesContext.Provider>
    )
}

export default AlertesContextProvider