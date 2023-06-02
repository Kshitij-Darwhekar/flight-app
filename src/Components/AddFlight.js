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

    onSave() {
        // this.props.onSubmit(this.state);
        this.props.addFlight(this.state);
    }


    render() {
        return (
            <form>
                <label>Code</label>
                <input type="number"   onChange={this.handleInput} /> <br/>
                <label>Carrier</label>
                <input type="text"   onChange={this.handleInput} /> <br/>
                <label>Source</label>
                <input type="text"   onChange={this.handleInput} /> <br/>
                <label>Destination</label>
                <input type="text"   onChange={this.handleInput} /> <br/>
                <button type="button" onClick={() => this.onSave}>Save</button>
            </form>
        );
    }

}
