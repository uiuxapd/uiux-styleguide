import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const SimpleStep = () => {
    return (
        <div className="flex sm:justify-start lg:justify-center w-64 min-w-full overflow-x-auto">
            <div className="flex justify-start p-4">
                <ul className="flex items-center">
                    <li>
                        <div className="h-2 w-60 bg-primary-main border border-primary-main rounded-full mr-3.5 mb-4"></div>
                        <label className="text-base font-bold text-primary-main">Step 1</label>
                    </li>
                    <li>
                        <div className="h-2 w-60 bg-primary-main border border-primary-main rounded-full mr-3.5 mb-4"></div>
                        <label className="text-base font-bold text-primary-main">Step 2</label>
                    </li>
                    <li>
                        <div className="h-2 w-60 bg-primary-focused border border-primary-focused rounded-full mr-3.5 mb-4"></div>
                        <label className="text-base font-normal text-primary-focused">Step 3</label>
                    </li>
                    <li>
                        <div className="h-2 w-60 bg-primary-focused border border-primary-focused rounded-full mr-3.5 mb-4"></div>
                        <label className="text-base font-normal text-primary-focused">Step 4</label>
                    </li>
                </ul>
            </div>
        </div>
    );
};  

const StepCircle = () => {
    return (
        <div className="flex sm:justify-start lg:justify-center w-64 min-w-full overflow-x-auto">
            <div className="flex justify-start p-4">
                <ul className="flex items-center">
                    <li>
                        <div className="flex justify-center items-center mb-5">
                            <div className="flex items-center">
                                <span className="h-8 w-8 flex justify-center items-center bg-white border border-solid rounded-full border-primary-main text-primary-main">
                                    <CheckIcon className="icon16"/>
                                </span>
                                <span className="mx-3.5 text-primary-main text-base font-normal">Pertama</span>
                            </div>
                            <span className="h-px w-40 bg-primary-main border border-primary-main rounded-full mr-3.5"></span>
                        </div>
                    </li>
                    <li>
                        <div className="flex justify-center items-center mb-5">
                            <div className="flex items-center">
                                <span className="h-8 w-8 flex justify-center items-center bg-primary-main border border-solid rounded-full border-primary-main text-white">
                                    2
                                </span>
                                <span className="mx-3.5 text-primary-main text-base font-bold">Kedua</span>
                            </div>
                            <span className="h-px w-40 bg-primary-focused border border-primary-focused rounded-full mr-3.5"></span>
                        </div>
                    </li>
                    <li>
                        <div className="flex justify-center items-center mb-5">
                            <div className="flex items-center">
                                <span className="h-8 w-8 flex justify-center items-center bg-primary-focused border border-solid rounded-full border-primary-focused text-white">
                                    3
                                </span>
                                <span className="mx-3.5 text-primary-focused text-base font-normal">Ketiga</span>
                            </div>
                            <span className="h-px w-40 bg-primary-focused border border-primary-focused rounded-full mr-3.5"></span>
                        </div>
                    </li>
                    <li>
                        <div className="flex justify-center items-center mb-5">
                            <div className="flex items-center">
                                <span className="h-8 w-8 flex justify-center items-center bg-primary-focused border border-solid rounded-full border-primary-focused text-white">
                                    4
                                </span>
                                <span className="mx-3.5 text-primary-focused text-base font-normal">Keempat</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        
    );
};  

const StepMini = () => {
    return (
        <div className="flex sm:justify-start lg:justify-center w-64 min-w-full overflow-x-auto">
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
        </div>

        
    );
}; 

const StepVertical = () => {
    return (
        <div className="flex flex-wrap justify-start p-4">

            <ul className="items-center w-full">
                <li>
                    <div className="grid items-center mb-5">
                        <div className="flex items-center mb-3">
                            <span className="h-8 w-8 flex justify-center items-center bg-white border border-solid rounded-full border-primary-main text-primary-main">
                                <CheckIcon className="icon16"/>
                            </span>
                            <span>
                                <div className="mx-3.5 text-primary-main text-base font-normal">Pertama</div>
                                <div className="mx-3.5 text-primary-focused text-sm font-light">Satu-satu aku sayang ibu</div>
                            </span> 
                        </div>
                        <span className="h-14 w-px bg-primary-main border border-primary-main rounded-full ml-4 mr-0"></span>
                    </div>
                </li>
                <li>
                    <div className="grid items-center mb-5">
                        <div className="flex items-center mb-3">
                            <span className="h-8 w-8 flex justify-center items-center bg-primary-main border border-solid rounded-full border-primary-main text-white">
                                2
                            </span>
                            <span>
                                <div className="mx-3.5 text-primary-main text-base font-bold">Kedua</div>
                                <div className="mx-3.5 text-primary-main text-sm font-light">Dua-dua juga sayang ayah</div>
                            </span> 
                        </div>
                        <span className="h-14 w-px bg-primary-focused border border-primary-focused rounded-full ml-4 mr-0"></span>
                    </div>
                </li>
                <li>
                    <div className="grid items-center mb-5">
                        <div className="flex items-center mb-3">
                            <span className="h-8 w-8 flex justify-center items-center bg-primary-focused border border-solid rounded-full border-primary-focused text-white">
                                3
                            </span>
                            <span>
                                <div className="mx-3.5 text-primary-focused text-base font-normal">Ketiga</div>
                                <div className="mx-3.5 text-primary-focused text-sm font-light">Tiga-tiga sayang adik kaka</div>
                            </span>
                        </div>
                        <span className="h-14 w-px bg-primary-focused border border-primary-focused rounded-full ml-4 mr-0"></span>
                    </div>
                </li>
                <li>
                    <div className="grid items-center mb-5">
                        <div className="flex items-center mb-3">
                            <span className="h-8 w-8 flex justify-center items-center bg-primary-focused border border-solid rounded-full border-primary-focused text-white">
                                4
                            </span>
                            <span>
                                <div className="mx-3.5 text-primary-focused text-base font-normal">Keempat</div>
                                <div className="mx-3.5 text-primary-focused text-sm font-light">Empat-empat aku anak siapa ?</div>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>

        </div>

        
    );
};  
 

export { SimpleStep, StepCircle, StepMini, StepVertical } ;
