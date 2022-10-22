import React, {useRef} from "react";
import CheckboxComponent from "../components/forms/CheckboxComponent";
import DatepickerComponent from "../components/forms/DatepickerComponent";
import FormGroupComponent from "../components/forms/FormGroupComponent";
import InputComponent from "../components/forms/InputComponent";
import RadioComponent from "../components/forms/RadioComponent";
import SelectComponent from "../components/forms/SelectComponent";
import TextareaComponent from "../components/forms/TextareaComponent";
import ToggleComponent from "../components/forms/ToggleComponent";
import BtnIndex from "../components/BtnIndex";

const Forms = () => {
  const toInput = useRef(null),
    toDatepicker = useRef(null),
    toSelect = useRef(null),
    toRadio = useRef(null),
    toCheckbox = useRef(null),
    toToggle = useRef(null),
    toTextarea = useRef(null),
    toFormGroup = useRef(null);

  return (
    <>
      <div className="content-left">
        <div className="pb-4 mb-8 border-b border-neutral-200 dark:border-neutral-700">
          <h1 className="mb-4">Forms</h1>
          <p className="leading-relaxed dark:text-neutral-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            suscipit magnam minima. Beatae deserunt perferendis aut ipsum
            labore, nihil laborum sint, vitae aspernatur dolor quibusdam velit
            fugit dolores cum, ad possimus maiores nulla? Ut, minus? Natus hic
            necessitatibus, sapiente consectetur nihil ea suscipit itaque facere
            recusandae architecto. Veniam, fuga nam?
          </p>
        </div>
        <div className="flex flex-col gap-24">
          <InputComponent refer={toInput} />
          <DatepickerComponent refer={toDatepicker} />
          <SelectComponent refer={toSelect} />
          <RadioComponent refer={toRadio} />
          <CheckboxComponent refer={toCheckbox} />
          <ToggleComponent refer={toToggle} />
          <TextareaComponent refer={toTextarea} />
          <FormGroupComponent refer={toFormGroup} />
        </div>
      </div>
      <div className="content-right">
        <h6 onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="cursor-pointer" >
          <span className="text-primary-main">#</span> On this page
        </h6>
        <ul>
          <li><BtnIndex reference={toInput} label="input text" /></li>
          <li><BtnIndex reference={toDatepicker} label="datepicker" /></li>
          <li><BtnIndex reference={toSelect} label="select" /></li>
          <li><BtnIndex reference={toRadio} label="radio button" /></li>
          <li><BtnIndex reference={toCheckbox} label="checkbox" /></li>
          <li><BtnIndex reference={toToggle} label="toggle" /></li>
          <li><BtnIndex reference={toTextarea} label="textarea" /></li>
          <li><BtnIndex reference={toFormGroup} label="form group" /></li>
        </ul>
      </div>
    </>
  );
};

export default Forms;
