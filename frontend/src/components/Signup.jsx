import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
    <div>
    <div id="my_modal" className="flex h-screen items-center justify-center">
          <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-2">
                <span>
                    Email
                </span>
                <br/>
                <input type="email" placeholder="Enter your Email" className="w-80 px-3 border rounded-md outline-none py-1"{...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
            </div>


           {/* Password */}
            <div className="mt-4 space-y-2">
                <span>
                    Password
                </span>
                <br/>
                <input type="password" placeholder="Enter your Password" className="w-80 px-3 border rounded-md outline-none py-1"{...register("password", { required: true })}
                  />
                  <br />
                  {errors.password && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
            </div>

            <div className="mt-5 space-y-2 flex flex-col w-1/2">
                <button className=" bg-pink-500 text-white px-3 py-1 rounded-md outline-none">Signup</button>
                <p>Have Account? <span onClick={()=>{document.getElementById('my_modal_3').showModal()}} className=" text-blue-500 underline cursor-pointer">Login!</span> <Login /></p>
            </div>
            </form>
            <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <Link to='/'>
                <button className="btn">Close</button>
                </Link>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Signup