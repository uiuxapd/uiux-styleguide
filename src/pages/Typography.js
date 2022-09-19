import React from "react";

const Typography = () => {

  return (
    <><div className="pb-4 mb-8 border-b border-slate-200 dark:border-slate-800">
          <h1 className="mb-4">Roboto</h1>
          <p className="leading-relaxed dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              suscipit magnam minima. Beatae deserunt perferendis aut ipsum labore,
              nihil laborum sint, vitae aspernatur dolor quibusdam velit fugit
              dolores cum, ad possimus maiores nulla? Ut, minus? Natus hic
              necessitatibus, sapiente consectetur nihil ea suscipit itaque facere
              recusandae architecto. Veniam, fuga nam?
          </p>
      </div>
        
        <div>
            <h2 className="mb-8">Roboto</h2>

            {/* Heading 1 */}
            <div className="px-4 mb-8 rounded-t-xl border border-slate-200 dark:border-slate-600 overflow-y-auto">
                <div className="pb-4 pt-4 border-b border-slate-200 dark:border-slate-800">
                    <p className="text-base font-normal text-slate-600">Font size: 36px / 2.25rem | Line height: 40px / 2.5rem</p>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 w-full">
                    <p className="text-4xl font-normal">Heading 1</p>
                    <p className="text-4xl font-medium">Heading 1</p>
                    <p className="text-4xl font-bold">Heading 1</p>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 w-full">
                    <p className="text-4xl font-normal">Regular</p>
                    <p className="text-4xl font-medium">Medium</p>
                    <p className="text-4xl font-bold">Bold</p>
                </div>
            </div>

            {/* Heading 2 */}
            <div className="px-4 mb-8 rounded-t-xl border border-slate-200 dark:border-slate-600 overflow-y-auto">
                <div className="pb-4 pt-4 border-b border-slate-200 dark:border-slate-800">
                    <p className="text-base font-normal text-slate-600">Font size: 30px / 1.875rem | Line height: 36px / 2.25rem</p>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 w-full">
                    <p className="text-3xl font-normal">Heading 2</p>
                    <p className="text-3xl font-medium">Heading 2</p>
                    <p className="text-3xl font-bold">Heading 2</p>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 w-full">
                    <p className="text-3xl font-normal">Regular</p>
                    <p className="text-3xl font-medium">Medium</p>
                    <p className="text-3xl font-bold">Bold</p>
                </div>
            </div>

            {/* Heading 3 */}
            <div className="px-4 mb-8 rounded-t-xl border border-slate-200 dark:border-slate-600 overflow-y-auto">
                <div className="pb-4 pt-4 border-b border-slate-200 dark:border-slate-800">
                    <p className="text-base font-normal text-slate-600">Font size: 24px / 1.5rem | Line height: 32px / 2rem</p>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 w-full">
                    <p className="text-2xl font-normal">Heading 3</p>
                    <p className="text-2xl font-medium">Heading 3</p>
                    <p className="text-2xl font-bold">Heading 3</p>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 w-full">
                    <p className="text-2xl font-normal">Regular</p>
                    <p className="text-2xl font-medium">Medium</p>
                    <p className="text-2xl font-bold">Bold</p>
                </div>
            </div>

            {/* Text-XL */}
            <div className="px-4 mb-8 rounded-t-xl border border-slate-200 dark:border-slate-600 overflow-y-auto">
                <div className="pb-4 pt-4 border-b border-slate-200 dark:border-slate-800">
                    <p className="text-base font-normal text-slate-600">Font size: 20px / 1.25rem | Line height: 28px / 1.75rem</p>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 w-full">
                    <p className="text-xl font-normal">Text XL</p>
                    <p className="text-xl font-medium">Text XL</p>
                    <p className="text-xl font-bold">Text XL</p>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 w-full">
                    <p className="text-xl font-normal">Regular</p>
                    <p className="text-xl font-medium">Medium</p>
                    <p className="text-xl font-bold">Bold</p>
                </div>
            </div>

            {/* Text-LG */}
            <div className="px-4 mb-8 rounded-t-xl border border-slate-200 dark:border-slate-600 overflow-y-auto">
                <div className="pb-4 pt-4 border-b border-slate-200 dark:border-slate-800">
                    <p className="text-base font-normal text-slate-600">Font size: 18px / 1.125rem | Line height: 28px / 1.75rem</p>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 w-full">
                    <p className="text-lg font-normal">Text LG</p>
                    <p className="text-lg font-medium">Text LG</p>
                    <p className="text-lg font-bold">Text LG</p>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 w-full">
                    <p className="text-lg font-normal">Regular</p>
                    <p className="text-lg font-medium">Medium</p>
                    <p className="text-lg font-bold">Bold</p>
                </div>
            </div>

            {/* Text Base */}
            <div className="px-4 mb-8 rounded-t-xl border border-slate-200 dark:border-slate-600 overflow-y-auto">
                <div className="pb-4 pt-4 border-b border-slate-200 dark:border-slate-800">
                    <p className="text-base font-normal text-slate-600">Font size: 16px / 1rem | Line height: 24px / 1.5rem</p>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 w-full">
                    <p className="text-base font-normal">Text Base</p>
                    <p className="text-base font-medium">Text Base</p>
                    <p className="text-base font-bold">Text Base</p>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 w-full">
                    <p className="text-base font-normal">Regular</p>
                    <p className="text-base font-medium">Medium</p>
                    <p className="text-base font-bold">Bold</p>
                </div>
            </div>

            {/* Text SM */}
            <div className="px-4 mb-8 rounded-t-xl border border-slate-200 dark:border-slate-600 overflow-y-auto">
                <div className="pb-4 pt-4 border-b border-slate-200 dark:border-slate-800">
                    <p className="text-base font-normal text-slate-600">Font size: 14px / 0.875rem | Line height: 20px / 1.25rem</p>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 w-full">
                    <p className="text-sm font-normal">Text SM</p>
                    <p className="text-sm font-medium">Text SM</p>
                    <p className="text-sm font-bold">Text SM</p>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 w-full">
                    <p className="text-sm font-normal">Regular</p>
                    <p className="text-sm font-medium">Medium</p>
                    <p className="text-sm font-bold">Bold</p>
                </div>
            </div>

            {/* Text XS */}
            <div className="px-4 mb-8 rounded-t-xl border border-slate-200 dark:border-slate-600 overflow-y-auto">
                <div className="pb-4 pt-4 border-b border-slate-200 dark:border-slate-800">
                    <p className="text-base font-normal text-slate-600">Font size: 12px / 0.75rem | Line height: 16px / 1rem</p>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 w-full">
                    <p className="text-xs font-normal">Text XS</p>
                    <p className="text-xs font-medium">Text XS</p>
                    <p className="text-xs font-bold">Text XS</p>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 w-full">
                    <p className="text-xs font-normal">Regular</p>
                    <p className="text-xs font-medium">Medium</p>
                    <p className="text-xs font-bold">Bold</p>
                </div>
            </div>

        </div></>
  )
}

export default Typography;
