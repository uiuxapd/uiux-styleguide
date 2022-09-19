import { React, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BtnCopiedd, BtnCopyy } from "../components/BtnSnippet";

const Buttons = () => {
  const [isCopied, setIsCopied] = useState(false);

  const btnPrimary = `
<button class="bg-primary-500 text-white font-medium rounded-lg hover:bg-blue-600"></button>
<button class="py-2 px-4 bg-primary-500 text-white rounded-lg">Button Medium</button>
<button class="py-2.5 px-4 bg-primary-500 text-white rounded-lg">Button Large</button>
    `;

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <>
      <div className="pb-4 mb-8 border-b border-neutral-200 dark:border-neutral-800">
        <h1 className="mb-4">Buttons</h1>
        <p className="leading-relaxed dark:text-neutral-300">
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
        <div className="component-section">
          <button className="btn-primary small">Button Small</button>
          <button className="btn-primary medium">Button Medium</button>
          <button className="btn-primary large">Button Large</button>
        </div>
        <div className="mid-section">
            <div className="flex ">
                <span className="example">
                  Example Code
                </span>
            </div>
            <div className="flex justify-end">
              <CopyToClipboard text={btnPrimary} onCopy={onCopyText}>
                <div className="flex">
                  {isCopied ? <BtnCopiedd /> : <BtnCopyy />}
                </div>
              </CopyToClipboard>
            </div>
          </div>
        <div className="border border-neutral-200 dark:border-neutral-600">
          <div className="code-section">
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
