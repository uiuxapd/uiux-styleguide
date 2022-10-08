import React from "react";

const TooltipsCode = () => {
  return (
    <>
      <pre>
        <code lang="html">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col">
              <span className="comment">{"<!-- Top -->"}</span>
              <span class="token">
                <span class="punctuation">{"<"}</span>
                <span class="tag">div&nbsp;</span>
                <span class="attr-name">class</span>
                <span class="punctuation">=</span>
                <span class="punctuation">"</span>
                <span class="attr-value">relative inline-block</span>
                <span class="punctuation">"</span>
                <span class="punctuation">{">"}</span>
                <br />
                <span class="punctuation ml-4">{"<"}</span>
                <span class="tag">div&nbsp;</span>
                <span class="attr-name">class</span>
                <span class="punctuation">=</span>
                <span class="punctuation">"</span>
                <span class="attr-value mr-4">
                  absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2
                  whitespace-nowrap rounded-lg bg-neutral-900 py-2 px-4 text-xs
                  font-medium text-white transition-all delay-200 after:absolute
                  after:-bottom-1 after:left-1/2 after:-z-10 after:h-6 after:w-6
                  after:-translate-x-1/2 after:rotate-45 after:rounded
                  after:bg-neutral-900 dark:bg-neutral-200 dark:text-neutral-900
                  after:dark:bg-neutral-200
                </span>
                <span class="punctuation">"</span>
                <span class="punctuation">{">"}</span>
                <br />
                <span className="ml-8">Tooltip Text</span>
                <br />
                <span class="punctuation ml-4">{"<"}</span>
                <span class="punctuation">{"/"}</span>
                <span class="tag">div</span>
                <span class="punctuation">{">"}</span>
                <br />
                <span class="punctuation">{"<"}</span>
                <span class="punctuation">{"/"}</span>
                <span class="tag">div</span>
                <span class="punctuation">{">"}</span>
              </span>
            </div>

            <div class="flex flex-col">
              <span className="comment">{"<!-- Left -->"}</span>
              <span class="token">
                <span class="punctuation">{"<"}</span>
                <span class="tag">div&nbsp;</span>
                <span class="attr-name">class</span>
                <span class="punctuation">=</span>
                <span class="punctuation">"</span>
                <span class="attr-value">relative inline-block</span>
                <span class="punctuation">"</span>
                <span class="punctuation">{">"}</span>
                <br />
                <span class="punctuation ml-4">{"<"}</span>
                <span class="tag">div&nbsp;</span>
                <span class="attr-name">class</span>
                <span class="punctuation">=</span>
                <span class="punctuation">"</span>
                <span class="attr-value mr-4">
                  absolute right-full top-1/2 z-20 mr-3 -translate-y-1/2
                  whitespace-nowrap rounded-lg bg-neutral-900 py-2 px-4 text-xs
                  font-medium text-white transition-all delay-200 after:absolute
                  after:-right-1 after:top-1/2 after:-z-10 after:h-6 after:w-6
                  after:-translate-y-1/2 after:rotate-45 after:rounded
                  after:bg-neutral-900 dark:bg-neutral-200 dark:text-neutral-900
                  after:dark:bg-neutral-200
                </span>
                <span class="punctuation">"</span>
                <span class="punctuation">{">"}</span>
                <br />
                <span className="ml-8">Tooltip Text</span>
                <br />
                <span class="punctuation ml-4">{"<"}</span>
                <span class="punctuation">{"/"}</span>
                <span class="tag">div</span>
                <span class="punctuation">{">"}</span>
                <br />
                <span class="punctuation">{"<"}</span>
                <span class="punctuation">{"/"}</span>
                <span class="tag">div</span>
                <span class="punctuation">{">"}</span>
              </span>
            </div>

            <div class="flex flex-col">
              <span className="comment">{"<!-- Right -->"}</span>
              <span class="token">
                <span class="punctuation">{"<"}</span>
                <span class="tag">div&nbsp;</span>
                <span class="attr-name">class</span>
                <span class="punctuation">=</span>
                <span class="punctuation">"</span>
                <span class="attr-value">relative inline-block</span>
                <span class="punctuation">"</span>
                <span class="punctuation">{">"}</span>
                <br />
                <span class="punctuation ml-4">{"<"}</span>
                <span class="tag">div&nbsp;</span>
                <span class="attr-name">class</span>
                <span class="punctuation">=</span>
                <span class="punctuation">"</span>
                <span class="attr-value mr-4">
                  absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2
                  whitespace-nowrap rounded-lg bg-neutral-900 py-2 px-4 text-xs
                  font-medium text-white transition-all delay-200
                  before:absolute before:-left-1 before:top-1/2 before:-z-10
                  before:h-6 before:w-6 before:-translate-y-1/2 before:rotate-45
                  before:rounded before:bg-neutral-900 dark:bg-neutral-200
                  dark:text-neutral-900 before:dark:bg-neutral-200
                </span>
                <span class="punctuation">"</span>
                <span class="punctuation">{">"}</span>
                <br />
                <span className="ml-8">Tooltip Text</span>
                <br />
                <span class="punctuation ml-4">{"<"}</span>
                <span class="punctuation">{"/"}</span>
                <span class="tag">div</span>
                <span class="punctuation">{">"}</span>
                <br />
                <span class="punctuation">{"<"}</span>
                <span class="punctuation">{"/"}</span>
                <span class="tag">div</span>
                <span class="punctuation">{">"}</span>
              </span>
            </div>

            <div class="flex flex-col">
              <span className="comment">{"<!-- Bottom -->"}</span>
              <span class="token">
                <span class="punctuation">{"<"}</span>
                <span class="tag">div&nbsp;</span>
                <span class="attr-name">class</span>
                <span class="punctuation">=</span>
                <span class="punctuation">"</span>
                <span class="attr-value">relative inline-block</span>
                <span class="punctuation">"</span>
                <span class="punctuation">{">"}</span>
                <br />
                <span class="punctuation ml-4">{"<"}</span>
                <span class="tag">div&nbsp;</span>
                <span class="attr-name">class</span>
                <span class="punctuation">=</span>
                <span class="punctuation">"</span>
                <span class="attr-value mr-4">
                  absolute top-full left-1/2 z-20 mt-3 -translate-x-1/2
                  whitespace-nowrap rounded-lg bg-neutral-900 py-2 px-4 text-xs
                  font-medium text-white transition-all delay-200
                  before:absolute before:-top-1 before:left-1/2 before:-z-10
                  before:h-6 before:w-6 before:-translate-x-1/2 before:rotate-45
                  before:rounded before:bg-neutral-900 dark:bg-neutral-200
                  dark:text-neutral-900 before:dark:bg-neutral-200
                </span>
                <span class="punctuation">"</span>
                <span class="punctuation">{">"}</span>
                <br />
                <span className="ml-8">Tooltip Text</span>
                <br />
                <span class="punctuation ml-4">{"<"}</span>
                <span class="punctuation">{"/"}</span>
                <span class="tag">div</span>
                <span class="punctuation">{">"}</span>
                <br />
                <span class="punctuation">{"<"}</span>
                <span class="punctuation">{"/"}</span>
                <span class="tag">div</span>
                <span class="punctuation">{">"}</span>
              </span>
            </div>
          </div>
        </code>
      </pre>
    </>
  );
};

export default TooltipsCode;
