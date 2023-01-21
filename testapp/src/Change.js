import React, {useEffect, useState} from 'react'

const Change = () => {
    const  [backendData, setBackendData] = useState([{}])
    
    useEffect( () => {
        fetch("/api").then(
         response => response.json()   
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

            return(  
                
            <div className='Change'>
                {(typeof backendData.users == 'undefined') ? (
                    <p>Loading...</p>
                ) : backendData.users.map((user, i) => (
                
                        <p key={i}>{user}</p>
                
                ))}
    
                
            </div>)
        }
   


  
export default Change