import React from "react"
import { useFormik } from "formik"
import * as Yup from 'yup'
function Formic(){
    const formik =useFormik({
        initialValues:{
            username:"",
            name:"",
            email:""
        },

         validationSchema:Yup.object({
            username:Yup.string().max(10,"username must be less than and equal to 10 characters")
         .required("this.required"),
         username:Yup.string().max(10,"username must be less than and equal to 10 characters")
         .required("this.required"),
         username:Yup.string().max(10,"username must be less than and equal to 10 characters")
         .required("this.required"),
         username:Yup.string().max(10,"username must be less than and equal to 10 characters")
         .required("this.required"),
         username:Yup.string().max(10,"username must be less than and equal to 10 characters")
         .required("this.required")


         }),

            onSubmit:(values)=>{
            console.log("form Sumbmitted",values)
        
           }
    })
    console.log(formik.errors)
   
    return(
        <div className="Formic">
            <form onSubmit={formik.handleSubmit}>
                <input type="text"
                name="username"
                placeholder="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                onBlur={formik.handleBlur}
                /><br></br>
                { formik.touched.username &&formik.errors.username &&<p style={{color:"red"}}>{formik.errors.username}</p>}

               <input type="text"
                name="name"
                placeholder="name"
                onChange={formik.handleChange}
                value={formik.values.name} /><br></br>

               <input type="text"
                name="email"
                placeholder="email"
                onChange={formik.handleChange} 
                value={formik.values.email} />  <br></br>
               
                
                <span>Your Status</span>
                <input type="radio"
                name="status"
                onChange={formik.handleChange} 
                value="Male"
                />
               <label htmlFor="">Male</label>

              <input type="radio"
                name="status"
                onChange={formik.handleChange} 
                value="Female"
                />
                 <label htmlFor="">Female</label>
                 <select name="code" onChange={formik.handleChange} >
                    <option value="">select code</option>
                    <option> HTML</option>
                    <option> CSS</option>
                    <option> JS</option>
                 </select>
                   
                 <button type="submit">Submit</button><br></br>
                 
            </form>

        </div>
    )

}
export default Formic