"use client";
import { registorSchema } from "@/YapValidation";
import RegisterSvg from "@/components/RegisterSvg";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEyeSlashFill } from "react-icons/bs";
import { FaEye, FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function Signup() {
  const [type, setType] = useState({
    password: true,
    cpassword: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registorSchema),
  });

  const onSubmit = (data) => {};

  const inputClass =
    "outline-none block border-orange-300 border-b-[0.1rem] bg-transparent  py-1  w-full text-lg pl-1 pr-9";

  return (
    <main className="container-div">
      <div className="text-center mt-8">
        <h3 className="text-xl  font-bold capitalize text-gray-700">
          create your Sell BD account
        </h3>
        <p className="">Enjoy online shopping</p>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2  md:grid-rows-2">
        <RegisterSvg />
        <form
          className="w-[85%] xl:w-[380px] xl:mt-8 md:w-[300px] mx-auto md:mx-0 md:ml-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mt-4">
            <div className="relative">
              <input
                className={inputClass}
                placeholder="Enter your username"
                {...register("username")}
              />
              <FaRegUserCircle className="absolute cursor-pointer right-1 bottom-[0.4rem] text-[1.5rem] text-gray-400" />
            </div>
            <small className=" ml-2">{errors?.username?.message}</small>
          </div>
          <div className="mt-4">
            <div className="relative">
              <input
                className={inputClass}
                placeholder="Enter your valid email"
                {...register("email")}
              />
              <MdOutlineMarkEmailRead className="absolute cursor-pointer right-1 bottom-[0.4rem] text-[1.5rem] text-gray-400" />
            </div>
            <small className=" ml-2">{errors?.email?.message}</small>
          </div>

          <div className="mt-4">
            <div className="relative">
              <input
                className={inputClass}
                placeholder="Enter your password"
                type={type.password ? "password" : "text"}
                {...register("password")}
              />
              {type.password ? (
                <FaEye
                  onClick={() => setType({ ...type, password: !type.password })}
                  className="absolute cursor-pointer right-1 bottom-[0.4rem] text-[1.5rem] text-gray-400"
                />
              ) : (
                <BsEyeSlashFill
                  onClick={() => setType({ ...type, password: !type.password })}
                  className="absolute cursor-pointer right-1 bottom-[0.4rem] text-[1.5rem] text-gray-400"
                />
              )}
            </div>
            <small className=" ml-2">{errors?.password?.message}</small>
          </div>

          <div className="mt-4">
            <div className="relative">
              <input
                className={inputClass}
                placeholder="Enter your confirm password"
                {...register("cpassword")}
                type={type.cpassword ? "password" : "text"}
              />
              {type.cpassword ? (
                <FaEye
                  onClick={() =>
                    setType({ ...type, cpassword: !type.cpassword })
                  }
                  className="absolute cursor-pointer right-1 bottom-[0.4rem] text-[1.5rem] text-gray-400"
                />
              ) : (
                <BsEyeSlashFill
                  onClick={() =>
                    setType({ ...type, cpassword: !type.cpassword })
                  }
                  className="absolute cursor-pointer right-1 bottom-[0.4rem] text-[1.5rem] text-gray-400"
                />
              )}
            </div>
            <small className=" ml-2">{errors?.cpassword?.message}</small>
          </div>

          <button
            className="bg-blue block w-full
            disabled:bg-slate-600/40 disabled:text-blue-500/50 disabled:hover:shadow-none  font-2xl uppercase font-bold bg-orange-300 py-3 mt-8 rounded-lg text-white"
            type="submit"
          >
            {isLoading ? (
              <div
                className={`flex
                justify-center items-center gap-x-2`}
              >
                <span className=" inline-block w-6 h-6 rounded-full border-r-4 border-l-4 border-gray-100 animate-spin"></span>
                login...
              </div>
            ) : (
              "login"
            )}
          </button>

          <p className="capitalize text-center  text-gray-800">
            already have an account?
            <Link className="text-blue-500" href="/login">
              login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
