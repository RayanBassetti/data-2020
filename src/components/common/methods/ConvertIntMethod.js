export const handleProfil = (int) => {
    switch(int) {
        case(1) : 
            return "Écon."
        case(2) : 
            return "Auto."
        case(3) : 
            return "Éco."
        default : 
            return "None"
    }
}

export const handleFamily = (int) => {
    switch(int) {
        case(1) : 
            return "IFaP"
        case(2) : 
            return "IFoP"
        case(3) : 
            return "IFaN"
        case(4) : 
            return "IFoN"
        case(5) : 
            return "PFaP"
        case(6) : 
            return "PFoP"
        case(7) : 
            return "PFaN"
        case(8) : 
            return "PFoN"
        default : 
            return "None"
    }
}

export const handleFeeling = (int) => {
    switch(int) {
        case(1) : 
            return "#FF6060"
        case(2) : 
            return "#FFA34F"
        case(3) : 
            return "#FFDD2D"
        case(4) : 
            return "#83B4FF"
        case(5) : 
            return "#8DE5B0"
        default : 
            return "None"
    }
}