import React from 'react'

const classBase = "mt-2 block w-full py-2.5 px-4 text-base bg-white border border-slate-300 hover:border-primary-main rounded-lg leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main"
const classDisable = "mt-2 block w-full py-2.5 px-4 text-base text-slate-500 bg-slate-200 border border-slate-300 hover:border-slate-300 rounded-lg leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main"
const classError = "mt-2 block w-full py-2.5 px-4 text-base text-error-main bg-error-surface border border-error-border hover:border-error-main rounded-lg leading-tight focus:outline-none focus:bg-error-surface focus:ring focus:ring-error-focused focus:border-error-main"

export const InputBaseCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Input Base -->"}</span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="tag">label&nbsp;</span>
              <span className="attr-name">htmlFor</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                fullname
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                capitalize text-slate-700
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">input base</span>
              <span className="punctuation">{"</"}</span>
              <span className="tag">label</span>
              <span className="punctuation">{">"}</span>
              <br/>
              <span className="punctuation">{"<"}</span>
              <span className="tag">input&nbsp;</span>
              <span className="attr-name">type</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                text
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                {classBase}
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="punctuation">{"/"}</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}

export const InputDisableCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Input Disable -->"}</span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="tag">label&nbsp;</span>
              <span className="attr-name">htmlFor</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                fullname
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                capitalize text-slate-700
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">input disable</span>
              <span className="punctuation">{"</"}</span>
              <span className="tag">label</span>
              <span className="punctuation">{">"}</span>
              <br/>
            <span className="punctuation">{"<"}</span>
              <span className="tag">input&nbsp;</span>
              <span className="attr-name">type</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                text
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                {classDisable}
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">disabled&nbsp;</span>
              <span className="punctuation">{"/"}</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}

export const InputErrorCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Input Error -->"}</span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="tag">label&nbsp;</span>
              <span className="attr-name">htmlFor</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                fullname
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                capitalize text-slate-700
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">input error</span>
              <span className="punctuation">{"</"}</span>
              <span className="tag">label</span>
              <span className="punctuation">{">"}</span>
              <br/>
            <span className="punctuation">{"<"}</span>
              <span className="tag">input&nbsp;</span>
              <span className="attr-name">type</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                text
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                {classError}
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="punctuation">{"/"}</span>
              <span className="punctuation mr-4">{">"}</span>
              <br/>
              <span className="punctuation">{"<"}</span>
              <span className="tag">span&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                relative text-error-main text-xs italic
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">this input has an error</span>
              <span className="punctuation">{"</"}</span>
              <span className="tag">span</span>
              <span className="punctuation">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}

export const DatepickerBaseCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Datepicker Base -->"}</span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="tag">label&nbsp;</span>
              <span className="attr-name">htmlFor</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                fullname
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                capitalize text-slate-700
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">datepicker base</span>
              <span className="punctuation">{"</"}</span>
              <span className="tag">label</span>
              <span className="punctuation">{">"}</span>
              <br/>
            <span className="punctuation">{"<"}</span>
              <span className="tag">input&nbsp;</span>
              <span className="attr-name">type</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                date
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                {classBase}
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="punctuation">{"/"}</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}

export const DatepickerDisableCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Datepicker Disable -->"}</span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="tag">label&nbsp;</span>
              <span className="attr-name">htmlFor</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                fullname
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                capitalize text-slate-700
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">datepicker disable</span>
              <span className="punctuation">{"</"}</span>
              <span className="tag">label</span>
              <br/>
              <span className="punctuation">{">"}</span>
            <span className="punctuation">{"<"}</span>
              <span className="tag">input&nbsp;</span>
              <span className="attr-name">type</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                date
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                {classDisable}
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">disabled&nbsp;</span>
              <span className="punctuation">{"/"}</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}

export const DatepickerErrorCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Datepicker Error -->"}</span>
            <span className="token">
            <span className="punctuation">{"<"}</span>
              <span className="tag">label&nbsp;</span>
              <span className="attr-name">htmlFor</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                fullname
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                capitalize text-slate-700
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">datepicker error</span>
              <span className="punctuation">{"</"}</span>
              <span className="tag">label</span>
              <span className="punctuation">{">"}</span>
              <br/>
            <span className="punctuation">{"<"}</span>
              <span className="tag">input&nbsp;</span>
              <span className="attr-name">type</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                date
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                {classError}
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="punctuation">{"/"}</span>
              <span className="punctuation mr-4">{">"}</span>
              <br/>
              <span className="punctuation">{"<"}</span>
              <span className="tag">span&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                relative text-error-main text-xs italic
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">this input has an error</span>
              <span className="punctuation">{"</"}</span>
              <span className="tag">span</span>
              <span className="punctuation">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}

