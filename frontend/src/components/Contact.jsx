import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <div
          id="my_modal"
          className="flex h-screen items-center justify-center"
        >
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <h3 className="font-bold text-3xl">Contact Us</h3>
              <div className="mt-4 space-y-4">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-96 px-3 border rounded-md outline-none py-1"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-96 px-3 border rounded-md outline-none py-1"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/*   Message */}
              <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <textarea
                  placeholder="Enter your Message"
                  className=" w-96 h-40 px-3 border rounded-md outline-none py-1"
                  {...register("message", { required: true })}
                />
                <br />
                {errors.message && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-5 space-y-2 flex flex-col w-1/2">
                <button className=" bg-pink-500 text-white px-3 py-1 rounded-md outline-none">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
