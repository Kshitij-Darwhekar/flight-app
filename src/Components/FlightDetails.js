import { Component } from 'react';

export default class FlightDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="table table-bordered">

                    <tr><td>Code: {this.props.flight.code}</td></tr>
                    <tr><td>Carrier: {this.props.flight.carrier}</td></tr>
                    <tr><td>Source: {this.props.flight.source}</td></tr>
                    <tr><td>Destination: {this.props.flight.destination}</td></tr>
            
                    <tr><th colSpan="4"><button onClick={() => this.onDelete()}>Delete</button></th></tr>
            
            </table>
        
        );
    }

    onDelete = (code) => {
        const f = this.props.flight;
        var ans = window.confirm("Are you sure you want to delete?");
        if(ans) {
            this.props.onDelete(f.code);
        }
        else {
            alert("Flight not deleted");
        }

    }

}