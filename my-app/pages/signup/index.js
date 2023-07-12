import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';

const Signup = () => {

    const { push } = useRouter();
    const [formData,setFormData] = useState({})
    // const [signupUser,{data,loading,error}] = useMutation(SIGNUP_USer)

    // if(loading) return <h1>Loading</h1>
    
    const handleChange = (e)=>{
        setFormData({
         ...formData,
         [e.target.name]:e.target.value
        })
    
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)
        push('/login')
    }
  return (
    <div>
        <h2>Signup!!</h2>
            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                 placeholder="First Name"
                 name="firstName"
                 onChange={handleChange}
                 required
                 />
                <input
                 type="text"
                 placeholder="Last Name"
                 name="lastName"
                 onChange={handleChange}
                 required
                 />
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
                 <Link href="/login"><p>Already have an account ?</p></Link> 
                 <button className="btn #673ab7 deep-purple" type="submit">Submit</button>
            </form>
      
    </div>
  )
}

export default Signup
