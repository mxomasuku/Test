import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import './App.css'

const Change = () => {
    const  [backendData, setBackendData] = useState([{}])

    // * useEffect Hook (without axios)
    useEffect( () => {
        fetch("/api").then(
         response => response.json()   
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

    // * useEffect Hook (with axios)
    // useEffect( () => {
    //     Axios.get('/api', 
    //     response => response.json()
    //     ).then(
    //         data => setData(data)
    //         )
    // .catch( err => console.log(err))
    // }, [])


return (
<div>
{(typeof backendData.changeObject === 'undefined') ? (
<p>Connecting to server....</p>
 ) : (
backendData.changeObject.map((item, i) =>(
    
<p key={i}>{item}</p>
)))
}
</div>

 )
 

}

                    
          


  
export default Change