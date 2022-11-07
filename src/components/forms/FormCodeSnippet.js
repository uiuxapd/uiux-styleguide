const formInput = `
<!-- Input Base -->
<label htmlFor="fullname" class="capitalize text-slate-700">input base</label>
<input type="text" class="mt-2 block w-full py-2.5 px-4 text-base bg-white border border-slate-300
    hover:border-primary-main rounded-lg leading-tight focus:outline-none focus:bg-white focus:ring 
    focus:ring-primary-focused focus:border-primary-main">
</input>

<!-- Input Disable -->
<label htmlFor="fullname" class="capitalize text-slate-700">input disable</label>
<input type="text" class="mt-2 block w-full py-2.5 px-4 text-base text-slate-500 bg-slate-200 border
    border-slate-300 hover:border-slate-300 rounded-lg leading-tight focus:outline-none focus:bg-white 
    focus:ring focus:ring-primary-focused focus:border-primary-main" disabled >
</input>

<!-- Input Error -->
<label htmlFor="fullname" class="capitalize text-slate-700">input error</label>
<input type="text" class="mt-2 block w-full py-2.5 px-4 text-base text-error-main bg-error-surface border 
    border-error-border hover:border-error-main rounded-lg leading-tight focus:outline-none focus:bg-error-surface 
    focus:ring focus:ring-error-focused focus:border-error-main">
</input>
<span class="relative text-error-main text-xs italic">this input has an error</span>
`;

const formDatepicker = `
<!-- Datepicker Base -->
<label htmlFor="fullname" class="capitalize text-slate-700">datepicker base</label>
<input type="date" class="mt-2 block w-full py-2.5 px-4 text-base bg-white border border-slate-300 hover:border-primary-main 
    rounded-lg leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main">
</input>

<!-- Datepicker Disable -->
<label htmlFor="fullname" class="capitalize text-slate-700">datepicker disable</label>
<input type="date" class="mt-2 block w-full py-2.5 px-4 text-base text-slate-500 bg-slate-200 border border-slate-300 
    hover:border-slate-300 rounded-lg leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused 
    focus:border-primary-main" disabled >
</input>

<!--Datepicker Error -->
<label htmlFor="fullname" class="capitalize text-slate-700">datepicker error</label>
<input type="date" class="mt-2 block w-full py-2.5 px-4 text-base text-error-main bg-error-surface border border-error-border 
    hover:border-error-main rounded-lg leading-tight focus:outline-none focus:bg-error-surface focus:ring focus:ring-error-focused 
    focus:border-error-main">
</input>
`;

const formSelect = `
<!-- Select Base -->
<label htmlFor="selecterror" className="capitalize text-slate-700">select base</label>
<div class="mt-2 group relative">
    <span class="w-2 h-2 border-r-2 border-b-2 border-slate-400 group-hover:border-primary-main group-focus-within:border-primary-main absolute top-1/2 right-4 -translate-y-1.5 rotate-45 origin-center"></span>
    <select class="appearance-none block w-full py-2.5 px-4 text-base bg-white border border-slate-300 hover:border-primary-main rounded-lg leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main">
        ...
        <option value="value">Option</option>
        ...
    </select>
</div>

<!-- Select Disable -->
<label htmlFor="selecterror" className="capitalize text-slate-700">select disable</label>
<div class="mt-2 group relative">
    <span class="w-2 h-2 border-r-2 border-b-2 border-slate-400 group-focus-within:border-primary-main absolute top-1/2 right-4 -translate-y-1.5 rotate-45 origin-center"></span>
    <select class="appearance-none block w-full py-2.5 px-4 text-base text-slate-500 bg-slate-200 border border-slate-300 hover:border-slate-300 rounded-lg leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main" disabled >
        ...
        <option value="value">Option</option>
        ...
    </select>
</div>

<!-- Select Error -->
<label htmlFor="selecterror" className="capitalize text-slate-700">select error</label>
<div class="mt-2 group relative">
    <span class="w-2 h-2 border-r-2 border-b-2 border-error-border group-hover:border-error-main group-focus-within:border-error-main absolute top-1/2 right-4 -translate-y-1.5 rotate-45 origin-center"></span>
    <select class="appearance-none block w-full py-2.5 px-4 text-base text-error-main bg-error-surface border border-error-border hover:border-error-main rounded-lg leading-tight focus:outline-none focus:bg-error-surface focus:ring focus:ring-error-focused focus:border-error-main">
        ...
        <option value="value">Option</option>
        ...
    </select>
</div>
`;

