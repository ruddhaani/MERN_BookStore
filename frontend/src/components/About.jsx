
import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';

function About() {

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [authUser , setAuthUser] = useAuth();
    const handleLogout = ()=>{
        try {
            setAuthUser({
                ...authUser,
                user : null
            })
            localStorage.removeItem("Users");
            toast.success("Please Login Again!");
            setTimeout(()=>{
                window.location.reload();
            },2000);
           
        } catch (error) {
            toast.error("Error : " + error.message);
            setTimeout(()=>{} , 3000);
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit =async (data)=>{
        const userInfo = {
            email : data.email,
            oldPassword : data.oldpassword,
            newPassword : data.newpassword
        }

        await axios.post("http://localhost:4001/user/update" , userInfo)
            .then((res)=>{
                if(res.data){
                    toast.success("Password Updated");
                    navigate(from , {replace:true});
                    handleLogout();
                }

            }).catch((err)=>{
                if(err.response){
                  toast.error('Error : ' + err.response.data.message);
                }
              });
      };
  return (
    <>
    <div>
    <div id="my_modal" className="flex h-screen items-center justify-center">
          <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <h3 className="font-bold text-lg">Update</h3>
            <div className="mt-4 space-y-2">
                <span>
                    Email
                </span>
                <br/>
                <input type="Email" placeholder="Enter your Email" className="w-80 px-3 border rounded-md outline-none py-1"{...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
            </div>

            <div className="mt-4 space-y-2">
                <span>
                    Old Password
                </span>
                <br/>
                <input type="password" placeholder="Enter your old Password" className="w-80 px-3 border rounded-md outline-none py-1"{...register("oldpassword", { required: true })}
                  />
                  <br />
                  {errors.oldpassword && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
            </div>


           {/* Password */}
            <div className="mt-4 space-y-2">
                <span>
                    New Password
                </span>
                <br/>
                <input type="password" placeholder="Enter your New Password" className="w-80 px-3 border rounded-md outline-none py-1"{...register("newpassword", { required: true })}
                  />
                  <br />
                  {errors.newpassword && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
            </div>

            <div className="mt-5 space-y-2 flex flex-col w-1/2">
                <button className=" bg-pink-500 text-white px-3 py-1 rounded-md outline-none">Change</button>
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

export default About