import { React, useRef } from "react";
import BtnIndex from "../components/BtnIndex";

const Colors = () => {
  let key = 0;
  const colorList = [
    {
      neutralColor: [
        ["#F9FAFB", 50, "#F9FAFB"],
        ["#EFF1F5", 100, "#EFF1F5"],
        ["#EAECF0", 200, "#EAECF0"],
        ["#D0D5DD", 300, "#D0D5DD"],
        ["#98A2B3", 400, "#98A2B3"],
        ["#667085", 500, "#667085"],
        ["#475467", 600, "#475467"],
        ["#344054", 700, "#344054"],
        ["#1D2939", 800, "#1D2939"],
        ["#101828", 900, "#101828"],
      ],

      primaryColor: [
        ["#0057E7", "Main", "#0057E7"],
        ["#F0F5FF", "Surface", "#F0F5FF"],
        ["#CCDCFF", "Border", "#CCDCFF"],
        ["#0039B2", "Hover", "#0039B2"],
        ["#07007D", "Pressed", "#07007D"],
        ["#C4D5F2", "Focused", "#C4D5F2"],
      ],

      secondaryColor: [
        ["#FFB700", "Main", "#FFB700"],
        ["#FFFAF0", "Surface", "#FFFAF0"],
        ["#FFEFC7", "Border", "#FFEFC7"],
        ["#E5A500", "Hover", "#E5A500"],
        ["#A87800", "Pressed", "#A87800"],
        ["#F7E9C4", "Focused", "#F7E9C4"],
      ],

      successColor: [
        ["#128760", "Main", "#128760"],
        ["#EDFFF9", "Surface", "#EDFFF9"],
        ["#C8E8DD", "Border", "#C8E8DD"],
        ["#0E6B4C", "Hover", "#0E6B4C"],
        ["#0C593F", "Pressed", "#0C593F"],
        ["#C7E9DE", "Focused", "#C7E9DE"],
      ],

      errorColor: [
        ["#E70000", "Main", "#E70000"],
        ["#FFF5F5", "Surface", "#FFF5F5"],
        ["#FFD6D6", "Border", "#FFD6D6"],
        ["#BA0000", "Hover", "#BA0000"],
        ["#730000", "Pressed", "#730000"],
        ["#F2C4C4", "Focused", "#F2C4C4"],
      ],
    },
  ];

  const toNeutralColor = useRef(null),
    toPrimaryColor = useRef(null),
    toSecondaryColor = useRef(null),
    toSuccessColor = useRef(null),
    toErrorColor = useRef(null);

  return (
    <>
    <div className="content-left">
      <div className="pb-4 mb-10 border-b border-neutral-200 dark:border-neutral-700">
        <h1 className="mb-4">Colors</h1>
        <p className="leading-relaxed dark:text-neutral-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          suscipit magnam minima. Beatae deserunt perferendis aut ipsum labore,
          nihil laborum sint, vitae aspernatur dolor quibusdam velit fugit
          dolores cum, ad possimus maiores nulla? Ut, minus? Natus hic
          necessitatibus, sapiente consectetur nihil ea suscipit itaque facere
          recusandae architecto. Veniam, fuga nam?
        </p>
      </div>

      <div className="flex flex-col gap-14">
        <div ref={toNeutralColor} className="flex flex-col gap-4">
          <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Neutral Colors
          </h4>
          <div className="flex flex-col space-y-3 text-xs md:text-sm sm:flex-row sm:space-y-0 sm:space-x-4">
            {colorList.map((color) => (
              <div
                key={(key += 1)}
                className="grid flex-1 min-w-0 grid-cols-5 gap-y-2 gap-x-4 2xl:grid-cols-10"
              >
                {color.neutralColor.map(([color, name, hex]) => (
                  <div key={(key += 1)} className="space-y-1.5">
                    <div
                      className="w-full h-10 md:h-16 rounded-lg"
                      style={{ backgroundColor: color }}
                    ></div>
                    <div className="px-0.5 flex flex-col md:flex md:justify-between">
                      <div className="font-medium text-neutral-900 dark:text-neutral-200">
                        {name}
                      </div>
                      <div className="text-[0.70rem] text-neutral-700 dark:text-neutral-300">
                        {hex}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div ref={toPrimaryColor} className="flex flex-col gap-4">
          <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Primary Colors
          </h4>
          <div className="flex flex-col space-y-3 text-xs md:text-sm sm:flex-row sm:space-y-0 sm:space-x-4">
            {colorList.map((color) => (
              <div
                key={(key += 1)}
                className="grid flex-1 min-w-0 grid-cols-3 gap-y-2 gap-x-4 xl:grid-cols-5 2xl:grid-cols-10"
              >
                {color.primaryColor.map(([color, name, hex]) => (
                  <div key={(key += 1)} className="space-y-1.5">
                    <div
                      className="w-full h-10 md:h-16 rounded-lg"
                      style={{ backgroundColor: color }}
                    ></div>
                    <div className="px-0.5 flex flex-col md:flex md:justify-between">
                      <div className="font-medium text-neutral-900 dark:text-neutral-200">
                        {name}
                      </div>
                      <div className="text-[0.70rem] text-neutral-700 dark:text-neutral-300">
                        {hex}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div ref={toSecondaryColor} className="flex flex-col gap-4">
          <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Secondary Colors
          </h4>
          <div className="flex flex-col space-y-3 text-xs md:text-sm sm:flex-row sm:space-y-0 sm:space-x-4">
            {colorList.map((color) => (
              <div
                key={(key += 1)}
                className="grid flex-1 min-w-0 grid-cols-3 gap-y-2 gap-x-4 xl:grid-cols-5 2xl:grid-cols-10"
              >
                {color.secondaryColor.map(([color, name, hex]) => (
                  <div key={(key += 1)} className="space-y-1.5">
                    <div
                      className="w-full h-10 md:h-16 rounded-lg"
                      style={{ backgroundColor: color }}
                    ></div>
                    <div className="px-0.5 flex flex-col md:flex md:justify-between">
                      <div className="font-medium text-neutral-900 dark:text-neutral-200">
                        {name}
                      </div>
                      <div className="text-[0.70rem] text-neutral-700 dark:text-neutral-300">
                        {hex}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div ref={toSuccessColor} className="flex flex-col gap-4">
          <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Success Colors
          </h4>
          <div className="flex flex-col space-y-3 text-xs md:text-sm sm:flex-row sm:space-y-0 sm:space-x-4">
            {colorList.map((color) => (
              <div
                key={(key += 1)}
                className="grid flex-1 min-w-0 grid-cols-3 gap-y-2 gap-x-4 xl:grid-cols-5 2xl:grid-cols-10"
              >
                {color.successColor.map(([color, name, hex]) => (
                  <div key={(key += 1)} className="space-y-1.5">
                    <div
                      className="w-full h-10 md:h-16 rounded-lg"
                      style={{ backgroundColor: color }}
                    ></div>
                    <div className="px-0.5 flex flex-col md:flex md:justify-between">
                      <div className="font-medium text-neutral-900 dark:text-neutral-200">
                        {name}
                      </div>
                      <div className="text-[0.70rem] text-neutral-700 dark:text-neutral-300">
                        {hex}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div ref={toErrorColor} className="flex flex-col gap-4">
          <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Error Colors
          </h4>
          <div className="flex flex-col space-y-3 text-xs md:text-sm sm:flex-row sm:space-y-0 sm:space-x-4">
            {colorList.map((color) => (
              <div
                key={(key += 1)}
                className="grid flex-1 min-w-0 grid-cols-3 gap-y-2 gap-x-4 xl:grid-cols-5 2xl:grid-cols-10"
              >
                {color.errorColor.map(([color, name, hex]) => (
                  <div key={(key += 1)} className="space-y-1.5">
                    <div
                      className="w-full h-10 md:h-16 rounded-lg"
                      style={{ backgroundColor: color }}
                    ></div>
                    <div className="px-0.5 flex flex-col md:flex md:justify-between">
                      <div className="font-medium text-neutral-900 dark:text-neutral-200">
                        {name}
                      </div>
                      <div className="text-[0.70rem] text-neutral-700 dark:text-neutral-300">
                        {hex}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      <div className="content-right">
        <h6>on this page</h6>
        <ul>
          <li><BtnIndex reference={toNeutralColor} label="neutral colors" /></li>
          <li><BtnIndex reference={toPrimaryColor} label="primary colors" /></li>
          <li><BtnIndex reference={toSecondaryColor} label="secondary colors" /></li>
          <li><BtnIndex reference={toSuccessColor} label="success colors" /></li>
          <li><BtnIndex reference={toErrorColor} label="errorcolors" /></li>
        </ul>
      </div>
    </>
  );
};

export default Colors;
