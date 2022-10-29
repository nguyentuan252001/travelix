import React from 'react'
import background from "../../../assets/images/background.webp"
import ContactForm from '../../../components/ContactForm'

function ContactMe() {
    return (
        <div style={{
            background: `url(${background})`,
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            paddingTop: '40%',
            position: 'relative',
            marginBottom: '-35px'
        }}>
            <ContactForm className="color-primary py-[60px] px-[40px] text-white absolute top-0 right-[150px] bottom-[35px] left-[700px] rounded-xl" />
        </div>
    )
}

export default ContactMe