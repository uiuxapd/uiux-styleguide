const simpleStep = `
    <ul class="flex items-center">
        <li>
            <div class="h-2 w-60 bg-primary-main border border-primary-main rounded-full mr-3.5 mb-4"></div>
            <label class="text-base font-bold text-primary-main">Step 1</label>
        </li>
        <li>
            <div class="h-2 w-60 bg-primary-main border border-primary-main rounded-full mr-3.5 mb-4"></div>
            <label class="text-base font-bold text-primary-main">Step 2</label>
        </li>
        <li>
            <div class="h-2 w-60 bg-primary-focused border border-primary-focused rounded-full mr-3.5 mb-4"></div>
            <label class="text-base font-normal text-primary-focused">Step 3</label>
        </li>
        <li>
            <div class="h-2 w-60 bg-primary-focused border border-primary-focused rounded-full mr-3.5 mb-4"></div>
            <label class="text-base font-normal text-primary-focused">Step 4</label>
        </li>
    </ul>
`;
const stepCircle = `
<ul class="flex items-center">
    <li>
        <div class="flex justify-center items-center mb-5">
            <div class="flex items-center">
                <span class="h-8 w-8 flex justify-center items-center bg-white border border-solid rounded-full border-primary-main text-primary-main">
                    <CheckIcon class="icon16"/>
                </span>
                <span class="mx-3.5 text-primary-main text-base font-normal">Pertama</span>
            </div>
            <span class="h-px w-40 bg-primary-main border border-primary-main rounded-full mr-3.5"></span>
        </div>
    </li>
    <li>
        <div class="flex justify-center items-center mb-5">
            <div class="flex items-center">
                <span class="h-8 w-8 flex justify-center items-center bg-primary-main border border-solid rounded-full border-primary-main text-white">
                    2
                </span>
                <span class="mx-3.5 text-primary-main text-base font-bold">Kedua</span>
            </div>
            <span class="h-px w-40 bg-primary-focused border border-primary-focused rounded-full mr-3.5"></span>
        </div>
    </li>
    <li>
        <div class="flex justify-center items-center mb-5">
            <div class="flex items-center">
                <span class="h-8 w-8 flex justify-center items-center bg-primary-focused border border-solid rounded-full border-primary-focused text-white">
                    3
                </span>
                <span class="mx-3.5 text-primary-focused text-base font-normal">Ketiga</span>
            </div>
            <span class="h-px w-40 bg-primary-focused border border-primary-focused rounded-full mr-3.5"></span>
        </div>
    </li>
    <li>
        <div class="flex justify-center items-center mb-5">
            <div class="flex items-center">
                <span class="h-8 w-8 flex justify-center items-center bg-primary-focused border border-solid rounded-full border-primary-focused text-white">
                    4
                </span>
                <span class="mx-3.5 text-primary-focused text-base font-normal">Keempat</span>
            </div>
        </div>
    </li>
</ul>
`;
const stepMini = `
    <ul class="flex justify-between items-center w-full">
        <li>
            <div class="flex justify-between mb-5 after:bg-primary-main after:h-px after:w-14 after:border after:border-primary-main after:rounded-full after:mr-5 after:mt-4 ">
                <span class="grid justify-items-center mr-5">
                    <div class="h-8 w-8 mb-5 flex justify-center items-center bg-white border border-solid rounded-full border-primary-main text-primary-main">
                    <CheckIcon class="icon16"/>
                    </div>
                    <div class="text-primary-main text-sm font-normal">Step 1</div>
                </span>
            </div>
        </li>
        <li>
            <div class="flex justify-between mb-5 after:bg-primary-focused after:h-px after:w-14 after:border after:border-primary-focused after:rounded-full after:mr-5 after:mt-4">
                <span class="grid justify-items-center mr-5">
                    <div class="h-8 w-8 mb-5 flex justify-center items-center bg-primary-main rounded-full text-white">2</div>
                    <div class="text-primary-main text-sm font-bold">Step 2</div>
                </span>
            </div>
        </li>
        <li>
            <div class="flex justify-between mb-5 after:bg-primary-focused after:h-px after:w-14 after:border after:border-primary-focused after:rounded-full after:mr-5 after:mt-4">
                <span class="grid justify-center mr-5">
                    <div class="h-8 w-8 mb-5 flex justify-center items-center bg-primary-focused border border-solid rounded-full border-primary-focused text-white">3</div>
                    <div class="text-neutral-400 text-sm font-normal">Step 3</div>
                </span>
            </div>
        </li>
        <li>
            <div class="flex justify-between items-center mb-5">
                <span class="grid justify-center mr-5">
                    <div class="h-8 w-8 mb-5 flex justify-center items-center bg-primary-focused border border-solid rounded-full border-primary-focused text-white">4</div>
                    <div class="text-neutral-400 text-sm font-normal">Step 4</div>
                </span>
            </div>
        </li>
    </ul>`;

const stepVertical = `
<ul class="items-center w-full">
    <li>
        <div class="grid items-center mb-5">
            <div class="flex items-center mb-3">
                <span class="h-8 w-8 flex justify-center items-center bg-white border border-solid rounded-full border-primary-main text-primary-main">
                    <CheckIcon class="icon16"/>
                </span>
                <span>
                    <div class="mx-3.5 text-primary-main text-base font-normal">Pertama</div>
                    <div class="mx-3.5 text-primary-focused text-sm font-light">Satu-satu aku sayang ibu</div>
                </span> 
            </div>
            <span class="h-14 w-px bg-primary-main border border-primary-main rounded-full ml-4 mr-0"></span>
        </div>
    </li>
    <li>
        <div class="grid items-center mb-5">
            <div class="flex items-center mb-3">
                <span class="h-8 w-8 flex justify-center items-center bg-primary-main border border-solid rounded-full border-primary-main text-white">
                    2
                </span>
                <span>
                    <div class="mx-3.5 text-primary-main text-base font-bold">Kedua</div>
                    <div class="mx-3.5 text-primary-main text-sm font-light">Dua-dua juga sayang ayah</div>
                </span> 
            </div>
            <span class="h-14 w-px bg-primary-focused border border-primary-focused rounded-full ml-4 mr-0"></span>
        </div>
    </li>
    <li>
        <div class="grid items-center mb-5">
            <div class="flex items-center mb-3">
                <span class="h-8 w-8 flex justify-center items-center bg-primary-focused border border-solid rounded-full border-primary-focused text-white">
                    3
                </span>
                <span>
                    <div class="mx-3.5 text-primary-focused text-base font-normal">Ketiga</div>
                    <div class="mx-3.5 text-primary-focused text-sm font-light">Tiga-tiga sayang adik kaka</div>
                </span>
            </div>
            <span class="h-14 w-px bg-primary-focused border border-primary-focused rounded-full ml-4 mr-0"></span>
        </div>
    </li>
    <li>
        <div class="grid items-center mb-5">
            <div class="flex items-center mb-3">
                <span class="h-8 w-8 flex justify-center items-center bg-primary-focused border border-solid rounded-full border-primary-focused text-white">
                    4
                </span>
                <span>
                    <div class="mx-3.5 text-primary-focused text-base font-normal">Keempat</div>
                    <div class="mx-3.5 text-primary-focused text-sm font-light">Empat-empat aku anak siapa ?</div>
                </span>
            </div>
        </div>
    </li>
</ul>`;

export { stepMini, simpleStep, stepCircle, stepVertical };