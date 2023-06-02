import { Component } from 'react';

export default class FlightDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Flight Details</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Carrier</th>
                            <th>Source</th>
                            <th>Destination</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.flights.map(f => (
                                <tr key={f.code}>
                                    <td>{f.code}</td>
                                    <td>{f.carrier}</td>
                                    <td>{f.source}</td>
                                    <td>{f.destination}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}