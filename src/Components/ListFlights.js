import React, { Component } from 'react';


export default class listFlights extends Component {
    constructor(props) {
        super(props);
        this.service = new FlightService();
        this.state = {
            flights: '',
            selectedFlight: '',
            showDetails: false,
            newFlight: false
    }
}

getFlights = () => {
    this.setState({flights:this.service.listFlights()});
}

clearState = () => {
    this.setState({

    
    showDetails: false,
    newFlight: false,
    selectedFlight: ''
    });
}

}
