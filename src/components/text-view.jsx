import React from 'react'

const TextView = (props) => {


    return <div className="text_view">
        <div className="text_view_label">{props.label}</div>
        <div>{props.value}</div>
        <hr className="divide_view" />
    </div>
}

export default TextView