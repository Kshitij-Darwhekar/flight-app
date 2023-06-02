import React, { Component } from 'react';
import FlightDetails from './FlightDetails';
import FlightService from '../Services/FlightService';
import AddFlight from './AddFlight';


export default class ListFlights extends Component {
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
componentDidMount() {
    this.getFlights();
}

clearState = () => {
    this.setState({
    showDetails: false,
    newFlight: false,
    selectedFlight: ''
    });
}

render() {
    if(!this.state.flights)
        return null;
    const list = this.state.flights.map((f) =>
        <li key={f.code} onClick={() => this.onSelection(f.code)}className = "list-group-item">{f.code}</li>
    );

return (
    <div>
        <h2>List of Flights</h2>
        <ul className="list-group">
            {list}
        </ul>
        <br/>
        <button className = "btn btn-info" onClick={() => this.onNewFlight()}>Add New Flight</button>
        <hr/>
        {
            
            this.state.showDetails && this.state.selectedFlight &&
            <FlightDetails flight={this.state.selectedFlight} onDelete = {this.onDeleteFlight}/>
        }
        {
            this.state.newFlight && <AddFlight AddFlight={this.AddFlight}/>
        }
    
    
    
    </div>
);
}
    onSelection = (code) => {
        const f = this.service.findFlightByCode(code);
        this.setState(
            {
                showDetails:true,
                selectedFlight:f,
                newFlight:false
            }
        );
    }

    onNewFlight = () => {
        this.clearState();
        this.setState(
            {
                newFlight:true
            }
        );
    }

    onSavedFlight = (flight) => {
        this.service.addFlight(flight);
        this.props.addFlight(flight);
        this.listFlights();
    }

    onDeleteFlight = (code) => {
        this.service.deleteFlight(code);
        this.listFlights();
    }


}
