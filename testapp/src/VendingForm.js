import { useState } from "react"
import Axios from "axios"

//  "proxy": "http://localhost:5000",



const VendingForm = () => {

    const [title, setTitle] = useState('')
const [body, setBody] = useState('')

// * Post data to server

const postDataToServer = (e) =>{
    e.preventDefault()
     Axios.post('http://localhost:5000/api', {title, body}).then(res => console.log("posting data", res)).catch(err => console.log('submission failed'))
    }

    return(
        <div>
    <form action="" method="POST">

       <label>Enter Your Name<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="name" required="required" min="3" max="10" /></label> 
       <label>Amount<input type="number" value={body} onChange={(e) => setBody(e.target.value)} placeholder="0.00" step="0.10" min="0.10" title="currency" pattern="^\d+(?:\.\d{1,2})?$" /></label> 
    <input type="submit" value="submit" onClick={postDataToServer}>
        
    </input>
    </form>
        </div>
    
    )
}
export default VendingForm