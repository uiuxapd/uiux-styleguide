import React from "react";

const FormGrid = () => {
    return(
        <div className="flex sm:justify-start lg:justify-center w-64 min-w-full overflow-x-auto">
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-1 mb-6 md:mb-0">
                        <label className="block tracking-wide mb-2 text-base font-medium text-gray-700">Label Left</label>
                        <input type="text" placeholder="Left" className="appearance-none block w-full py-2.5 px-4 bg-white border border-gray-400 rounded-xl leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main"/>
                    </div>
                    <div className="w-full md:w-1/2 px-1 mb-6 md:mb-0">
                        <label className="block tracking-wide mb-2 text-base font-medium text-gray-700">Label Right</label>
                        <input type="text" placeholder="Right" className="appearance-none block w-full py-2.5 px-3.5 bg-white border border-gray-400 rounded-xl leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-1">
                        <label className="block tracking-wide mb-2 text-base font-medium text-gray-700">Label</label>
                        <input type="text" placeholder="Placeholder" className="appearance-none block w-full py-2.5 px-4 bg-white border border-gray-400 rounded-xl leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-1">
                        <label className="block tracking-wide mb-2 text-base font-medium text-gray-700">Disable</label>
                        <input type="text" value="Read Only" className="appearance-none block w-full py-2.5 px-4 text-base font-medium text-gray-500 bg-gray-300 border border-gray-300 rounded-xl leading-tight focus:outline-none" disabled />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/3 px-1 mb-6 md:mb-0">
                        <label className="block tracking-wide mb-2 text-base font-medium text-gray-700">Label Left</label>
                        <input type="text" placeholder="Placeholder" className="appearance-none block w-full py-2.5 px-4 bg-white border border-gray-400 rounded-xl leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main"/>
                    </div>
                    <div className="w-full md:w-1/3 px-1 mb-6 md:mb-0">
                        <label className="block tracking-wide mb-2 text-base font-medium text-gray-700">Label Mid</label>
                        <input type="text" placeholder="Placeholder" className="appearance-none block w-full py-2.5 px-3.5 bg-white border border-gray-400 rounded-xl leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main"/>
                    </div>
                    <div className="w-full md:w-1/3 px-1 mb-6 md:mb-0">
                        <label className="block tracking-wide mb-2 text-base font-medium text-gray-700">Label End</label>
                        <input type="text" placeholder="Placeholder" className="appearance-none block w-full py-2.5 px-3.5 bg-white border border-gray-400 rounded-xl leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main"/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormGrid;