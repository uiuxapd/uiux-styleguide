import React from "react";
import CheckboxComponent from "../components/forms/CheckboxComponent";
import DatepickerComponent from "../components/forms/DatepickerComponent";
import InputComponent from "../components/forms/InputComponent";
import RadioComponent from "../components/forms/RadioComponent";
import SelectComponent from "../components/forms/SelectComponent";
import ToggleComponent from "../components/forms/ToggleComponent";

const Forms = () => {
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
          <InputComponent />
          <DatepickerComponent />
          <SelectComponent />
          <RadioComponent />
          <CheckboxComponent />
          <ToggleComponent />
        </div>
      </div>
      <div className="content-right"></div>
    </>
  );
};

export default Forms;
