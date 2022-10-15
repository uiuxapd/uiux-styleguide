import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

const FormComponent = () => {
    const initValues = { fullname: "", email: ""}
    const [formValues, setFormValues] = useState(initValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
        }
    },[formErrors, formValues, isSubmit])

    const validate = (values) => {
        const error = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

        if (!values.fullname) {
            error.fullname = "Username is required"
        }
        if (!values.email) {
            error.email = "Email is required"
        } else if (!regex.test(values.email)) {
            error.email = "This is not valid email"
        } 
    }

  return (
    <form className="flex flex-col w-1/2 gap-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullname" className="capitalize text-slate-700">
          fullname
        </label>
        <input onChange={handleChange} value={formValues.fullname} type="text" id="fullname" className="block w-full py-2.5 px-4 text-base bg-white border border-slate-300 hover:border-primary-main rounded-lg leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main" />
      </div>
      <div>
        <label htmlFor="email" className="capitalize text-slate-700">
          email
        </label>
        <input onChange={handleChange} value={formValues.email} type="email" id="email" className="block w-full py-2.5 px-4 text-base bg-white border border-slate-300 hover:border-primary-main rounded-lg leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main" />
      </div>
      <div>
        <label className="capitalize text-slate-700">gender</label>
        <div className="flex items-center gap-8 mt-2">
          <div className="flex items-center gap-2">
            <div className="relative w-5 h-5">
              <input type="radio" name="gender" id="male" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" />
              <div className="w-full h-full bg-white peer-checked:bg-blue-600 border-2 border-primary-border peer-hover:border-primary-main rounded-full peer-hover:ring-2 peer-hover:ring-[#F0F5FF] before:invisible before:z-[2] before:absolute before:w-2 before:h-2 before:bg-white before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:-rotate-45 peer-checked:before:visible"></div>
            </div>
            <label htmlFor="male" className="capitalize">
              male
            </label>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative w-5 h-5">
              <input type="radio" name="gender" id="female" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" />
              <div className="w-full h-full bg-white peer-checked:bg-blue-600 border-2 border-primary-border peer-hover:border-primary-main rounded-full peer-hover:ring-2 peer-hover:ring-[#F0F5FF] before:invisible before:z-[2] before:absolute before:w-2 before:h-2 before:bg-white before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:-rotate-45 peer-checked:before:visible"></div>
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
                <input type="checkbox" name="checkbox" id="" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" />
                <div className="w-full h-full bg-white peer-checked:bg-primary-main border-2 border-primary-border peer-hover:border-primary-main rounded-md peer-hover:ring-2 peer-hover:ring-[#F0F5FF] before:invisible after:invisible before:absolute before:w-[2px] before:h-1.5 before:bg-white before:rounded-full before:top-[55%] before:-translate-y-1/2 before:left-1/2 before:-translate-x-1 before:-rotate-45 before:z-[2] after:absolute after:w-[2px] after:h-[10px] after:bg-white after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:rotate-45 after:z-[2] peer-checked:before:visible peer-checked:after:visible"></div>
                </div>
                <label htmlFor="checkbox" className="capitalize">I agree with all <strong className="text-primary-main">terms & conditions</strong></label>
            </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center w-full pt-6">
        <button className="bg-primary-main text-white text-base py-2 px-4 rounded-lg shadow transition-all border-none hover:bg-primary-hover focus:ring-4 focus:ring-primary-focused focus:shadow-none focus:outline-none capitalize">disable</button>
        <button className="bg-primary-main text-white text-base py-2 px-4 rounded-lg shadow transition-all border-none hover:bg-primary-hover focus:ring-4 focus:ring-primary-focused focus:shadow-none focus:outline-none capitalize">submit</button>
      </div>
    </form>
  );
};

export default FormComponent;
