/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'

const ShinyEffect = ({left, right, top, size = 500}) => {

    const postitionStyles = {
        top: `${top}px`,
        width: `${size}px`,
        height: `${size}px`,
        zIndex: -1
    }

    if (left !== undefined) {
        postitionStyles.left = `${left}px`
    }

    if (right !== undefined) {
        postitionStyles.right = `${right}px`
    }

   


    return (

        <div className='shiny-effect' style={postitionStyles}></div>
    )
}

export default ShinyEffect