export const SelectBaseCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Select Base -->"}</span>
            <span className="token">
            <span className="punctuation">{"<"}</span>
              <span className="tag">label&nbsp;</span>
              <span className="attr-name">htmlFor</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                fullname
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                capitalize text-slate-700
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">select base</span>
              <span className="punctuation">{"</"}</span>
              <span className="tag">label</span>
              <span className="punctuation">{">"}</span>
              <br/>
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                mt-2 group relative
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">span&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                w-2 h-2 border-r-2 border-b-2 border-slate-400 group-hover:border-primary-main group-focus-within:border-primary-main absolute top-1/2 right-4 -translate-y-1.5 rotate-45 origin-center
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">span</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">select&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                {"appearance-none " + classBase}
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
            </span>
            <span className="token ml-12">
              ...
            </span>
            <span className="token ml-12">
              <span className="punctuation">{"<"}</span>
              <span className="tag">option&nbsp;</span>
              <span className="attr-name">value</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                value
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              Option
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">option</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-12">
              ...
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">select</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}

export const SelectDisableCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Select Disable -->"}</span>
            <span className="token">
            <span className="punctuation">{"<"}</span>
              <span className="tag">label&nbsp;</span>
              <span className="attr-name">htmlFor</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                fullname
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                capitalize text-slate-700
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">select disable</span>
              <span className="punctuation">{"</"}</span>
              <span className="tag">label</span>
              <span className="punctuation">{">"}</span>
              <br/>
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                group relative
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">span&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                w-2 h-2 border-r-2 border-b-2 border-slate-400 group-focus-within:border-primary-main absolute top-1/2 right-4 -translate-y-1.5 rotate-45 origin-center
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">span</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">select&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                {"appearance-none " + classDisable}
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">disabled&nbsp;</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-12">
              ...
            </span>
            <span className="token ml-12">
              <span className="punctuation">{"<"}</span>
              <span className="tag">option&nbsp;</span>
              <span className="attr-name">value</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                value
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              Option
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">option</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-12">
              ...
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">select</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}

export const SelectErrorCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Select Error -->"}</span>
            <span className="token">
            <span className="punctuation">{"<"}</span>
              <span className="tag">label&nbsp;</span>
              <span className="attr-name">htmlFor</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                fullname
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                capitalize text-slate-700
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">select error</span>
              <span className="punctuation">{"</"}</span>
              <span className="tag">label</span>
              <span className="punctuation">{">"}</span>
              <br/>
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                group relative
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">span&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                w-2 h-2 border-r-2 border-b-2 border-error-border group-hover:border-error-main group-focus-within:border-error-main absolute top-1/2 right-4 -translate-y-1.5 rotate-45 origin-center
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">span</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">select&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                {"appearance-none " + classError}
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-12">
              ...
            </span>
            <span className="token ml-12">
              <span className="punctuation">{"<"}</span>
              <span className="tag">option&nbsp;</span>
              <span className="attr-name">value</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                value
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              Option
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">option</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-12">
              ...
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">select</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}

export const RadioBaseCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Radio Button Base -->"}</span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                flex items-center gap-2
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                relative w-5 h-5
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-12">
              <span className="punctuation">{"<"}</span>
              <span className="tag">input&nbsp;</span>
              <span className="attr-name">type</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                radio
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">id</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                radio
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                peer w-full h-full absolute opacity-0 cursor-pointer z-[3]
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="punctuation">{"/"}</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-12">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                w-full h-full bg-white peer-checked:bg-blue-600 border-2 border-primary-border peer-hover:border-primary-main 
                rounded-full peer-hover:ring-2 peer-hover:ring-primary-focused before:invisible before:z-[2] before:absolute before:w-2 
                before:h-2 before:bg-white before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 
                before:-rotate-45 peer-checked:before:visible
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">label&nbsp;</span>
              <span className="attr-name">htmlFor</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                radio
              </span>
              <span className="punctuation">"</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                capitalize
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">radio base</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">label</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}

export const RadioDisableCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Radio Button Disable -->"}</span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                flex items-center gap-2
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                relative w-5 h-5
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-12">
              <span className="punctuation">{"<"}</span>
              <span className="tag">input&nbsp;</span>
              <span className="attr-name">type</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                radio
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">id</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                radiodisable
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                peer w-full h-full absolute opacity-0 cursor-pointer z-[3]
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="punctuation">disabled Checked</span>
              <span className="punctuation">{"/"}</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-12">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                w-full h-full bg-white peer-checked:bg-slate-400 border-2 border-primary-border peer-hover:border-slate-400 
                rounded-full peer-hover:ring-2 peer-hover:ring-primary-focused before:invisible before:z-[2] before:absolute before:w-2 
                before:h-2 before:bg-white before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 
                before:-rotate-45 peer-checked:before:visible
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">label&nbsp;</span>
              <span className="attr-name">htmlFor</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                radiodisable
              </span>
              <span className="punctuation">"</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                capitalize
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">radio disable</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">label</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}

