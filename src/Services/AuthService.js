import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";



const api = "http://localhost:5220/api/";

export const LoginAPI = async (username, password) => {
    
    const loginCreds = {
        username: username,
        password: password,
    };

    const testCreds = {
        "username": "Lemon",
        "password": "Little@Lemon123"
      }
      const credsJSON = JSON.stringify(loginCreds);

    console.log(credsJSON);

    try {
        const data = await fetch(api + "account/login", {
            method: 'POST',
            headers: {'Content-Type': 'text/json'},
            body: credsJSON,
        }).then(resp => resp.json())

        console.log(data)

        if (data.status == 401) {
            //return navigate("/login")
            console.log("401")
        }

        return data;
    }
    catch(error) {
        console.log(error)
        toast.warning("Something went wrong! \n Please check all details are correct and try again")
    }
}