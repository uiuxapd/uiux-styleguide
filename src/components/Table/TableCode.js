import React from "react";

const BasicTableCode = () => {
    return (
        <div className="overflow">
            <pre>
                <code lang="html">
                    <div className="flex flex-col">
                        <span className="comment">{"<!-- Basic -->"}</span>
                        <span className="token">
                            <span className="punctuation">{"<"}</span>
                            <span className="tag">table&nbsp;</span>
                            <span className="attr-name">class</span>
                            <span className="punctuation">=</span>
                            <span className="punctuation">"</span>
                            <span className="attr-value">
                                w-max sm:w-full table-auto text-sm
                            </span>
                            <span className="punctuation">"</span>
                            <span className="punctuation">{">"}</span>
                            <br/>

                            <pre className="ml-5">
                                <span className="punctuation">{"<"}</span>
                                <span className="tag">thead&nbsp;</span>
                                <span className="attr-name">class</span>
                                <span className="punctuation">=</span>
                                <span className="punctuation">"</span>
                                <span className="attr-value">
                                    h-12 bg-primary-surface text-primary-main text-left
                                </span>
                                <span className="punctuation">"</span>
                                <span className="punctuation">{">"}</span>
                                <br/>
                                <pre className="ml-5">
                                    <span className="punctuation">{"<"}</span>
                                    <span className="tag">tr</span>
                                    <span className="punctuation">{">"}</span>
                                    <br />
                                    <pre className="ml-5">
                                        <span className="punctuation">{"<"}</span>
                                        <span className="tag">th&nbsp;</span>
                                        <span className="attr-name">class</span>
                                        <span className="punctuation">=</span>
                                        <span className="punctuation">"</span>
                                        <span className="attr-value">
                                            px-4 rounded-tl
                                        </span>
                                        <span className="punctuation">"</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="punctuation">Label</span>
                                        <span className="punctuation">{"<"}</span>
                                        <span className="punctuation">{"/"}</span>
                                        <span className="tag">th</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="comment ml-2">{"<-- First Column -->"}</span>
                                        <br />
                                        <span className="punctuation">{"<"}</span>
                                        <span className="tag">th&nbsp;</span>
                                        <span className="attr-name">class</span>
                                        <span className="punctuation">=</span>
                                        <span className="punctuation">"</span>
                                        <span className="attr-value">
                                            px-4
                                        </span>
                                        <span className="punctuation">"</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="punctuation">Label</span>
                                        <span className="punctuation">{"<"}</span>
                                        <span className="punctuation">{"/"}</span>
                                        <span className="tag">th</span>
                                        <span className="punctuation">{">"}</span>
                                        <br />
                                        <span>...</span>
                                        <br />
                                        <span className="punctuation">{"<"}</span>
                                        <span className="tag">th&nbsp;</span>
                                        <span className="attr-name">class</span>
                                        <span className="punctuation">=</span>
                                        <span className="punctuation">"</span>
                                        <span className="attr-value">
                                            px-4
                                        </span>
                                        <span className="punctuation">"</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="punctuation">Label</span>
                                        <span className="punctuation">{"<"}</span>
                                        <span className="punctuation">{"/"}</span>
                                        <span className="tag">th</span>
                                        <span className="punctuation">{">"}</span>
                                        <br />
                                        <span className="punctuation">{"<"}</span>
                                        <span className="tag">th&nbsp;</span>
                                        <span className="attr-name">class</span>
                                        <span className="punctuation">=</span>
                                        <span className="punctuation">"</span>
                                        <span className="attr-value">
                                            px-4 rounded-tr text-center
                                        </span>
                                        <span className="punctuation">"</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="punctuation">Label</span>
                                        <span className="punctuation">{"<"}</span>
                                        <span className="punctuation">{"/"}</span>
                                        <span className="tag">th</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="comment ml-2">{"<-- Action Last Column -->"}</span>
                                    </pre>
                                    <span className="punctuation">{"<"}</span>
                                    <span className="punctuation">{"/"}</span>
                                    <span className="tag">tr</span>
                                    <span className="punctuation">{">"}</span>
                                </pre>
                                <span className="punctuation">{"<"}</span>
                                <span className="punctuation">{"/"}</span>
                                <span className="tag">thead</span>
                                <span className="punctuation">{">"}</span>                                    
                            </pre>

                            <pre className="ml-5">
                                <span className="punctuation">{"<"}</span>
                                <span className="tag">tbody</span>
                                <span className="punctuation">{">"}</span>
                                <br/>
                                <pre className="ml-5">
                                    <span>...</span>
                                    <br />
                                    <span className="punctuation">{"<"}</span>
                                    <span className="tag">tr&nbsp;</span>
                                    <span className="attr-name">class</span>
                                    <span className="punctuation">=</span>
                                    <span className="punctuation">"</span>
                                    <span className="attr-value">
                                        h-10 bg-white border-b border-neutral-200
                                    </span>
                                    <span className="punctuation">"</span>
                                    <span className="punctuation">{">"}</span>
                                    <br />
                                    <pre className="ml-5">
                                        <span className="punctuation">{"<"}</span>
                                        <span className="tag">td&nbsp;</span>
                                        <span className="attr-name">class</span>
                                        <span className="punctuation">=</span>
                                        <span className="punctuation">"</span>
                                        <span className="attr-value">
                                            px-4 text-neutral-900
                                        </span>
                                        <span className="punctuation">"</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="punctuation">Data</span>
                                        <span className="punctuation">{"<"}</span>
                                        <span className="punctuation">{"/"}</span>
                                        <span className="tag">td</span>
                                        <span className="punctuation">{">"}</span>
                                        <br />
                                        <span className="punctuation">{"<"}</span>
                                        <span className="tag">td&nbsp;</span>
                                        <span className="attr-name">class</span>
                                        <span className="punctuation">=</span>
                                        <span className="punctuation">"</span>
                                        <span className="attr-value">
                                            px-4 text-neutral-900
                                        </span>
                                        <span className="punctuation">"</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="punctuation">Data</span>
                                        <span className="punctuation">{"<"}</span>
                                        <span className="punctuation">{"/"}</span>
                                        <span className="tag">td</span>
                                        <span className="punctuation">{">"}</span>
                                        <br />
                                        <span>...</span>
                                        <br />
                                        <span className="punctuation">{"<"}</span>
                                        <span className="tag">td&nbsp;</span>
                                        <span className="attr-name">class</span>
                                        <span className="punctuation">=</span>
                                        <span className="punctuation">"</span>
                                        <span className="attr-value">
                                            px-4 text-neutral-900
                                        </span>
                                        <span className="punctuation">"</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="punctuation">Data</span>
                                        <span className="punctuation">{"<"}</span>
                                        <span className="punctuation">{"/"}</span>
                                        <span className="tag">td</span>
                                        <span className="punctuation">{">"}</span>
                                        <br />
                                        <span className="punctuation">{"<"}</span>
                                        <span className="tag">td&nbsp;</span>
                                        <span className="attr-name">class</span>
                                        <span className="punctuation">=</span>
                                        <span className="punctuation">"</span>
                                        <span className="attr-value">
                                            px-4 text-neutral-900
                                        </span>
                                        <span className="tag">&nbsp;</span>
                                        <span className="punctuation">"</span>
                                        <span className="attr-name">align</span>
                                        <span className="punctuation">=</span>
                                        <span className="punctuation">"</span>
                                        <span className="attr-value">
                                            center
                                        </span>
                                        <span className="punctuation">"</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="punctuation">Data</span>
                                        <span className="punctuation">{"<"}</span>
                                        <span className="punctuation">{"/"}</span>
                                        <span className="tag">td</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="comment ml-2">{"<-- Action Last Column -->"}</span>
                                    </pre>
                                    <span className="punctuation">{"<"}</span>
                                    <span className="punctuation">{"/"}</span>
                                    <span className="tag">tr</span>
                                    <span className="punctuation">{">"}</span>
                                    <br />
                                    <span>...</span>
                                </pre>
                                <span className="punctuation">{"<"}</span>
                                <span className="punctuation">{"/"}</span>
                                <span className="tag">tbody</span>
                                <span className="punctuation">{">"}</span>                                    
                            </pre>


                            <span className="punctuation">{"<"}</span>
                            <span className="punctuation">{"/"}</span>
                            <span className="tag">table</span>
                            <span className="punctuation">{">"}</span>
                        </span>
                    </div>
                </code>
            </pre>
        </div>
    );
};

