import React from 'react'

const AppHeader = (props) => {


    return <div className="app_header">
        <div className="app_header_text">{props.name}</div>
    </div>
}

export default AppHeader