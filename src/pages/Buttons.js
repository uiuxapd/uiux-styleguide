import { React, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { btnDisable, btnError, btnOutlined, btnPrimary, btnSecondary, btnText } from "../code-snippets/Buttons";
import { BtnCopiedd, BtnCopyy } from "../components/BtnSnippet";

const Buttons = () => {
  const [isCopied, setIsCopied] = useState(false);
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
      <h3>Button Primary</h3>
      <div className="my-8">
        <div className="component-section">
          <div className="component-block">
            <button className="btn-primary small">Small</button>
            <button className="btn-primary medium">Medium</button>
            <button className="btn-primary large">Large</button>
          </div>
          <div className="component-block">
            <button className="btn-primary small pills">Small</button>
            <button className="btn-primary medium pills">Medium</button>
            <button className="btn-primary large pills">Large</button>
          </div>
        </div>
        <div className="mid-section">
          <div className="flex ">
            <span className="example">Example Code</span>
          </div>
          <div className="flex justify-end">
            <CopyToClipboard text={btnPrimary} onCopy={onCopyText}>
              <div className="flex">
                {isCopied ? <BtnCopiedd /> : <BtnCopyy />}
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-900">
          <div className="overflow">
            <pre className="code-section">
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
                      bg-primary-500 text-white text-sm font-medium py-2 px-4 rounded-lg shadow transition-all hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Small
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
                      bg-primary-500 text-white text-base font-medium py-2 px-4 rounded-lg shadow transition-all hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Medium
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
                      bg-primary-500 text-white text-base font-medium py-2.5 px-4 rounded-lg shadow transition-all hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Large
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation mr-4">{">"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Pill Small 36px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                      bg-primary-500 text-white text-sm font-medium py-2 px-4 rounded-full shadow transition-all hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Small
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation">{">"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Pill Medium 40px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                      bg-primary-500 text-white text-base font-medium py-2 px-4 rounded-full shadow transition-all hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Medium
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation">{">"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Pill Large 44px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                      bg-primary-500 text-white text-base font-medium py-2.5 px-4 rounded-full shadow transition-all hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Large
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation mr-4">{">"}</span>
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
        <h3>Button Secondary</h3>
      <div className="my-8">
        <div className="component-section">
          <div className="component-block">
            <button className="btn-secondary small">Small</button>
            <button className="btn-secondary medium">Medium</button>
            <button className="btn-secondary large">Large</button>
          </div>
          <div className="component-block">
            <button className="btn-secondary small pills">Small</button>
            <button className="btn-secondary medium pills">
              Medium
            </button>
            <button className="btn-secondary large pills">Large</button>
          </div>
        </div>
        <div className="mid-section">
          <div className="flex ">
            <span className="example">Example Code</span>
          </div>
          <div className="flex justify-end">
            <CopyToClipboard text={btnSecondary} onCopy={onCopyText}>
              <div className="flex">
                {isCopied ? <BtnCopiedd /> : <BtnCopyy />}
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-600">
          <div className="overflow">
            <pre className="code-section">
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
                      bg-neutral-50 text-primary-500 text-sm font-medium py-2 px-4 rounded-lg shadow transition-all hover:bg-neutral-100/70 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Small
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
                      bg-neutral-50 text-primary-500 text-base font-medium py-2 px-4 rounded-lg shadow transition-all hover:bg-neutral-100/70 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Medium
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
                      bg-neutral-50 text-primary-500 text-base font-medium py-2.5 px-4 rounded-lg shadow transition-all hover:bg-neutral-100/70 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Large
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation">{">"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Pill Small 36px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                      bg-neutral-50 text-primary-500 text-sm font-medium py-2 px-4 rounded-full shadow transition-all hover:bg-neutral-100/70 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Small
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation">{">"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Pill Medium 40px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                      bg-neutral-50 text-primary-500 text-base font-medium py-2 px-4 rounded-full shadow transition-all hover:bg-neutral-100/70 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Medium
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation">{">"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Pill Large 44px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                      bg-neutral-50 text-primary-500 text-base font-medium py-2.5 px-4 rounded-full shadow transition-all hover:bg-neutral-100/70 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Large
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation mr-4">{">"}</span>
                    </span>
                  </div>
                </div>
              </code>
            </pre>
          </div>
        </div>
      </div>
      {/* Button Secondary End */}

      {/* Button Oulined Start */}
        <h3>Button Outlined</h3>
      <div className="my-8">
        <div className="component-section">
          <div className="component-block">
            <button className="btn-outlined small">Small</button>
            <button className="btn-outlined medium">Medium</button>
            <button className="btn-outlined large">Large</button>
          </div>
          <div className="component-block">
            <button className="btn-outlined small pills">Small</button>
            <button className="btn-outlined medium pills">Medium</button>
            <button className="btn-outlined large pills">Large</button>
          </div>
        </div>
        <div className="mid-section">
          <div className="flex ">
            <span className="example">Example Code</span>
          </div>
          <div className="flex justify-end">
            <CopyToClipboard text={btnOutlined} onCopy={onCopyText}>
              <div className="flex">
                {isCopied ? <BtnCopiedd /> : <BtnCopyy />}
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-600">
          <div className="overflow">
            <pre className="code-section">
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
                      bg-white border border-primary-500 text-primary-500 text-sm font-medium py-2 px-4 rounded-lg shadow transition-all hover:bg-primary-50/30 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Small
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
                      bg-white border border-primary-500 text-primary-500 text-base font-medium py-2 px-4 rounded-lg shadow transition-all hover:bg-primary-50/30 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Medium
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
                      bg-white border border-primary-500 text-primary-500 text-base font-medium py-2.5 px-4 rounded-lg shadow transition-all hover:bg-primary-50/30 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Large
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation">{">"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Pill Small 36px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                      bg-white border border-primary-500 text-primary-500 text-sm font-medium py-2 px-4 rounded-full shadow transition-all hover:bg-primary-50/30 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Small
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation">{">"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Pill Medium 40px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                      bg-white border border-primary-500 text-primary-500 text-base font-medium py-2 px-4 rounded-full shadow transition-all hover:bg-primary-50/30 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Medium
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation">{">"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Pill Large 44px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                      bg-white border border-primary-500 text-primary-500 text-base font-medium py-2.5 px-4 rounded-full shadow transition-all hover:bg-primary-50/30 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Large
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation mr-4">{">"}</span>
                    </span>
                  </div>
                </div>
              </code>
            </pre>
          </div>
        </div>
      </div>
      {/* Button Oulined End */}

      {/* Button Error Start */}
        <h3>Button Error State</h3>
      <div className="my-8">
        <div className="component-section">
          <div className="component-block">
            <button className="btn-error small">Small</button>
            <button className="btn-error medium">Medium</button>
            <button className="btn-error large">Large</button>
          </div>
          <div className="component-block">
            <button className="btn-error small pills">Small</button>
            <button className="btn-error medium pills">Medium</button>
            <button className="btn-error large pills">Large</button>
          </div>
        </div>
        <div className="mid-section">
          <div className="flex ">
            <span className="example">Example Code</span>
          </div>
          <div className="flex justify-end">
            <CopyToClipboard text={btnError} onCopy={onCopyText}>
              <div className="flex">
                {isCopied ? <BtnCopiedd /> : <BtnCopyy />}
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-600">
          <div className="overflow">
            <pre className="code-section">
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
                      bg-error-500 text-white text-sm font-medium py-2 px-4 rounded-lg shadow transition-all hover:bg-error-600 focus:ring-4 focus:ring-error-100 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Small
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
                      bg-error-500 text-white text-base font-medium py-2 px-4 rounded-lg shadow transition-all hover:bg-error-600 focus:ring-4 focus:ring-error-100 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Medium
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
                      bg-error-500 text-white text-base font-medium py-2.5 px-4 rounded-lg shadow transition-all hover:bg-error-600 focus:ring-4 focus:ring-error-100 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Large
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation">{">"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Pill Small 36px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                      bg-error-500 text-white text-sm font-medium py-2 px-4 rounded-full shadow transition-all hover:bg-error-600 focus:ring-4 focus:ring-error-100 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Small
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation">{">"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Pill Medium 40px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                      bg-error-500 text-white text-base font-medium py-2 px-4 rounded-full shadow transition-all hover:bg-error-600 focus:ring-4 focus:ring-error-100 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Medium
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation">{">"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Pill Large 44px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                      bg-error-500 text-white text-base font-medium py-2.5 px-4 rounded-full shadow transition-all hover:bg-error-600 focus:ring-4 focus:ring-error-100 focus:shadow-none focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Large
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
      {/* Button Error End */}

      {/* Button Text Start */}
        <h3>Button Text Only</h3>
      <div className="my-8">
        <div className="component-section">
          <div className="component-block">
            <button className="btn-text small">Small</button>
            <button className="btn-text medium">Medium</button>
            <button className="btn-text large">Large</button>
          </div>
          <div className="component-block">
            <button className="btn-text small pills">Small</button>
            <button className="btn-text medium pills">Medium</button>
            <button className="btn-text large pills">Large</button>
          </div>
        </div>
        <div className="mid-section">
          <div className="flex ">
            <span className="example">Example Code</span>
          </div>
          <div className="flex justify-end">
            <CopyToClipboard text={btnText} onCopy={onCopyText}>
              <div className="flex">
                {isCopied ? <BtnCopiedd /> : <BtnCopyy />}
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-600">
          <div className="overflow">
            <pre className="code-section">
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
                      text-primary-500 text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Small
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
                      text-primary-500 text-base font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Medium
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
                      text-primary-500 text-base font-medium py-2.5 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Large
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation">{">"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Pill Small 36px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                      text-primary-500 text-sm font-medium py-2 px-4 rounded-full transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Small
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation">{">"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Pill Medium 40px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                      text-primary-500 text-base font-medium py-2 px-4 rounded-full transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Medium
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation">{">"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Pill Large 44px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                      text-primary-500 text-base font-medium py-2.5 px-4 rounded-full transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Large
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation mr-4">{">"}</span>
                    </span>
                  </div>
                </div>
              </code>
            </pre>
          </div>
        </div>
      </div>
      {/* Button Text End */}

      {/* Button Disable Start */}
        <h3>Button Disable</h3>
      <div className="my-8">
        <div className="component-section">
          <div className="component-block">
            <button className="btn-disable small">Small</button>
            <button className="btn-disable medium">Medium</button>
            <button className="btn-disable large">Large</button>
          </div>
          <div className="component-block">
            <button className="btn-disable small pills">Small</button>
            <button className="btn-disable medium pills">Medium</button>
            <button className="btn-disable large pills">Large</button>
          </div>
        </div>

        <div className="mid-section">
          <div className="flex ">
            <span className="example">Example Code</span>
          </div>
          <div className="flex justify-end">
            <CopyToClipboard text={btnDisable} onCopy={onCopyText}>
              <div className="flex">
                {isCopied ? <BtnCopiedd /> : <BtnCopyy />}
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-600">
          <div className="overflow">
            <pre className="code-section">
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
                      bg-neutral-200 text-neutral-500 border border-neutral-300 text-sm font-medium py-2 px-4 rounded-lg cursor-not-allowed
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Small
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
                      bg-neutral-200 text-neutral-500 border border-neutral-300 text-base font-medium py-2 px-4 rounded-lg cursor-not-allowed
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Medium
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
                      bg-neutral-200 text-neutral-500 border border-neutral-300 text-base font-medium py-2.5 px-4 rounded-lg cursor-not-allowed
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Large
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation">{">"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Pill Small 36px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                      bg-neutral-200 text-neutral-500 border border-neutral-300 text-sm font-medium py-2 px-4 rounded-full cursor-not-allowed
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Small
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation">{">"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Pill Medium 40px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                      bg-neutral-200 text-neutral-500 border border-neutral-300 text-base font-medium py-2 px-4 rounded-full cursor-not-allowed
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Medium
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation">{">"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="comment">
                      {"<!-- Button Pill Large 44px -->"}
                    </span>
                    <span className="token">
                      <span className="punctuation">{"<"}</span>
                      <span className="tag">button&nbsp;</span>
                      <span className="attr-name">class</span>
                      <span className="punctuation">=</span>
                      <span className="punctuation">"</span>
                      <span className="attr-value">
                      bg-neutral-200 text-neutral-500 border border-neutral-300 text-base font-medium py-2.5 px-4 rounded-full cursor-not-allowed
                      </span>
                      <span className="punctuation">"</span>
                      <span className="punctuation">{">"}</span>
                      Large
                      <span className="punctuation">{"<"}</span>
                      <span className="punctuation">{"/"}</span>
                      <span className="tag">button</span>
                      <span className="punctuation mr-4">{">"}</span>
                    </span>
                  </div>
                </div>
              </code>
            </pre>
          </div>
        </div>
      </div>
      {/* Button Disable End */}
    </>
  );
};

export default Buttons;
