import React from 'react'

function MainPage({ images, className, children }) {
    return (
        <div className={className} style={
            {
                backgroundImage: `linear-gradient(rgba(64, 6, 97, 0.4), rgba(64, 6, 97, 0.4)), url(${images})`,
                height: '100vh'
            }
        }>

            {children}
        </div>
    )
}

export default MainPage