import Link from 'next/link'
import React, { useState} from 'react'
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '@/gqlOperations/mutation';
import Navbar from '@/components/Navbar/nav';

const Signup = () => {

    const { push } = useRouter();
    const [formData,setFormData] = useState({})
    const [signupUser,{data,loading,error}] = useMutation(SIGNUP_USER)

    if(loading) return <h1>Loading</h1>
    
    const handleChange = (e)=>{
        setFormData({
         ...formData,
         [e.target.name]:e.target.value
        })
    
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)
        signupUser({
          variables:{
            userNew:formData
          }
        })
        // push('/login')
    }
  return (
    <div>
            {
                error && 
                <div className="red card-panel">{error.message}</div>
            }

            {
                data && data.user &&
                <div className="green card-panel">{data.user.firstName} is SignedUp. You can login now!</div>
            }


         <Navbar/>

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
