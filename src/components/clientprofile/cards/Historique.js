import React from 'react';

import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Title from './components/Title';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const cardSpecs = {
    width: '600px',
    paddingLeft: '30px',
    paddingRight: '30px'
}

const tabsMenu = {
    backgroundColor: 'white',
    color: '#686868'
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Historique({user}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <Card className="card_bottom" style={cardSpecs}>
            <Title text="Historique" sub_text="Sur les 6 derniers mois"/>
            <CardContent className="card_bottom_content flexed-row">
            <AppBar position="static">
                <Tabs style={tabsMenu} value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Tous" {...a11yProps(0)} />
                    <Tab label="Appels" {...a11yProps(1)} />
                    <Tab label="Emails" {...a11yProps(2)} />
                    <Tab label="Messagerie" {...a11yProps(3)} />
                    <Tab label="Alertes" {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            </CardContent>
        </Card>
    )
}
 
export default Historique