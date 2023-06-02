

export default class FlightService {
    constructor() {
        this.flights = [
            {code:432,carrier:'Air India',source:'Mumbai',destination:'Delhi'},
            {code:433,carrier:'Indigo',source:'Mumbai',destination:'Pune'}
        ]
    }

    AddFlight(flight) {
        this.flights.push(flight);
    }

    listFlights() {
        return this.flights;
    }

    findFlightByCode(code) {
        return this.flights.find(f => f.code === code);
    }

    deleteFlightByCode(code) {
        var idx = this.flights.indexOf(this.findFlightByCode(code));
        this.flights.splice(idx,1);
    }

}