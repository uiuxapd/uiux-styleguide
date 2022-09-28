import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const StepWizzard = () => {
    return (
        <div className="flex flex-wrap justify-start p-4">

            <ul className="flex justify-between items-center w-full">
                <li>
                    <div className="flex justify-between items-center mb-5 after:bg-primary-main after:h-px after:w-40 after:border after:border-primary-main after:rounded-full">
                        <span className="h-8 w-8 flex justify-center items-center bg-white border border-solid rounded-full border-primary-main text-primary-main">
                            <CheckIcon className="icon16"/>
                        </span>
                        <span className="mx-3.5 text-primary-main text-base font-normal">Pertama</span>
                    </div>
                    <label className="text-primary-main text-sm font-normal">Completed</label>
                </li>
                <li>
                    <div className="flex justify-between items-center mb-5 after:bg-primary-surface after:h-px after:w-40 after:border after:border-primary-surface after:rounded-full">
                        <span className="ml-3.5 flex justify-center items-center h-10 w-10 bg-primary-main rounded-full text-white">2</span>
                        <span className="mx-3.5 text-primary-main text-base font-bold">Kedua</span>
                    </div>
                    <label className="flex justify-center items-center border-2 border-solid border-primary-main rounded-2xl h-7 w-24 bg-primary-surface text-primary-main text-sm font-normal">In Progress</label>
                </li>
                <li>
                    <div className="flex justify-between items-center mb-5 after:bg-primary-surface after:h-px after:w-40 after:border after:border-primary-surface after:rounded-full">
                        <span className="ml-3.5 flex justify-center items-center h-8 w-8 bg-primary-focused border border-solid rounded-full border-primary-focused text-white">3</span>
                        <span className="mx-3.5 text-neutral-400 text-base font-normal">Ketiga</span>
                    </div>
                    <label className="text-neutral-400 text-sm font-normal">Pending</label>
                </li>
                <li>
                    <div className="flex justify-between items-center mb-5">
                        <span className="ml-3.5 flex justify-center items-center h-8 w-8 bg-primary-focused border border-solid rounded-full border-primary-focused text-white">4</span>
                        <span className="mx-3.5 text-neutral-400 text-base font-normal">Keempat</span>
                    </div>
                    <label className="text-neutral-400 text-sm font-normal">Pending</label>
                </li>
            </ul>

        </div>

        
    );
};  

const StepMini = () => {
    return (
        <div className="flex flex-wrap justify-start p-4">

            <ul className="flex justify-between items-center w-full">
                <li>
                    <div className="flex justify-between mb-5 after:bg-primary-main after:h-px after:w-14 after:border after:border-primary-main after:rounded-full after:mr-5 after:mt-4 ">
                        <span className="grid justify-items-center mr-5">
                            <div className="h-8 w-8 mb-5 flex justify-center items-center bg-white border border-solid rounded-full border-primary-main text-primary-main">
                            <CheckIcon className="icon16"/>
                            </div>
                            <div className="text-primary-main text-sm font-normal">Step 1</div>
                        </span>
                    </div>
                </li>
                <li>
                    <div className="flex justify-between mb-5 after:bg-primary-focused after:h-px after:w-14 after:border after:border-primary-focused after:rounded-full after:mr-5 after:mt-4">
                        <span className="grid justify-items-center mr-5">
                            <div className="h-8 w-8 mb-5 flex justify-center items-center bg-primary-main rounded-full text-white">2</div>
                            <div className="text-primary-main text-sm font-bold">Step 2</div>
                        </span>
                    </div>
                </li>
                <li>
                    <div className="flex justify-between mb-5 after:bg-primary-focused after:h-px after:w-14 after:border after:border-primary-focused after:rounded-full after:mr-5 after:mt-4">
                        <span className="grid justify-center mr-5">
                            <div className="h-8 w-8 mb-5 flex justify-center items-center bg-primary-focused border border-solid rounded-full border-primary-focused text-white">3</div>
                            <div className="text-neutral-400 text-sm font-normal">Step 3</div>
                        </span>
                    </div>
                </li>
                <li>
                    <div className="flex justify-between items-center mb-5">
                        <span className="grid justify-center mr-5">
                            <div className="h-8 w-8 mb-5 flex justify-center items-center bg-primary-focused border border-solid rounded-full border-primary-focused text-white">4</div>
                            <div className="text-neutral-400 text-sm font-normal">Step 4</div>
                        </span>
                    </div>
                </li>
            </ul>

        </div>

        
    );
}; 

export { StepWizzard, StepMini } ;
