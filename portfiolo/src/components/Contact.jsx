import emailjs from '@emailjs/browser'
import { useState } from 'react'
import {toast} from "react-hot-toast"
import { motion } from 'framer-motion'

const Contact=()=>{
    const [formdata,setFormdata]=useState({
        name:'',
        email:"",
        message:""
    })
    const [formstatus,setFormStatus]=useState({
        submitting:false,
        error:false,

    })
    const SendMessage= async (e)=>{
        e.preventDefault()
        console.log(formdata)
      
      setFormStatus({
        submitting:true,
        success:false,
        error:false,
        
      })
      try{
       await emailjs.send(
       import.meta.env.VITE_EMAILJS_SERVICE_ID,
       import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {name:formdata.name,
          email:formdata.email,
          message:formdata.message  
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    
       )
       setFormStatus({
        submitting:false,
        success:true,
        error:false,
      })
      setFormdata({name:"",email:"",message:""})
      toast.success("message sent successfully")
      }catch(error){
        console.log(error)
         setFormStatus({
        submitting:false,
        success:false,
      })
      toast.error("failed to send message,please try again",{id:"fail"})
      }

    }
    return(<motion.div 

       initial={{opacity:0,x:-200}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
    
    className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact">

         <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Contact<span className="underline underline-offset-4 decoration-1
        under font-light">With Me</span></h1>
        <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">Ready to make a move? Let's Build Your Desired Applications Together.</p>
        <form className="max-w-2xl mx-auto text-gray-600 pt-8" onSubmit={SendMessage}>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 text-left">
                    Name
                    <input type="text" name="Name" required placeholder="enter your name" className="w-full border border-gray-300 rounded py-3
                    px-4 mt-2 " value={formdata.name} onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/>
                </div>
                  <div className="w-full md:w-1/2 text-left md:pl-4" >
                    Email
                    <input type="email" name="Email" required placeholder="enter your Email" className="w-full border border-gray-300 rounded py-3
                    px-4 mt-2" value={formdata.email} onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/>
                </div>
            </div>
            <div className="my-6 text-left" >
                Message
                <textarea type="text" name="Message" placeholder="enter your message"
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none" value={formdata.message}
                onChange={(e)=>setFormdata({...formdata,message:e.target.value})}></textarea>
            </div>
            <button type="submit" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm sm:text-base font-medium transition-colors duration-300" disabled={formstatus.submitting}> 
                {formstatus.submitting?(<div className='text-green-500'>sending message</div>):"Send message"}</button>
                {/* {formstatus.message&&(<div>{formstatus.message}</div>)}*/ }
        </form>

    </motion.div>)
}

export default Contact