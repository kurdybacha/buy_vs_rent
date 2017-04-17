import React, { Component } from 'react';
import MoneyInput from './MoneyInput.js';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import './App.css';

class InputFormSimple extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            property_price: '',
            downpayment: '',
            rent: '',
            amortization: '',
            new_home: ''
        };
    }

    handleChange = (e, name) => {
        this.setState({
            [name]: e.target.value.toUpperCase()});
    }

    handleSubmit = () => {

    }

    render() {
        return (
            <div>
                <div className="App">
                    <MoneyInput label="Property Price" hint="320000"
                        onChange={(e) => this.handleChange(e, 'property_price')} /><br/>
                    <MoneyInput label="Downpayment" hint="54000"
                        onChange={(e) => this.handleChange(e, 'downpayment')} /><br/>
                    <MoneyInput label="Your current rent" hint="1650"
                        onChange={(e) => this.handleChange(e, 'rent')} /><br/>
                    <MoneyInput label="Principal amortization in years" hint="30"
                        onChange={(e) => this.handleChange(e, 'amortization')} /><br/>
                    <Toggle label="New development" labelPosition="right" name="new_home"
                        onToggle={(e) => this.handleChange(e, 'new_home')} style={{width: '256px', margin: 'auto'}} /><br/>
                    <RaisedButton label="Go" primary={true}
                        onClick={this.handleSubmit} />
                </div>
                <div hidden='true'>
                    <label>Property price: {this.state.property_price}</label><br/>
                    <label>Downpayment: {this.state.downpayment}</label><br/>
                    <label>Rent: {this.state.rent}</label><br/>
                    <label>Amortization: {this.state.amortization}</label><br/>
                    <label>New home: {this.state.new_home}</label><br/>
                </div>
            </div>
        );
    }
}

export default InputFormSimple;
