import Navbar from '@/components/Navbar/nav'
import { LOGIN_USER } from '@/gqlOperations/mutation'
import { useMutation } from '@apollo/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React,{useState} from 'react'

export default function Login() {
    const [formData,setFormData] = useState({})
    const [signinUser,{data,loading,error}] = useMutation(LOGIN_USER)
    const { push } = useRouter();


    if(loading) return <h1>Loading</h1>
    if(data){
        localStorage.setItem("token",data.user.token)
        push("/")
    }
    
    const handleChange = (e)=>{
        setFormData({
         ...formData,
         [e.target.name]:e.target.value
        })
    
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)
        signinUser({
            variables:{
                userSignin:formData
            }
        })
    }
    return (
        <div >
            <Navbar />
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