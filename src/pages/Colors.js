import React from "react";

const Colors = () => {
  return (
    <>
      <div className="pb-4 mb-10 border-b border-neutral-200 dark:border-neutral-700">
        <h1 className="mb-4">Colors</h1>
        <p className="leading-relaxed dark:text-neutral-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          suscipit magnam minima. Beatae deserunt perferendis aut ipsum labore,
          nihil laborum sint, vitae aspernatur dolor quibusdam velit fugit
          dolores cum, ad possimus maiores nulla? Ut, minus? Natus hic
          necessitatibus, sapiente consectetur nihil ea suscipit itaque facere
          recusandae architecto. Veniam, fuga nam?
        </p>
      </div>

      <div>
        <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
          Neutral Colors
        </h4>
        <div className="grid flex-1 min-w-0 grid-cols-5 gap-y-3 gap-x-4 2xl:grid-cols-10 2xl:gap-x-2">
          <div className="space-y-1.5">
            <div className="w-full h-10 rounded-lg bg-neutral-50"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className="w-6 font-medium text-neutral-900-900 dark:text-neutral-400">50</div>
                <div className="text-neutral-900 dark:text-neutral-400">#F9FAFB</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="w-full h-10 rounded-lg bg-neutral-100"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className="w-6 font-medium text-neutral-900 dark:text-neutral-400">100</div>
                <div className="text-neutral-900 dark:text-neutral-400">#EFF1F5</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Colors;
