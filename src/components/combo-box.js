import React, { Component } from 'react'
import { Icon, Tooltip } from 'antd';
import { Select } from 'antd';

const Option = Select.Option;


export default class ComboBox extends Component {

    state = {

        value: '',
        key: this.props.placeholder,
        error: true,
        touched: false

    }

    handelchange = (item) => {
        this.setState({ value: item.value })
        this.setState({ key: item.key })
        this.setState({ touched: true })
        this.props.handelErrors(this.props.name, false)
        this.props.handelInput(this.props.name, item.value)
    }

    renderOptions = () => {
        return (this.props.data || []).map((item, index) => {
            return <Option key={index} value={item}>{item.key}</Option>



        })

    }

    handelErrors = () => {

        const { name } = this.props
        this.props.handelErrors(name, this.state.error)
    }
    componentDidMount() {
        this.handelErrors()

        if (this.props.value) {

            let currentSelect = (this.props.data || []).find(d => d.value == this.props.value)

            if (currentSelect) {

                this.setState({ key: currentSelect.key, value: currentSelect.value })
            } else {

                let currentSelect_ID = (this.props.data || []).find(d => d.value._id == this.props.value._id)
                if (currentSelect_ID) {
                    this.setState({ key: currentSelect_ID.key, value: currentSelect_ID.value })
                }
            }

        }
    }

    render() {


        return (
            <div className={"input_container"}  >
                <div>
                    <label>{this.props.label}</label>
                </div>
                <div>
                    {this.props.hint ? <Tooltip placement="left" title={this.props.hint} >
                        <Icon type="question-circle" theme="outlined" style={{ marginRight: 8 }} />
                    </Tooltip> : undefined}





                    <Select
                        defaultValue={this.state.key}
                        style={{ width: '100%', ...this.props.style }}
                        onChange={this.handelchange}
                        value={this.state.key}
                        onClick={()=>this.setState({touched:true})}
                    >

                        {this.renderOptions()}
                    </Select>


                </div>

                <div className="error_Icon">

                    {(this.state.value ) ?  <Icon type="check-circle" style={{ alignSelf: 'center', color: 'green' }} />: this.state.touched ?  <Icon type="close-circle" style={{ alignSelf: 'center', color: 'red' }} /> : undefined}
                </div>
            </div>
        )
    }
}