const ScrollingTableCode = () => {
    return (
        <div className="overflow">
            <pre>
                <code lang="html">
                    <div className="flex flex-col">
                        <span className="comment">{"<!-- Basic -->"}</span>
                        <span className="token">
                            <span className="punctuation">{"<"}</span>
                            <span className="tag">div&nbsp;</span>
                            <span className="attr-name">class</span>
                            <span className="punctuation">=</span>
                            <span className="punctuation">"</span>
                            <span className="attr-value">
                                w-[calc(100vw_-_90vw)] min-w-full overflow-x-auto rounded
                            </span>
                            <span className="punctuation">"</span>
                            <span className="punctuation">{">"}</span>
                            <br/>

                            <pre className="ml-5">
                            <span className="punctuation">{"<"}</span>
                            <span className="tag">table&nbsp;</span>
                            <span className="attr-name">class</span>
                            <span className="punctuation">=</span>
                            <span className="punctuation">"</span>
                            <span className="attr-value">
                                w-max text-sm
                            </span>
                            <span className="punctuation">"</span>
                            <span className="punctuation">{">"}</span>
                            <br/>

                            <pre className="ml-5">
                                <span className="punctuation">{"<"}</span>
                                <span className="tag">thead&nbsp;</span>
                                <span className="attr-name">class</span>
                                <span className="punctuation">=</span>
                                <span className="punctuation">"</span>
                                <span className="attr-value">
                                    h-12 bg-primary-surface text-primary-main text-left
                                </span>
                                <span className="punctuation">"</span>
                                <span className="punctuation">{">"}</span>
                                <br/>
                                <pre className="ml-5">
                                    <span className="punctuation">{"<"}</span>
                                    <span className="tag">tr</span>
                                    <span className="punctuation">{">"}</span>
                                    <br />
                                    <pre className="ml-5">
                                        <span className="punctuation">{"<"}</span>
                                        <span className="tag">th&nbsp;</span>
                                        <span className="attr-name">class</span>
                                        <span className="punctuation">=</span>
                                        <span className="punctuation">"</span>
                                        <span className="attr-value">
                                            px-4
                                        </span>
                                        <span className="punctuation">"</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="punctuation">Label</span>
                                        <span className="punctuation">{"<"}</span>
                                        <span className="punctuation">{"/"}</span>
                                        <span className="tag">th</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="comment ml-2">{"<-- First Column -->"}</span>
                                        <br />
                                        <span className="punctuation">{"<"}</span>
                                        <span className="tag">th&nbsp;</span>
                                        <span className="attr-name">class</span>
                                        <span className="punctuation">=</span>
                                        <span className="punctuation">"</span>
                                        <span className="attr-value">
                                            px-4
                                        </span>
                                        <span className="punctuation">"</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="punctuation">Label</span>
                                        <span className="punctuation">{"<"}</span>
                                        <span className="punctuation">{"/"}</span>
                                        <span className="tag">th</span>
                                        <span className="punctuation">{">"}</span>
                                        <br />
                                        <span>...</span>
                                        <br />
                                        <span className="punctuation">{"<"}</span>
                                        <span className="tag">th&nbsp;</span>
                                        <span className="attr-name">class</span>
                                        <span className="punctuation">=</span>
                                        <span className="punctuation">"</span>
                                        <span className="attr-value">
                                            px-4
                                        </span>
                                        <span className="punctuation">"</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="punctuation">Label</span>
                                        <span className="punctuation">{"<"}</span>
                                        <span className="punctuation">{"/"}</span>
                                        <span className="tag">th</span>
                                        <span className="punctuation">{">"}</span>
                                        <br />
                                        <span className="punctuation">{"<"}</span>
                                        <span className="tag">th&nbsp;</span>
                                        <span className="attr-name">class</span>
                                        <span className="punctuation">=</span>
                                        <span className="punctuation">"</span>
                                        <span className="attr-value">
                                            px-4 text-center
                                        </span>
                                        <span className="punctuation">"</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="punctuation">Label</span>
                                        <span className="punctuation">{"<"}</span>
                                        <span className="punctuation">{"/"}</span>
                                        <span className="tag">th</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="comment ml-2">{"<-- Action Last Column -->"}</span>
                                    </pre>
                                    <span className="punctuation">{"<"}</span>
                                    <span className="punctuation">{"/"}</span>
                                    <span className="tag">tr</span>
                                    <span className="punctuation">{">"}</span>
                                </pre>
                                <span className="punctuation">{"<"}</span>
                                <span className="punctuation">{"/"}</span>
                                <span className="tag">thead</span>
                                <span className="punctuation">{">"}</span>                                    
                            </pre>

                            <pre className="ml-5">
                                <span className="punctuation">{"<"}</span>
                                <span className="tag">tbody</span>
                                <span className="punctuation">{">"}</span>
                                <br/>
                                <pre className="ml-5">
                                    <span>...</span>
                                    <br />
                                    <span className="punctuation">{"<"}</span>
                                    <span className="tag">tr&nbsp;</span>
                                    <span className="attr-name">class</span>
                                    <span className="punctuation">=</span>
                                    <span className="punctuation">"</span>
                                    <span className="attr-value">
                                        h-10 bg-white border-b border-neutral-200
                                    </span>
                                    <span className="punctuation">"</span>
                                    <span className="punctuation">{">"}</span>
                                    <br />
                                    <pre className="ml-5">
                                        <span className="punctuation">{"<"}</span>
                                        <span className="tag">td&nbsp;</span>
                                        <span className="attr-name">class</span>
                                        <span className="punctuation">=</span>
                                        <span className="punctuation">"</span>
                                        <span className="attr-value">
                                            px-4 text-neutral-900
                                        </span>
                                        <span className="punctuation">"</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="punctuation">Data</span>
                                        <span className="punctuation">{"<"}</span>
                                        <span className="punctuation">{"/"}</span>
                                        <span className="tag">td</span>
                                        <span className="punctuation">{">"}</span>
                                        <br />
                                        <span className="punctuation">{"<"}</span>
                                        <span className="tag">td&nbsp;</span>
                                        <span className="attr-name">class</span>
                                        <span className="punctuation">=</span>
                                        <span className="punctuation">"</span>
                                        <span className="attr-value">
                                            px-4 text-neutral-900
                                        </span>
                                        <span className="punctuation">"</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="punctuation">Data</span>
                                        <span className="punctuation">{"<"}</span>
                                        <span className="punctuation">{"/"}</span>
                                        <span className="tag">td</span>
                                        <span className="punctuation">{">"}</span>
                                        <br />
                                        <span>...</span>
                                        <br />
                                        <span className="punctuation">{"<"}</span>
                                        <span className="tag">td&nbsp;</span>
                                        <span className="attr-name">class</span>
                                        <span className="punctuation">=</span>
                                        <span className="punctuation">"</span>
                                        <span className="attr-value">
                                            px-4 text-neutral-900
                                        </span>
                                        <span className="punctuation">"</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="punctuation">Data</span>
                                        <span className="punctuation">{"<"}</span>
                                        <span className="punctuation">{"/"}</span>
                                        <span className="tag">td</span>
                                        <span className="punctuation">{">"}</span>
                                        <br />
                                        <span className="punctuation">{"<"}</span>
                                        <span className="tag">td&nbsp;</span>
                                        <span className="attr-name">class</span>
                                        <span className="punctuation">=</span>
                                        <span className="punctuation">"</span>
                                        <span className="attr-value">
                                            px-4 text-neutral-900
                                        </span>
                                        <span className="tag">&nbsp;</span>
                                        <span className="punctuation">"</span>
                                        <span className="attr-name">align</span>
                                        <span className="punctuation">=</span>
                                        <span className="punctuation">"</span>
                                        <span className="attr-value">
                                            center
                                        </span>
                                        <span className="punctuation">"</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="punctuation">Data</span>
                                        <span className="punctuation">{"<"}</span>
                                        <span className="punctuation">{"/"}</span>
                                        <span className="tag">td</span>
                                        <span className="punctuation">{">"}</span>
                                        <span className="comment ml-2">{"<-- Action Last Column -->"}</span>
                                    </pre>
                                    <span className="punctuation">{"<"}</span>
                                    <span className="punctuation">{"/"}</span>
                                    <span className="tag">tr</span>
                                    <span className="punctuation">{">"}</span>
                                    <br />
                                    <span>...</span>
                                </pre>
                                <span className="punctuation">{"<"}</span>
                                <span className="punctuation">{"/"}</span>
                                <span className="tag">tbody</span>
                                <span className="punctuation">{">"}</span>                                    
                            </pre>


                            <span className="punctuation">{"<"}</span>
                            <span className="punctuation">{"/"}</span>
                            <span className="tag">table</span>
                            <span className="punctuation">{">"}</span>
                            </pre>

                            <span className="punctuation">{"<"}</span>
                            <span className="punctuation">{"/"}</span>
                            <span className="tag">div</span>
                            <span className="punctuation">{">"}</span>
                        </span>
                    </div>
                </code>
            </pre>
        </div>
    );
};

export { BasicTableCode, ScrollingTableCode };