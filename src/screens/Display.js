import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextView from './../components/text-view'
import { callOther } from './../store/actions';
import { Button } from 'antd';

const list = [
    { label: 'Fris tName', value: 'FristName' },
    { label: 'Last Name', value: 'LastName' },
    { label: 'Email', value: 'Email' },
    { label: 'Phone', value: 'Phone' },
    { label: 'Address', value: 'Address' },
    { label: 'Gender', value: 'Gender' },
    { label: 'Nationality', value: 'Nationality' },

]
class Display extends Component {





    componentDidMount() {

        const { callOther } = this.props
        callOther()
    }


    renderFileds = () => {


        const { data } = this.props

        return list.map(d => {

            return <TextView
                label={d.label}
                value={data[d.value]}
            />

        })
    }
    render() {

        const { loading, history } = this.props
       
        return (
            <div className="form_container">
                {!loading ?
                    <div className="inner_form_container">

                        {this.renderFileds()}
                        <Button onClick={() => history.replace('/')}>Back</Button>

                    </div> : undefined}
            </div>

        )
    }
}

const mapDispatchToProps = {
    callOther
};
const mapPropsToState = state => ({
    data: state.data,
    loading:state.loading
})
const DisplayWrapper = connect(mapPropsToState, mapDispatchToProps)(Display);
export default DisplayWrapper;