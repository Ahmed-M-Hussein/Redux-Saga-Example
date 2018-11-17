import React, { Component } from 'react'
import { Input, Icon } from 'antd'
import { validateEmail, validatePhone } from './../components/validators'

export default class TextBox extends Component {



    state = {

        error: true,
        touched: false
    }
    handelChangeLocal = (name, value) => {

        const { validator, handelInput } = this.props

        handelInput(name, value)

        this.setState({ touched: true })

        if (value == '' || value == null) {

            this.setState({ error: true })
            this.props.handelErrors(name, true)
        }
        else if (validator == 'Email') {

            let cheak = validateEmail(value);
            if (cheak) {
                this.setState({ error: false })
                this.props.handelErrors(name, false)

            } else {
                this.setState({ error: true })
                this.props.handelErrors(name, true)

            }

        } else if (validator == 'Phone') {


            let cheak = validatePhone(value)
            if (cheak) {
                this.setState({ error: false })
                this.props.handelErrors(name, false)

            } else {
                this.setState({ error: true })
                this.props.handelErrors(name, true)

            }
        }

        else {

            this.setState({ error: false })
            this.props.handelErrors(name, false)


        }
    }


    handelErrors = () => {

        const { name } = this.props
        this.props.handelErrors(name, this.state.error)
    }
    componentDidMount() {
        this.handelErrors()
        
    }
    render() {




        return (
            <div className={"input_container"}  >
                <div>
                    <label>{this.props.label}</label>
                </div>

                <div>

                    <Input
                        placeholder={this.props.placeholder}
                        onChange={(value) => this.handelChangeLocal(this.props.name, value.target.value)}
                        value={this.props.value}
                        style={this.props.style}
                        placeholder={this.props.placeholder}
                        onClick={() => this.setState({ touched: true })}
                    />

                </div>
                <div className="error_Icon">


                    {(this.state.error && this.state.touched) ? <Icon type="close-circle" style={{ alignSelf: 'center', color: 'red' }} /> : this.state.touched ? <Icon type="check-circle" style={{ alignSelf: 'center', color: 'green' }} /> : undefined}
                </div>
            </div>
        )
    }
}