export const RadioErrorCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Radio Button Error -->"}</span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                flex items-center gap-2
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                relative w-5 h-5
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-12">
              <span className="punctuation">{"<"}</span>
              <span className="tag">input&nbsp;</span>
              <span className="attr-name">type</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                radio
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">id</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                radioerror
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                peer w-full h-full absolute opacity-0 cursor-pointer z-[3]
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="punctuation">defaultChecked</span>
              <span className="punctuation">{"/"}</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-12">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                w-full h-full bg-white peer-checked:bg-error-main border-2 border-error-border peer-hover:border-error-border 
                rounded-full peer-hover:ring-2 peer-hover:ring-error-focused before:invisible before:z-[2] before:absolute before:w-2 
                before:h-2 before:bg-white before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 
                before:-rotate-45 peer-checked:before:visible
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">label&nbsp;</span>
              <span className="attr-name">htmlFor</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                radioerror
              </span>
              <span className="punctuation">"</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                capitalize text-error-main
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">radio error</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">label</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}

export const CheckboxBaseCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Checkbox Base -->"}</span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                flex items-center gap-2
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                relative w-5 h-5
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-12">
              <span className="punctuation">{"<"}</span>
              <span className="tag">input&nbsp;</span>
              <span className="attr-name">type</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                checkbox
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">id</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                checkbox
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                peer w-full h-full absolute opacity-0 cursor-pointer z-[3]
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="punctuation">{"/"}</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-12">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                w-full h-full bg-white peer-checked:bg-primary-main border-2 border-primary-border peer-hover:border-primary-main rounded-md peer-hover:ring-2 peer-hover:ring-primary-focused before:invisible after:invisible before:absolute before:w-[2px] before:h-1.5 before:bg-white before:rounded-full before:top-[55%] before:-translate-y-1/2 before:left-1/2 before:-translate-x-1 before:-rotate-45 before:z-[2] after:absolute after:w-[2px] after:h-[10px] after:bg-white after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:rotate-45 after:z-[2] peer-checked:before:visible peer-checked:after:visible
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">label&nbsp;</span>
              <span className="attr-name">htmlFor</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                checkbox
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                capitalize
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">checkbox base</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">label</span>
              <span className="punctuation">{">"}</span>
            </span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}

export const CheckboxDisableCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Checkbox Disable -->"}</span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                flex items-center gap-2
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                relative w-5 h-5
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-12">
              <span className="punctuation">{"<"}</span>
              <span className="tag">input&nbsp;</span>
              <span className="attr-name">type</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                checkbox
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">id</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                checkboxdisable
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                peer w-full h-full absolute opacity-0 cursor-pointer z-[3]
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">disabled</span>
              <span className="punctuation">{"/"}</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-12">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                w-full h-full bg-white peer-checked:bg-slate-400 border-2 border-primary-border peer-hover:border-slate-400 rounded-md peer-hover:ring-2 peer-hover:ring-primary-focused before:invisible after:invisible before:absolute before:w-[2px] before:h-1.5 before:bg-white before:rounded-full before:top-[55%] before:-translate-y-1/2 before:left-1/2 before:-translate-x-1 before:-rotate-45 before:z-[2] after:absolute after:w-[2px] after:h-[10px] after:bg-white after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:rotate-45 after:z-[2] peer-checked:before:visible peer-checked:after:visible
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">label&nbsp;</span>
              <span className="attr-name">htmlFor</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                checkboxdisable
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                capitalize
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">checkbox disable</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">label</span>
              <span className="punctuation">{">"}</span>
            </span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}

export const CheckboxErrorCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Checkbox Error -->"}</span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                flex items-center gap-2
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                relative w-5 h-5
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-12">
              <span className="punctuation">{"<"}</span>
              <span className="tag">input&nbsp;</span>
              <span className="attr-name">type</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                checkbox
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">id</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                checkboxerror
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                peer w-full h-full absolute opacity-0 cursor-pointer z-[3]
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{"/"}</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-12">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                w-full h-full bg-white peer-checked:bg-error-main border-2 border-error-border peer-hover:border-error-main rounded-md peer-hover:ring-2 peer-hover:ring-error-focused before:invisible after:invisible before:absolute before:w-[2px] before:h-1.5 before:bg-white before:rounded-full before:top-[55%] before:-translate-y-1/2 before:left-1/2 before:-translate-x-1 before:-rotate-45 before:z-[2] after:absolute after:w-[2px] after:h-[10px] after:bg-white after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:rotate-45 after:z-[2] peer-checked:before:visible peer-checked:after:visible
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">label&nbsp;</span>
              <span className="attr-name">htmlFor</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                checkboxerror
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                capitalize text-error-main
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">checkbox error</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">label</span>
              <span className="punctuation">{">"}</span>
            </span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}

