import React from 'react'
import Button from '..'
function ButtonPrimary({ children }) {
    return (
        <Button className="btn btn-primary mx-auto hover:bg-gradient-to-l transition duration-1000  ease-linear">
            {children}
        </Button>
    )
}

export default ButtonPrimary