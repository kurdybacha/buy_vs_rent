import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';

class ToggleInput extends Component
{
    onChange = (event) => {
        if (this.props.onChange) {
            this.props.onChange(event);
        };
    }

    render() {
        return (<Toggle
                    onChange={this.onChange}
                    label={this.props.label}
                    labelPosition="right"
                    style={{
                        width: '256',
                        margin: 'auto'
                    }}
                />
        );
    }
}

export default ToggleInput;
