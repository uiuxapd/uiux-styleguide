import React from "react";

const SingleRangeCode = () => {
    return (
        <div className="overflow">
            <pre>
                <code lang="html">
                    <div className="flex flex-col">
                        <span className="comment">{"<!-- Range -->"}</span>
                        <span className="token">
                            <span className="punctuation">{"<"}</span>
                            <span className="tag">div&nbsp;</span>
                            <span className="attr-name">class</span>
                            <span className="punctuation">=</span>
                            <span className="punctuation">"</span>
                            <span className="attr-value">
                                flex justify-between items-center
                            </span>
                            <span className="punctuation">"</span>
                            <span className="punctuation">{">"}</span>
                            <br/>
                                <pre className="ml-5">
                                    <span className="punctuation">{"<"}</span>
                                    <span className="tag">div&nbsp;</span>
                                    <span className="attr-name">class</span>
                                    <span className="punctuation">=</span>
                                    <span className="punctuation">"</span>
                                    <span className="attr-value">
                                        flex justify-center p-4
                                    </span>
                                    <span className="punctuation">"</span>
                                    <span className="punctuation">{">"}</span>
                                    <br/>
                                        <pre className="ml-5">
                                            <span className="punctuation">{"<"}</span>
                                            <span className="tag">input&nbsp;</span>
                                            <span className="attr-name">type</span>
                                            <span className="punctuation">=</span>
                                            <span className="punctuation">"</span>
                                            <span className="attr-value">range</span>
                                            <span className="punctuation">"&nbsp;</span>
                                            <span className="attr-name">value</span>
                                            <span className="punctuation">=</span>
                                            <span className="punctuation">"</span>
                                            <span className="punctuation">"&nbsp;</span>
                                            <span className="attr-name">onChange</span>
                                            <span className="punctuation">=</span>
                                            <span className="punctuation">"</span>
                                            <span className="punctuation">"&nbsp;</span>
                                            <span className="attr-name">class</span>
                                            <span className="punctuation">=</span>
                                            <span className="punctuation">"</span>
                                            <span className="attr-value">w-80 h-1.5</span>
                                            <span className="punctuation">"&nbsp;</span>
                                            <span className="punctuation">{">"}</span>
                                        </pre>
                                    <span className="punctuation">{"</"}</span>
                                    <span className="tag">div</span>
                                    <span className="punctuation">{">"}</span>
                                </pre>
                                <pre className="ml-5">
                                    <span className="punctuation">{"<"}</span>
                                    <span className="tag">div&nbsp;</span>
                                    <span className="attr-name">class</span>
                                    <span className="punctuation">=</span>
                                    <span className="punctuation">"</span>
                                    <span className="attr-value">
                                        flex justify-center items-center value text-sm font-bold bg-white 
                                        w-16 h-9 border-solid border-2 border-primary-border rounded-full
                                    </span>
                                    <span className="punctuation">"</span>
                                    <span className="punctuation">{">"}</span>
                                    <span className="punctuation">20</span>
                                    <span className="punctuation">{"</"}</span>
                                    <span className="tag">div</span>
                                    <span className="punctuation">{">"}</span>
                                </pre>
                            <span className="punctuation">{"</"}</span>
                            <span className="tag">div</span>
                            <span className="punctuation">{">"}</span>
                        </span>
                    </div>
                </code>
            </pre>
        </div>
    );
};

export default SingleRangeCode;