export const ToggleBaseCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Toggle Base -->"}</span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                relative w-8 h-5
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-12">
              <span className="punctuation">{"<"}</span>
              <span className="tag">input&nbsp;</span>
              <span className="attr-name">type</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                checkbox
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                peer w-full h-full absolute opacity-0 cursor-pointer z-[3]
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="punctuation">{"/"}</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-12">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                w-full h-full bg-white border-2 border-primary-border peer-hover:border-primary-main rounded-full peer-hover:ring-2 peer-hover:ring-primary-focused relative overflow-hidden after:absolute after:w-3.5 after:h-3.5 after:bg-blue-600 after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-0.5 after:rotate-45 after:z-[2] after:ease-in-out after:duration-300 peer-checked:bg-blue-600 peer-checked:after:left-3 peer-checked:after:bg-white
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}

export const ToggleDisableCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Toggle Disable -->"}</span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                relative w-8 h-5
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">input&nbsp;</span>
              <span className="attr-name">type</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                checkbox
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                peer w-full h-full absolute opacity-0 cursor-pointer z-[3]
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">disabled</span>
              <span className="punctuation">{"/"}</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                w-full h-full bg-white border-2 border-primary-border peer-hover:border-slate-300 rounded-full peer-hover:ring-2 peer-hover:ring-primary-focused relative overflow-hidden after:absolute after:w-3.5 after:h-3.5 after:bg-slate-400 after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-0.5 after:rotate-45 after:z-[2] after:ease-in-out after:duration-300 peer-checked:bg-slate-400 peer-checked:after:left-3 peer-checked:after:bg-white
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}

export const ToggleErrorCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Toggle Error -->"}</span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                relative w-8 h-5
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">input&nbsp;</span>
              <span className="attr-name">type</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                checkbox
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                peer w-full h-full absolute opacity-0 cursor-pointer z-[3]
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{"/"}</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token ml-6">
              <span className="punctuation">{"<"}</span>
              <span className="tag">div&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                w-full h-full bg-white border-2 border-error-border peer-hover:border-error-main rounded-full peer-hover:ring-2 peer-hover:ring-error-focused relative overflow-hidden after:absolute after:w-3.5 after:h-3.5 after:bg-error-main after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-0.5 after:rotate-45 after:z-[2] after:ease-in-out after:duration-300 peer-checked:bg-error-main peer-checked:after:left-3 peer-checked:after:bg-error-border
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">div</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}

export const TextareaBaseCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Textarea Base -->"}</span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="tag">label&nbsp;</span>
              <span className="attr-name">htmlFor</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                textarea
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                capitalize text-slate-700
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">textarea base</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">label</span>
              <span className="punctuation">{">"}</span>
            </span>
            <span className="token">
            <span className="punctuation">{"<"}</span>
              <span className="tag">textarea&nbsp;</span>
              <span className="attr-name">rows</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                3
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                {classBase}
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">textarea</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}

export const TextareaDisableCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Textarea Disable -->"}</span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="tag">label&nbsp;</span>
              <span className="attr-name">htmlFor</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                textarea
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                capitalize text-slate-700
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">textarea disable</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">label</span>
              <span className="punctuation">{">"}</span>
            </span>
            <span className="token">
            <span className="punctuation">{"<"}</span>
              <span className="tag">textarea&nbsp;</span>
              <span className="attr-name">rows</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                3
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                {classDisable}
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">disabled</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">textarea</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}

export const TextareaErrorCode = () => {
  return (
    <pre>
      <code lang='html'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="comment">{"<!-- Textarea Error -->"}</span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="tag">label&nbsp;</span>
              <span className="attr-name">htmlFor</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                textarea
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                capitalize text-slate-700
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">textarea error</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">label</span>
              <span className="punctuation">{">"}</span>
            </span>
            <span className="token">
            <span className="punctuation">{"<"}</span>
              <span className="tag">textarea&nbsp;</span>
              <span className="attr-name">rows</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value">
                3
              </span>
              <span className="punctuation">"&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                {classError}
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">textarea</span>
              <span className="punctuation mr-4">{">"}</span>
            </span>
            <span className="token">
              <span className="punctuation">{"<"}</span>
              <span className="tag">span&nbsp;</span>
              <span className="attr-name">class</span>
              <span className="punctuation">=</span>
              <span className="punctuation">"</span>
              <span className="attr-value whitespace-pre-wrap">
                relative text-error-main text-xs italic
              </span>
              <span className="punctuation">"</span>
              <span className="punctuation">{">"}</span>
              <span className="punctuation">this input has an error</span>
              <span className="punctuation">{"<"}</span>
              <span className="punctuation">{"/"}</span>
              <span className="tag">span</span>
              <span className="punctuation">{">"}</span>
            </span>
          </div>
        </div>
      </code>
    </pre>
  )
}