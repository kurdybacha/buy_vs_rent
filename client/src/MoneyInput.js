import React, { Component } from 'react';
import TextField from 'material-ui/TextField'

class MoneyInput extends Component
{
    onChange = (event) => {
        if (this.props.onChange) {
            this.props.onChange(event);
        };
    }

    render() {
        return <TextField
                type="number"
                onChange={this.onChange}
                hintText={this.props.hint}
                floatingLabelText={this.props.label}
                floatingLabelFixed={true}
               />
    }

}

export default MoneyInput;
