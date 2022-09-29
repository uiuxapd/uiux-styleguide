const stepMini = `
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
    </ul>`;

export default stepMini;