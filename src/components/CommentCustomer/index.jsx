import React from 'react'
function CommentCustomer({ name, date, content, children, images, icon }) {
    return (
        <div className='w-[385px] h-[535px] relative' style={
            {
                background: ` url(${images})`,
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }
        }>
            <div className='bg-firt text-white absolute bottom-0 px-10 pb-28 pt-6'>
                <div className='bg-white inline-block text-black px-5 py-2 absolute -top-10'>
                    <h1 className='font-bold uppercase text-[13px]'>{name}</h1>
                    <p className='text-[12px]'>{date}</p>
                </div>
                <h1 className='text-[20px] mb-3'>" {content} "</h1>
                <span className='text-[14px]'>{children}</span>
            </div>
            <div className='bg-primary-color text-white absolute -top-10 left-10 p-[20px] text-[35px] rounded-full'>{icon}</div>
        </div>
    )
}

export default CommentCustomer