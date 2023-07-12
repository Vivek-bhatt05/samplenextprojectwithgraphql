import Link from 'next/link'
import React,{useState} from 'react'

export default function Login() {
    const [formData,setFormData] = useState({})
    
    const handleChange = (e)=>{
        setFormData({
         ...formData,
         [e.target.name]:e.target.value
        })
    
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)
    }
    return (
        <div >
            <h2>Login!!</h2>
            <form onSubmit={handleSubmit}>
                <input
                 type="email"
                 placeholder="email"
                 name="email"
                 onChange={handleChange}
                 required
                 />
                <input
                 type="password"
                 placeholder="password"
                 name="password"
                 onChange={handleChange}
                 required
                 />
                 <Link href="/signup"><p>Dont have an account ?</p></Link> 
                 <button type="submit">Login</button>
            </form>

        </div>
    )
}