const formRadio = `
<!-- Radio Button Base -->
<div class="flex items-center gap-2">
    <div class="relative w-5 h-5">
        <input type="radio" id="radio" class="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]"/>
        <div class="w-full h-full bg-white peer-checked:bg-blue-600 border-2 border-primary-border peer-hover:border-primary-main 
        rounded-full peer-hover:ring-2 peer-hover:ring-primary-focused before:invisible before:z-[2] before:absolute before:w-2 
        before:h-2 before:bg-white before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 
        before:-rotate-45 peer-checked:before:visible"></div>
    </div>
    <label htmlFor="radio" class="capitalize">
    radio base
    </label>
</div>

<!-- Radio Button Disable -->
<div class="flex items-center gap-2">
    <div class="relative w-5 h-5">
        <input type="radio" id="radiodisable" class="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" disabled Checked/>
        <div class="w-full h-full bg-white peer-checked:bg-slate-400 border-2 border-primary-border peer-hover:border-slate-400 
        rounded-full peer-hover:ring-2 peer-hover:ring-primary-focused before:invisible before:z-[2] before:absolute before:w-2 
        before:h-2 before:bg-white before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 
        before:-rotate-45 peer-checked:before:visible"></div>
    </div>
    <label htmlFor="radiodisable" class="capitalize">
    radio disable
    </label>
</div>

<!-- Radio Button Error -->
<div class="flex items-center gap-2">
    <div class="relative w-5 h-5">
        <input type="radio" id="radioerror" class="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" defaultChecked/>
        <div class="w-full h-full bg-white peer-checked:bg-error-main border-2 border-error-border peer-hover:border-error-border 
        rounded-full peer-hover:ring-2 peer-hover:ring-error-focused before:invisible before:z-[2] before:absolute before:w-2 
        before:h-2 before:bg-white before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 
        before:-rotate-45 peer-checked:before:visible"></div>
    </div>
    <label htmlFor="radioerror" class="capitalize text-error-main">
    radio error
    </label>
</div>
`;

const formCheckbox = `
<!-- Checkbox Base -->
 <div class="flex items-center gap-2">
    <div class="relative w-5 h-5">
      <input type="checkbox" id="checkbox" class="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" />
      <div class="w-full h-full bg-white peer-checked:bg-primary-main border-2 border-primary-border peer-hover:border-primary-main 
      rounded-md peer-hover:ring-2 peer-hover:ring-primary-focused before:invisible after:invisible before:absolute before:w-[2px] 
      before:h-1.5 before:bg-white before:rounded-full before:top-[55%] before:-translate-y-1/2 before:left-1/2 before:-translate-x-1 
      before:-rotate-45 before:z-[2] after:absolute after:w-[2px] after:h-[10px] after:bg-white after:rounded-full after:top-1/2 
      after:-translate-y-1/2 after:left-1/2 after:rotate-45 after:z-[2] peer-checked:before:visible peer-checked:after:visible"></div>
    </div>
    <label htmlFor="checkbox" class="capitalize">checkbox base</label>
 </div>
<!-- Checkbox Disable -->
<div class="flex items-center gap-2">
  <div class="relative w-5 h-5">
    <input type="checkbox" id="checkboxdisable" class="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" disabled checked/>
    <div class="w-full h-full bg-white peer-checked:bg-slate-400 border-2 border-primary-border peer-hover:border-slate-400 
    rounded-md peer-hover:ring-2 peer-hover:ring-primary-focused before:invisible after:invisible before:absolute before:w-[2px] 
    before:h-1.5 before:bg-white before:rounded-full before:top-[55%] before:-translate-y-1/2 before:left-1/2 before:-translate-x-1 
    before:-rotate-45 before:z-[2] after:absolute after:w-[2px] after:h-[10px] after:bg-white after:rounded-full after:top-1/2 
    after:-translate-y-1/2 after:left-1/2 after:rotate-45 after:z-[2] peer-checked:before:visible peer-checked:after:visible"></div>
  </div>
  <label htmlFor="checkboxdisable" class="capitalize">checkbox disable</label>
</div>
<!-- Checkbox Error -->
<div class="flex items-center gap-2">
  <div class="relative w-5 h-5">
    <input type="checkbox" id="checkboxerror" class="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" defaultChecked />
    <div class="w-full h-full bg-white peer-checked:bg-error-main border-2 border-error-border peer-hover:border-error-main 
    rounded-md peer-hover:ring-2 peer-hover:ring-error-focused before:invisible after:invisible before:absolute before:w-[2px] 
    before:h-1.5 before:bg-white before:rounded-full before:top-[55%] before:-translate-y-1/2 before:left-1/2 before:-translate-x-1 
    before:-rotate-45 before:z-[2] after:absolute after:w-[2px] after:h-[10px] after:bg-white after:rounded-full after:top-1/2 
    after:-translate-y-1/2 after:left-1/2 after:rotate-45 after:z-[2] peer-checked:before:visible peer-checked:after:visible"></div>
  </div>
  <label htmlFor="checkboxerror" class="capitalize text-error-main">checkbox error</label>
</div>
`;

