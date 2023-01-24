import { useState } from "react"
import Axios from "axios"
import './App.css';


const VendingForm = () => {

const [data, setData] = useState({
    user : " ", 
    change: " "
})

// * Post data to seUser
const formatData = (e) => {
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
}

    const postDataToServer = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:5000/api', {
            user: data.user,
            change: data.change
        }).then(res => console.log("posting data", res)).then(alert('Change requested')).catch(err => console.log('submission failed'))
    }

   


    return(
        <div className="form">
    <form action="http://localhost:5000/api" method="POST" onSubmit={(e) => postDataToServer(e)}>

       <label className="user">Enter Your Name<input type="text"  id="user" value={data.user} onChange={(e) => formatData(e)} placeholder="name" required="required" min="3" max="10" /></label> 
       <label className="change">Amount<input type="number"id ="change" value={data.change} onChange={(e) => formatData(e)}  placeholder="0.00" step="0.10" min="0.10" title="currency" pattern="^\d+(?:\.\d{1,2})?$"/></label>
     
  {/* TEST FORM */}
 
    
    <input type="submit" value="submit"  className="btn">
        
    </input>
    </form>
        </div>
    
    )
}
export default VendingForm