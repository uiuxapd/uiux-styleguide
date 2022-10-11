import React from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";

const FormGrid = () => {
    return(
        <div className="flex items-center justify-center w-full gap-3.5 overflow-x-auto p-4">
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-1 mb-6 md:mb-0">
                        <label className="block tracking-wide mb-2 text-base font-medium text-gray-700">Label</label>
                        <input type="text" placeholder="Left" className="appearance-none block w-full py-2.5 px-4 text-sm bg-white border border-gray-400 rounded-xl leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main"/>
                    </div>
                    <div className="w-full md:w-1/2 px-1 mb-6 md:mb-0">
                        <label className="block tracking-wide mb-2 text-base font-medium text-gray-700">Label</label>
                        <input type="text" placeholder="Right" className="appearance-none block w-full py-2.5 px-4 text-sm bg-white border border-gray-400 rounded-xl leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-1">
                        <label className="block tracking-wide mb-2 text-base font-medium text-gray-700">Label</label>
                        <input type="text" placeholder="Placeholder" className="appearance-none block w-full py-2.5 px-4 text-sm bg-white border border-gray-400 rounded-xl leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-1">
                        <label className="block tracking-wide mb-2 text-base font-medium text-gray-700">Disable</label>
                        <input type="text" value="Read Only" className="cursor-not-allowed appearance-none block w-full py-2.5 px-4 text-sm font-medium text-gray-500 bg-gray-300 border border-gray-300 rounded-xl leading-tight focus:outline-none" disabled />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-1">
                        <label className="block tracking-wide mb-2 text-base font-medium text-gray-700">Label</label>
                        <textarea rows="4" placeholder="Type Your Message..." className="appearance-none block w-full py-2.5 px-4 text-sm bg-white border border-gray-400 rounded-xl leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/3 px-1 mb-6 md:mb-0">
                        <label className="block tracking-wide mb-2 text-base font-medium text-gray-700">Label</label>
                        <input type="text" placeholder="Start" className="appearance-none block w-full py-2.5 px-4 text-sm bg-white border border-gray-400 rounded-xl leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main"/>
                    </div>
                    <div className="w-full md:w-1/3 px-1 mb-6 md:mb-0">
                        <label className="block tracking-wide mb-2 text-base font-medium text-gray-700">Label</label>
                        <input type="text" placeholder="Mid" className="appearance-none block w-full py-2.5 px-4 text-sm bg-white border border-gray-400 rounded-xl leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main"/>
                    </div>
                    <div className="w-full md:w-1/3 px-1 mb-6 md:mb-0">
                        <label className="block tracking-wide mb-2 text-base font-medium text-gray-700">Label</label>
                        <input type="text" placeholder="End" className="appearance-none block w-full py-2.5 px-4 text-sm bg-white border border-gray-400 rounded-xl leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main"/>
                    </div>
                </div>
                <div className="flex -mx-3 mb-6">
                    <div className="grid w-full md:w-1/3 px-1 mb-6 md:mb-0">
                        <label className="block tracking-wide mb-2 text-base font-medium text-gray-700">Label</label>
                        <div className="flex items-center">
                            <div className="relative w-5 h-5">
                            <input type="checkbox" name="checkbox" id="" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]"/>
                            <div className="w-full h-full bg-white peer-checked:bg-primary-main border border-gray-400 rounded-md peer-hover:border-primary-main peer-hover:ring-2 peer-hover:ring-primary-focused before:invisible after:invisible 
                                        before:absolute before:w-0.5 before:h-1.5 before:bg-white before:rounded-full before:top-[55%] before:-translate-y-1/2 before:left-[59%] before:-translate-x-[6px] before:-rotate-45 before:z-[2] 
                                        after:absolute after:w-0.5 after:h-2.5 after:bg-white after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-[55%] after:rotate-45 after:z-[2] 
                                        peer-checked:before:visible peer-checked:after:visible"></div>
                            </div>
                            <label for="checkbox" className="block ml-2 tracking-wide text-sm font-normal text-gray-700">Checkbox</label>
                        </div>
                    </div>
                    <div className="grid w-full md:w-1/3 px-1 mb-6 md:mb-0">
                        <label className="block tracking-wide mb-2 text-base font-medium text-gray-700">Label</label>
                        <div className="flex items-center">
                            <div className="relative w-5 h-5">
                            <input type="checkbox" name="checkbox" id="" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]"/>
                            <div className="w-full h-full bg-white peer-checked:bg-primary-main border border-gray-400 rounded-md peer-hover:border-primary-main peer-hover:ring-2 peer-hover:ring-primary-focused before:invisible after:invisible 
                                        before:absolute before:w-0.5 before:h-1.5 before:bg-white before:rounded-full before:top-[55%] before:-translate-y-1/2 before:left-[59%] before:-translate-x-[6px] before:-rotate-45 before:z-[2] 
                                        after:absolute after:w-0.5 after:h-2.5 after:bg-white after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-[55%] after:rotate-45 after:z-[2] 
                                        peer-checked:before:visible peer-checked:after:visible"></div>
                            </div>
                            <label for="checkbox" className="block ml-2 tracking-wide text-sm font-normal text-gray-700">Checkbox</label>
                        </div>
                    </div>
                    <div className="grid w-full md:w-1/3 px-1 mb-6 md:mb-0">
                        <label className="block tracking-wide mb-2 text-base font-medium text-gray-700">Label</label>
                        <div className="flex items-center">
                            <div className="relative w-5 h-5">
                                <input type="checkbox" name="checkbox" id="" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]"/>
                                <div className="w-full h-full bg-white peer-checked:bg-primary-main border border-gray-400 rounded-md peer-hover:border-primary-main peer-hover:ring-2 peer-hover:ring-primary-focused before:invisible after:invisible 
                                        before:absolute before:w-0.5 before:h-1.5 before:bg-white before:rounded-full before:top-[55%] before:-translate-y-1/2 before:left-[59%] before:-translate-x-[6px] before:-rotate-45 before:z-[2] 
                                        after:absolute after:w-0.5 after:h-2.5 after:bg-white after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-[55%] after:rotate-45 after:z-[2] 
                                        peer-checked:before:visible peer-checked:after:visible"></div>
                            </div>
                            <label for="checkbox" className="block ml-2 tracking-wide text-sm font-normal text-gray-700">Checkbox</label>
                        </div>
                    </div>
                </div>
                <div className="flex -mx-3 mb-6">
                    <div className="grid w-full md:w-1/3 px-1 mb-6 md:mb-0">
                        <label className="block tracking-wide mb-3 text-base font-medium text-gray-700">Label </label>
                        <div className="flex items-center"> 
                            <div className="relative w-5 h-5">
                                <input type="radio" name="radio" id="" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" />
                                <div className="w-full h-full bg-white rounded-full border border-gray-400 peer-hover:ring-2 peer-hover:ring-primary-focused peer-hover:border-primary-main peer-checked:bg-primary-main after:invisible
                                                after:w-2.5 after:h-2.5 after:bg-white after:rounded-full after:absolute after:left-[50%] after:-translate-x-[50%] after:top-[50%] after:-translate-y-[50%] after:z-[2] peer-checked:after:visible
                                "></div>
                            </div>
                            <label for="radio" className="block ml-2 tracking-wide text-sm font-normal text-gray-700">Radio</label>
                        </div>
                    </div>
                    <div className="grid w-full md:w-1/3 px-1 mb-6 md:mb-0">
                        <label className="block tracking-wide mb-3 text-base font-medium text-gray-700">Label </label>
                        <div className="flex items-center"> 
                            <div className="relative w-5 h-5">
                                <input type="radio" name="radio" id="" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" />
                                <div className="w-full h-full bg-white rounded-full border border-gray-400 peer-hover:ring-2 peer-hover:ring-primary-focused peer-hover:border-primary-main peer-checked:bg-primary-main after:invisible
                                                after:w-2.5 after:h-2.5 after:bg-white after:rounded-full after:absolute after:left-[50%] after:-translate-y-[50%] after:top-[50%] after:-translate-x-[50%] after:z-[2] peer-checked:after:visible
                                "></div>
                            </div>
                            <label for="radio" className="block ml-2 tracking-wide text-sm font-normal text-gray-700">Radio</label>
                        </div>
                    </div>
                    <div className="grid w-full md:w-1/3 px-1 mb-6 md:mb-0">
                        <label className="block tracking-wide mb-3 text-base font-medium text-gray-700">Label </label>
                        <div className="flex items-center"> 
                            <div className="relative w-5 h-5">
                                <input type="radio" name="radio" id="" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" />
                                <div className="w-full h-full bg-white rounded-full border border-gray-400 peer-hover:ring-2 peer-hover:ring-primary-focused peer-hover:border-primary-main peer-checked:bg-primary-main after:invisible
                                                after:w-2.5 after:h-2.5 after:bg-white after:rounded-full after:absolute after:left-[50%] after:-translate-y-[50%] after:top-[50%] after:-translate-x-[50%] after:z-[2] peer-checked:after:visible
                                "></div>
                            </div>
                            <label for="radio" className="block ml-2 tracking-wide text-sm font-normal text-gray-700">Radio</label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <label className="block tracking-wide mb-2 text-base font-medium text-gray-700">Upload</label>
                    <div class="flex justify-center w-full rounded-xl border-2 border-dashed border-gray-400 px-6 pt-5 pb-6">
                        <div className="grid justify-items-center space-y-1 text-center">
                            <PhotoIcon className="icon16 text-gray-400 w-16 h-14" />
                            <div className="flex items-center text-sm text-gray-600">
                                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-primary-main focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-focused focus-within:ring-offset-2">
                                    <span className="px-1">Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormGrid;