// method to get the menu to follow the router history

import {useLocation} from 'react-router-dom';

const PathMethod = () => {
        const location = useLocation()
        switch(location.pathname) {
            case "/":
                return 0
            case "/users": 
                return 1
            case "/alertes":
                return 2
            case "/messagerie":
                return 3
            case "/planning":
                return 4
            default :
                return 0
        }
}

export default PathMethod