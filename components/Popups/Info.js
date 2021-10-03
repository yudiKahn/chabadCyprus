import React from 'react'

/**
 * 
 * @param {{title:string, txt:string}} props
 */
function Info({title,txt}) {
    return (
        <div className="popup info-pop">
            <div>
                <h1>{title}</h1>
                <p>{txt}</p>
            </div>
        </div>
    )
}

export default Info
