import React, { Component } from 'react'
import { Input } from 'antd'
import { runInThisContext } from 'vm';
const { TextArea } = Input;
export default class TextAreaComponent extends Component {
    render() {
        return (
            <div className="form-divide">
                <div><label>{this.props.label}</label></div>

                <div><TextArea
                    placeholder={this.props.placeholder}
                    autosize={{ maxRows: 5, minRows: 3 }}
                    onChange={(value) => this.props.handelInput(this.props.name, value.target.value)}
                    value={this.props.value}
                    style={this.props.style}
                />
                </div>
            </div>
        )
    }
}
