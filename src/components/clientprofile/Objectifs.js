import React from 'react';
// import ProgressBar from '../common/components/ProgressBar';

class Objectifs extends React.Component {
    constructor(props) {
        super(props);
        this.props = {
            objectifs_lists: []
        }
    }

    render() {
        return (
            <>
                <p>Progress Bar</p>
                <p>List of objectives</p>
                <p>Single objectif</p>
            </>
        )
    }
}

export default Objectifs