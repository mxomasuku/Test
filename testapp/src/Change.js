import React, {useEffect, useState} from 'react'
import Axios from 'axios'

const Change = () => {
    const  [backendData, setBackendData] = useState([{}])

    // * useEffect Hook (without axios)
    // useEffect( () => {
    //     fetch("/api").then(
    //      response => response.json()   
    //     ).then(
    //         data => {
    //             setBackendData(data)
    //         }
    //     )
    // }, [])

    // ! useEffect Hook (with axios)
    useEffect( () => {
        Axios.get('/api').then(res => res.data).then(data =>{setBackendData(data)}).catch( err => console.log(err))
    }, [])

            return(  
           // * conditional logic for rendering backend data     
            <div className='Change'>
                {(typeof backendData.users == 'undefined') ? (
                    <p>Loading...</p>
                ) : backendData.users.map((user, i) => (
                
                    <div>
                        <p key ={i}>{user.userName}</p>
                        <p key ={i}> Your Change is: {user.amount}</p>
                    </div>
                       
                
                ))}
    
                
            </div>)
        }
   


  
export default Change