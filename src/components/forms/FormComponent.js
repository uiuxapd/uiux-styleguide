import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const FormComponent = () => {
  
  const [ errorInput, setErrorInput ] = useState({
    message: '',
    state: false
  })
  const [ errorEmail, setErrorEmail ] = useState({
    message: '',
    state: false
  })

  const baseClass = "block w-full py-2.5 px-4 text-base bg-white border border-slate-300 hover:border-primary-main rounded-lg leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main"
  const errorClass = "block w-full py-2.5 px-4 text-base text-error-main bg-error-surface border border-error-border hover:border-error-main rounded-lg leading-tight focus:outline-none focus:bg-error-surface focus:ring focus:ring-error-focused focus:border-error-main"
  
  const handleSubmit = (ev) => {
        ev.preventDefault();

        const validateEmail = email => /^[^@ ]+@[^@ ]+\.[^@ \.]+$/.test(email);

        const datas = new FormData(ev.target)
        const item = Object.fromEntries(datas.entries())
        
        if (item.fullname === "") {
          setErrorInput({
            message: "Fullname is required",
            state: true
          })
        } else {
          setErrorInput({
            message: '',
            state: false
          })
        }

        if (item.email === "") {
          setErrorEmail({
            message: "Email is required",
            state: true
          })
        } else if (!validateEmail(item.email)) {
          setErrorEmail({
            message: "Please enter a valid email adrress",
            state: true
          })
        } else {
          setErrorEmail({
            message: '',
            state: false
          })
        }
    }

  return (
    <>
    <form className="flex flex-col w-full md:w-1/2 gap-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullname" className="capitalize text-slate-700">
          fullname
        </label>
        <input type="text" id="fullname" name="fullname" className={errorInput.state ? errorClass : baseClass} />
        <span className="relative text-error-main text-xs italic empty:hidden">{errorInput.message}</span>
      </div>
      <div>
        <label htmlFor="email" className="capitalize text-slate-700">
          email
        </label>
        <input type="text" id="email" name="email" className={errorEmail.state ? errorClass : baseClass} />
        <span className="relative text-error-main text-xs italic empty:hidden">{errorEmail.message}</span>
      </div>
      <div>
        <label className="capitalize text-slate-700">gender</label>
        <div className="flex items-center gap-8 mt-2">
          <div className="flex items-center gap-2">
            <div className="relative w-5 h-5">
              <input type="radio" name="gender" id="male" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]"/>
              <div className="w-full h-full bg-white peer-checked:bg-blue-600 border-2 border-primary-border peer-hover:border-primary-main rounded-full peer-hover:ring-2 peer-hover:ring-[#F0F5FF] before:invisible before:z-[2] before:absolute before:w-2.5 before:h-2.5 before:bg-white before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:-rotate-45 peer-checked:before:visible"></div>
            </div>
            <label htmlFor="male" className="capitalize">
              male
            </label>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative w-5 h-5">
              <input type="radio" name="gender" id="female" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" />
              <div className="w-full h-full bg-white peer-checked:bg-blue-600 border-2 border-primary-border peer-hover:border-primary-main rounded-full peer-hover:ring-2 peer-hover:ring-[#F0F5FF] before:invisible before:z-[2] before:absolute before:w-2.5 before:h-2.5 before:bg-white before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:-rotate-45 peer-checked:before:visible"></div>
            </div>
            <label htmlFor="female" className="capitalize">
              female
            </label>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="fullname" className="capitalize text-slate-700">
          date of birtday
        </label>
        <input type="date" id="fullname" className="block w-full py-2.5 px-4 text-base bg-white border border-slate-300 hover:border-primary-main rounded-lg leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main" />
      </div>
      <div>
        <label htmlFor="fullname" className="capitalize text-slate-700">
          hobbies
        </label>
        <div className="relative group">
            <ChevronDownIcon className="h-4 w-4 text-primary-main absolute right-4 top-1/2 -translate-y-1/2 group-focus-within:rotate-180" />
            <select className="appearance-none block w-full py-2.5 px-4 text-base bg-white border border-slate-300 hover:border-primary-main rounded-lg leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main ">
                <option value="1">Design</option>
                <option value="2">Also design</option>
                <option value="3">Design again</option>
            </select>
        </div>
      </div>
      <div>
        <label htmlFor="address" className="capitalize text-slate-700">
          address
        </label>
        <textarea rows="2" id="address" className="block w-full py-2.5 px-4 text-base bg-white border border-slate-300 hover:border-primary-main rounded-lg leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main"></textarea>
      </div>
      <div>
        <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
                <div className="relative w-5 h-5">
                <input type="checkbox" name="checkbox" id="checkbox" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" />
                <div className="w-full h-full bg-white peer-checked:bg-primary-main border-2 border-primary-border peer-hover:border-primary-main rounded-md peer-hover:ring-2 peer-hover:ring-[#F0F5FF] before:invisible after:invisible before:absolute before:w-[2px] before:h-1.5 before:bg-white before:rounded-full before:top-[55%] before:-translate-y-1/2 before:left-1/2 before:-translate-x-1 before:-rotate-45 before:z-[2] after:absolute after:w-[2px] after:h-[10px] after:bg-white after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:rotate-45 after:z-[2] peer-checked:before:visible peer-checked:after:visible"></div>
                </div>
                <label htmlFor="checkbox" className="capitalize">I agree with all <strong className="text-primary-main">terms & conditions</strong></label>
            </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center w-full pt-6">
        <button className="w-full bg-primary-main text-white text-base py-2 px-4 rounded-lg shadow transition-all border-none hover:bg-primary-hover focus:ring-4 focus:ring-primary-focused focus:shadow-none focus:outline-none capitalize">submit</button>
      </div>
    </form>
    </>
  );
};

export default FormComponent;
