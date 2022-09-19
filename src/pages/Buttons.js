import { React, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BtnCopiedd, BtnCopyy } from "../components/BtnSnippet";

const Buttons = () => {
  const [isCopied, setIsCopied] = useState(false);

  const btnPrimary = `
<button class="bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600"></button>
<button class="py-2 px-4 bg-blue-500 text-white rounded-lg">Button Medium</button>
<button class="py-2.5 px-4 bg-blue-500 text-white rounded-lg">Button Large</button>
    `;

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <>
      <div className="pb-4 mb-8 border-b border-slate-200 dark:border-slate-800">
        <h1 className="mb-4">Buttons</h1>
        <p className="leading-relaxed dark:text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          suscipit magnam minima. Beatae deserunt perferendis aut ipsum labore,
          nihil laborum sint, vitae aspernatur dolor quibusdam velit fugit
          dolores cum, ad possimus maiores nulla? Ut, minus? Natus hic
          necessitatibus, sapiente consectetur nihil ea suscipit itaque facere
          recusandae architecto. Veniam, fuga nam?
        </p>
      </div>

{/* Button Primary Start */}
      <div>
        <h2 className="mb-8">Button Primary</h2>
        <div className="flex items-center flex-wrap md:justify-center gap-4 p-4 w-full rounded-t-xl border border-slate-200 dark:border-slate-600 overflow-y-auto">
          <button className="btn-primary small">Button Small</button>
          <button className="btn-primary medium">Button Medium</button>
          <button className="btn-primary large">Button Large</button>
        </div>
        <div className="grid grid-cols-2 w-full border-x border-slate-200 dark:border-slate-600">
            <ul className="flex text-sm font-medium text-center text-slate-500 dark:text-slate-400">
              <li>
                <span className="inline-block p-2 px-3 w-full text-slate-800 bg-slate-50 border-r border-slate-200 dark:text-white dark:bg-slate-800 dark:border-slate-600">
                  Example Code
                </span>
              </li>
            </ul>
            <div className="flex justify-end">
              <CopyToClipboard text={btnPrimary} onCopy={onCopyText}>
                <div className="flex">
                  {isCopied ? <BtnCopiedd /> : <BtnCopyy />}
                </div>
              </CopyToClipboard>
            </div>
          </div>
        <div className="border border-slate-200 dark:border-slate-600">
          <div className="p-4 overflow-x-auto w-64 min-w-full text-slate-600 bg-slate-50 dark:text-slate-400 dark:bg-slate-800">
            <pre>
              <code data-lang="html">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Small 36px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                        py-2 px-4 text-sm bg-blue-500 text-white rounded-lg
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Button Small
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation">{">"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Medium 40px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                        py-2 px-4 bg-blue-500 text-white rounded-lg
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Button Medium
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation">{">"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Large 44px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                        py-2.5 px-4 bg-blue-500 text-white rounded-lg
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Button Large
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation">{">"}</span>
                    </span>
                  </div>
                </div>
              </code>
            </pre>
          </div>
        </div>
      </div>
      {/* Button Primary End */}

      {/* Button Secondary Start */}
      {/* Button Secondary End */}
    </>
  );
};

export default Buttons;
