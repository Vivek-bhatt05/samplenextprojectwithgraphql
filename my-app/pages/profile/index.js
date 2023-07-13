import Navbar from '@/components/Navbar/nav'
import React from 'react'

export default function Profile() {
    return (
        <div>
            <Navbar />
            <div>
                <img className="circle" style={{border:"2px solid",marginTop:"10px"}} src="https://robohash.org/ram.png?size=200x200" alt="pic" />
                <h3>Ramesh verma</h3>
                <h4>Email - abc@abc.com</h4>
            </div>
             <h3>Your quotes</h3>
            <blockquote>
                <h4>if it works dont touch it</h4>
            </blockquote>
            <blockquote>
                <h4>if it works dont touch it</h4>
            </blockquote>
        </div>
    )
}