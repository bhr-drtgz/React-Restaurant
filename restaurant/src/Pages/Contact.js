import React from 'react'

export default function Contact() {
    return (
        <div className='contact'>
            <div className='leftcontact'>
             </div>
            <div className='rightcontact'>
                <h1> CONTACT US</h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder='Enter full name...' type="text" />
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder='Enter full email...' type="email" />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" required rows="6" placeholder='Enter message...'></textarea>
                    <button type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    )
}
