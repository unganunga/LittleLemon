import User from '../../images/user.jpg'
import { useContext, useState } from 'react';
import { object, string } from 'yup';
import { AuthContext } from '../../Context/AuthContext';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


function Login(){

    const {login} = useContext(AuthContext)

    const validation = object({
        username: string().required("Please enter your username"),
        password: string().required("Please enter password")
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({resolver: yupResolver(validation)});

    const submitHandler = (data) => login(data.username, data.password);

    return (
        <div >
            <form className="resForm" onSubmit={handleSubmit(submitHandler)}>
                <img src={User} height='150px' style={{margin: "auto", marginTop:"50px", borderRadius: "30px"}}/>

                <label htmlFor="username">Username</label>
                <input {...register("username")} type="name" id="username" autoComplete='username' style={{border: '1px solid'}}></input>
                <div style={{color: "red"}}>{errors.username?.message}</div>


                <label htmlFor='password'>Password</label>
                <input {...register("password")} type="password" id='password' style={{border: '1px solid'}} autoComplete='current-password'></input>
                <div style={{color: "red"}}>{errors.password?.message}</div>


                <input type="submit" value="Login" className="button" style={{marginBottom: "60px"}}/>

            </form>
        </div>
    )
}

export default Login;