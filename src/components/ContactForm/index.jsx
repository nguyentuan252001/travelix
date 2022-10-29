import React from 'react'
import Button from '../../components/Button'

function ContactForm({ className }) {
    return (
        <div className={className}>
            <h1 className='text-[30px] uppercase font-bold mb-[60px]'>Get in touch</h1>
            <form>
                <div className='inline-block w-1/2 pr-4'>
                    <input className='input-contact' type='text' placeholder='Name' />
                </div>
                <div className='inline-block w-1/2'>
                    <input className='input-contact' type='email' placeholder='E-mail' />
                </div>
                <div className=''>
                    <input className='input-contact mt-6' type='text' placeholder='Subject' />
                </div>
                <div>
                    <textarea className='input-contact mt-6' rows="4" cols="50" placeholder='Message' />
                </div>
            </form>
            <Button className='btn bg-primary mt-[70px] hover:opacity-80 mx-auto'>Send Message</Button>
        </div>
    )
}

export default ContactForm