const formToggle = `
<!-- Toggle Base -->
<div class="relative w-8 h-5">
    <input type="checkbox" class="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" />
    <div class="w-full h-full bg-white border-2 border-primary-border peer-hover:border-primary-main rounded-full peer-hover:ring-2 
        peer-hover:ring-primary-focused relative overflow-hidden after:absolute after:w-3.5 after:h-3.5 after:bg-blue-600 
        after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-0.5 after:rotate-45 after:z-[2] after:ease-in-out 
        after:duration-300 peer-checked:bg-blue-600 peer-checked:after:left-3 peer-checked:after:bg-white">
    </div>
</div>

<!-- Toggle Disable -->
<div class="relative w-8 h-5">
    <input type="checkbox" class="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" disabled/>
    <div class="w-full h-full bg-white border-2 border-primary-border peer-hover:border-slate-300 rounded-full peer-hover:ring-2 
        peer-hover:ring-primary-focused relative overflow-hidden after:absolute after:w-3.5 after:h-3.5 after:bg-slate-400 
        after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-0.5 after:rotate-45 after:z-[2] after:ease-in-out 
        after:duration-300 peer-checked:bg-slate-400 peer-checked:after:left-3 peer-checked:after:bg-white">
    </div>
</div>

<!-- Toggle Error -->
<div class="relative w-8 h-5">
    <input type="checkbox" class="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]"/>
    <div class="w-full h-full bg-white border-2 border-error-border peer-hover:border-error-main rounded-full peer-hover:ring-2 
        peer-hover:ring-error-focused relative overflow-hidden after:absolute after:w-3.5 after:h-3.5 after:bg-error-main 
        after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-0.5 after:rotate-45 after:z-[2] after:ease-in-out 
        after:duration-300 peer-checked:bg-error-main peer-checked:after:left-3 peer-checked:after:bg-error-border">
    </div>
</div>
`;

const formTextarea = `
<!-- Textarea Base -->
<label htmlFor="textarea" class="capitalize text-slate-700">textarea base</label>
<textarea rows="3" id="textarea" class="mt-2 block w-full py-2.5 px-4 text-base bg-white border border-slate-300 
    hover:border-primary-main rounded-lg leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused 
    focus:border-primary-main">
</textarea>

<!-- Textarea Disable -->
<label htmlFor="textarea" class="capitalize text-slate-700">textarea disable</label>
<textarea rows="3" id="textarea" class="mt-2 block w-full py-2.5 px-4 text-base text-slate-500 bg-slate-200 border 
    border-slate-300 hover:border-slate-300 rounded-lg leading-tight focus:outline-none focus:bg-white focus:ring 
    focus:ring-primary-focused focus:border-primary-main" disabled>
</textarea>

<!-- Textarea Error -->
<label htmlFor="textarea" class="capitalize text-slate-700">textarea error</label>
<textarea rows="3" id="textarea" class="mt-2 block w-full py-2.5 px-4 text-base text-error-main bg-error-surface border 
    border-error-border hover:border-error-main rounded-lg leading-tight focus:outline-none focus:bg-error-surface focus:ring 
    focus:ring-error-focused focus:border-error-main">
</textarea>
<span class="relative text-error-main text-xs italic">this input has an error</span>
`;

export {formInput, formDatepicker, formSelect, formRadio, formCheckbox, formToggle, formTextarea };