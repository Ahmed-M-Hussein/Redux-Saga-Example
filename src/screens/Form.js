import React, { Component } from 'react'
import TextBox from './../components/text-box'
import ComboBox from './../components/combo-box'
import { connect } from 'react-redux';
import { AddPerson } from './../store/actions';
import { Button, message } from 'antd'
let errors = {}
const list = [


    { label: "Frist Name", name: 'FristName', placeholder: 'Frist Name', type: 'text' },
    { label: "Last Name", name: 'LastName', placeholder: "Last Name", type: 'text' },
    { label: "Email", name: 'Email', placeholder: 'Email', validator: 'Email', type: 'text' },
    { label: "Phone", name: 'Phone', placeholder: 'Phone', validator: 'Phone', type: 'text' },
    { label: "Address", name: 'Address', placeholder: 'Address', type: 'text' },
    { label: "Gender", name: 'Gender', placeholder: 'Please Choose Gender', type: 'combo', data: [{ key: 'Male', value: "Male" }, { key: 'Female', value: "Female" }] },
    { label: "Nationality", name: 'Nationality', placeholder: 'Nationality', type: 'text' },



]
class Form extends Component {


    state = {


    }

    handelInput = (key, value) => {

        this.setState({ [key]: value })
    }


    handelErrors = (key, value) => {

        let obj = {}
        obj[key] = value;
        errors = { ...errors, ...obj }
    }

    handelClick = () => {

        if (this.formHaveErrors()) {
            message.error("invalid Data")
        } else {

            const { AddPerson } = this.props

            AddPerson(this.state)

        }


    }

    formHaveErrors = () => {


        return Object.values(errors).find(d => d == true)
    }


    renderFileds = () => {



        return list.map(d => {


            switch (d.type) {
                case 'text': return <TextBox
                    label={d.label}
                    name={d.name}
                    placeholder={d.placeholder}
                    value={this.state[d.name]}
                    handelInput={this.handelInput}
                    handelErrors={this.handelErrors}
                    validator={d.validator}

                />

                case 'combo': return <ComboBox

                    label={d.label}
                    name={d.name}
                    placeholder={d.placeholder}
                    value={this.state[d.name]}
                    handelInput={this.handelInput}
                    handelErrors={this.handelErrors}
                    validator={d.validator}
                    data={d.data}
                />
            }


        })
    }
    render() {
        const { history, move, loading } = this.props
        if (move) {

            history.push('/Display')
        }


        return (
            <div className="form_container">

                {!loading ?
                    <div className="inner_form_container">

                        {this.renderFileds()}

                        <div className="form_button">
                            <Button onClick={this.handelClick}  >Add New Person</Button>
                        </div>


                    </div> : undefined}
            </div>


        )
    }
}

const mapDispatchToProps = {
    AddPerson: AddPerson,
};
const mapPropsToState = state => ({
    move: state.move,
    loading: state.loading
})
const FormWrapper = connect(mapPropsToState, mapDispatchToProps)(Form);
export default FormWrapper;