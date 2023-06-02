import  { Component } from 'react';

export default class AddFlight extends Component{

    constructor(props) {
        super(props);
        this.state = {
            code:0,
            carrier:'',
            source:'',
            destination:''
        }
    }


    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    // onClick = () => {
    //     this.props.addFlight(this.state);
    // }

    


    render() {
        return (
            <form>
                <label>Code</label>
                <input type="text"  value={this.state.code} onChange={this.handleInput} /> <br/>
                <label>Carrier</label>
                <input type="text"  value={this.state.carrier} onChange={this.handleInput} /> <br/>
                <label>Source</label>
                <input type="text"  value={this.state.source} onChange={this.handleInput} /> <br/>
                <label>Destination</label>
                <input type="text"  value={this.state.destination} onChange={this.handleInput} /> <br/>
                <button type="button" onClick={() => this.props.addFlight(this.state)}>Save</button>
            </form>
        );
    }

}
