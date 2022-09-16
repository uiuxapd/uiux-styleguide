import React from "react";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

const Buttons = () => {
  return (
    <>
    <div className="pb-4 mb-8 border-b border-gray-200 dark:border-gray-800">
      <h1 className="mb-4">Buttons</h1>
      <p className="leading-relaxed dark:text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        suscipit magnam minima. Beatae deserunt perferendis aut ipsum labore,
        nihil laborum sint, vitae aspernatur dolor quibusdam velit fugit dolores
        cum, ad possimus maiores nulla? Ut, minus? Natus hic necessitatibus,
        sapiente consectetur nihil ea suscipit itaque facere recusandae
        architecto. Veniam, fuga nam?
      </p>
    </div>
    
    <div>
        <h2 className="mb-6">Default Button</h2>
        <div className="p-4 w-full bg-gray-50 rounded-t-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700">
            test
        </div>
        <div className="p-4 w-full border-x border-gray-200 dark:border-gray-600">
            <button type="button" className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Button</button>
        </div>
        <div className="code-wrapper">
            <div className="relative border-gray-200 border-y border-x code-syntax dark:border-gray-600">
                <div className="grid grid-cols-2 w-full bg-gray-50 rounded-t-md border-b border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                    <ul className="flex text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                        <li>
                            <span className="inline-block p-2 px-3 w-full text-gray-800 bg-gray-100 border-r border-gray-200 dark:text-white dark:bg-gray-800 dark:border-gray-600">HTML</span>
                        </li>
                    </ul>
                    <div className="flex justify-end">
                        <button type="button" className="flex items-center gap-2 py-2 px-3 text-xs font-medium text-gray-600 bg-gray-100 border-l border-gray-200 dark:border-gray-600 dark:text-gray-400 dark:bg-gray-800 hover:text-blue-700 dark:hover:text-white">
                            <ClipboardDocumentIcon className="w-4 h-4"/>
                            Copy
                        </button>
                    </div>
                </div>
                <div className="p-4 overflow-x-auto w-10 min-w-full">
                        <pre>
                            <code data-lang="html">
                                <span className="token text-blue-500 tag">
                                    <span className="token punctuation text-gray-500">{"<"}</span>
                                    <span>button</span>
                                    <span className="token attr-name"> class</span>
                                    <span className="token attr-value">
                                        <span className="token punctuation">=</span>
                                        <span className="token punctuation">"</span>
                                    </span>
                                    <span className="token punctuation">py-2 px-4 bg-blue-500 text-white rounded-lg</span>
                                    <span className="token attr-value">
                                        <span className="token punctuation">"</span>
                                        <span className="token punctuation">{">"}</span>
                                        <span className="token punctuation">{"<"}</span>
                                        <span className="token punctuation">{"/"}</span>
                                        <span>button</span>
                                        <span className="token punctuation">{">"}</span>
                                    </span>
                                </span>
                            </code>
                        </pre>
                        
                    </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Buttons;
