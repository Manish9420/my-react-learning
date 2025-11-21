import { useState } from "react"

function AdvancedForm() {

    const [formData, setFormData] = useState({
        gender: "",
        country: "",
        agree: false
        
    });

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))
    }


  return (


    <form onSubmit={handleSubmit}>
        <h2>Form with checkbox radio and select</h2>

        <label> 
            <input 
            type="radio" 
            name='gender' 
            value="male" 
            checked={formData.gender == "male"}
            onChange={handleChange}
            />
            Male
        </label><br/>

        <label> 
            <input 
            type="radio" 
            name='gender' 
            value="female" 
            checked={formData.gender == "female"}
            onChange={handleChange}
            />
            Female
        </label><br/>

        <label> 
            Country :
            <select 
            name='Country' 
            value={formData.country} 
            onChange={handleChange}
            >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
            </select>
        </label>
        <br/>

        <label> 
            <input 
            type="checkbox" 
            name='agree'
             
            onChange={handleChange}
            />
            I agree to terms & condition
        </label>
        <br />

        <button type='submit'>Submit</button>
    </form>
  )
}

export default AdvancedForm
