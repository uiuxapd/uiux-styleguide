import React from "react";

const Documentation = () => {
  const colors = [
    {
      neutralColors: [
        [50, "#F9FAFB"],
        [100, "#EFF1F5"],
        [200, "#EAECF0"],
        [300, "#D0D5DD"],
        [400, "#98A2B3"],
        [500, "#667085"],
        [600, "#475467"],
        [700, "#344054"],
        [800, "#1D2939"],
        [900, "#101828"],
      ],
      primaryColors: [
        ["main", "#0057E7"],
        ["surface", "#F0F5FF"],
        ["border", "#CCDCFF"],
        ["hover", "#0039B2"],
        ["pressed", "#07007D"],
        ["focused", "#C4D5F2"],
      ],
      secondaryColors: [
        ["main", "#FFB700"],
        ["surface", "#FFFAF0"],
        ["border", "#FFEFC7"],
        ["hover", "#E5A500"],
        ["pressed", "#A87800"],
        ["focused", "#F7E9C4"],
      ],
      successColors: [
        ["main", "#128760"],
        ["surface", "#EDFFF9"],
        ["border", "#C8E8DD"],
        ["hover", "#0E6B4C"],
        ["pressed", "#0C593F"],
        ["focused", "#C7E9DE"],
      ],
      errorColors: [
        ["main", "#E70000"],
        ["surface", "#FFF5F5"],
        ["border", "#FFD6D6"],
        ["hover", "#BA0000"],
        ["pressed", "#730000"],
        ["focused", "#F2C4C4"],
      ],
    },
  ];

  return (
    <div className="content-left">
      <h1 className="mb-8">How to use UI/UX styleguide?</h1>
      <ol className="list-decimal text-neutral-600 ml-4 flex flex-col gap-2">
        <li>
          You need install{" "}
          <a
            href="https://nodejs.org/en/download/"
            className="text-neutral-900 underline"
          >
            Node.js
          </a>
          <span> and </span>
          <a
            href="https://tailwindcss.com/docs/installation"
            className="text-neutral-900 underline"
          >
            Tailwind CSS.
          </a>
        </li>
        <li>
          add code below in your{" "}
          <span className="text-primary-main">tailwind.config.js</span> file
        </li>
      </ol>
      <div className="overflow mt-2">
        <pre>
          <code lang="html">
            <div className="flex flex-col">
              <span className="token">
                <span className="comment">
                  {"/** @type {import('tailwindcss').Config} */"}
                </span>
                <br />
                <span className="attr-name">module</span>
                <span className="punctuation">.</span>
                <span className="attr-name">exports</span>
                <span>&nbsp;=&nbsp;</span>
                <span>{"{"}</span>
                <br />
                  <span className="tag">content:</span>
                  <span className="punctuation">&nbsp;["</span>
                  <span className="attr-value">
                    {"./src/**/*.{js,jsx,ts,tsx}"}
                  </span>
                  <span className="punctuation">"],</span>
                  <br />
                <span className="tag ml-4">theme: </span>
                <span className="punctuation">{"{"}</span>
                <br />
                <span className="tag ml-8">extend: </span>
                <span className="punctuation">{"{"}</span>
                <br />
                <span className="tag ml-12">colors: </span>
                <span className="punctuation">{"{"}</span>
                <br />
                <span className="tag ml-16">neutral: </span>
                <span className="punctuation">{"{"}</span>
                {colors.map((color) => (
                  <div className="ml-20">
                    {color.neutralColors.map(([nameAttr, colorHex]) => (
                      <div>
                        <span className="attr-name">{nameAttr}: </span>
                        <span className="punctuation">'</span>
                        <span className="attr-value">{colorHex}</span>
                        <span className="punctuation">'</span>
                        <span className="punctuation">,</span>
                      </div>
                    ))}
                  </div>
                ))}
                <span className="punctuation ml-16">{"},"}</span>
                <br />
                <span className="tag ml-16">primary: </span>
                <span className="punctuation">{"{"}</span>
                {colors.map((color) => (
                  <div className="ml-20">
                    {color.primaryColors.map(([nameAttr, colorHex]) => (
                      <div>
                        <span className="attr-name">{nameAttr}: </span>
                        <span className="punctuation">'</span>
                        <span className="attr-value">{colorHex}</span>
                        <span className="punctuation">'</span>
                        <span className="punctuation">,</span>
                      </div>
                    ))}
                  </div>
                ))}
                <span className="punctuation ml-16">{"},"}</span>
                <br />
                <span className="tag ml-16">secondary: </span>
                <span className="punctuation">{"{"}</span>
                {colors.map((color) => (
                  <div className="ml-20">
                    {color.secondaryColors.map(([nameAttr, colorHex]) => (
                      <div>
                        <span className="attr-name">{nameAttr}: </span>
                        <span className="punctuation">'</span>
                        <span className="attr-value">{colorHex}</span>
                        <span className="punctuation">'</span>
                        <span className="punctuation">,</span>
                      </div>
                    ))}
                  </div>
                ))}
                <span className="punctuation ml-16">{"},"}</span>
                <br />
                <span className="tag ml-16">success: </span>
                <span className="punctuation">{"{"}</span>
                {colors.map((color) => (
                  <div className="ml-20">
                    {color.successColors.map(([nameAttr, colorHex]) => (
                      <div>
                        <span className="attr-name">{nameAttr}: </span>
                        <span className="punctuation">'</span>
                        <span className="attr-value">{colorHex}</span>
                        <span className="punctuation">'</span>
                        <span className="punctuation">,</span>
                      </div>
                    ))}
                  </div>
                ))}
                <span className="punctuation ml-16">{"},"}</span>
                <br />
                <span className="tag ml-16">error: </span>
                <span className="punctuation">{"{"}</span>
                {colors.map((color) => (
                  <div className="ml-20">
                    {color.errorColors.map(([nameAttr, colorHex]) => (
                      <div>
                        <span className="attr-name">{nameAttr}: </span>
                        <span className="punctuation">'</span>
                        <span className="attr-value">{colorHex}</span>
                        <span className="punctuation">'</span>
                        <span className="punctuation">,</span>
                      </div>
                    ))}
                  </div>
                ))}
                <span className="punctuation ml-16">{"},"}</span>
                <br />
                <span className="punctuation ml-12">{"},"}</span>
                <br />
                <span className="punctuation ml-8">{"},"}</span>
                <br />
                <span className="punctuation ml-4">{"},"}</span>
                <br />
                <span className="punctuation">{"}"}</span>
              </span>
            </div>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Documentation;
