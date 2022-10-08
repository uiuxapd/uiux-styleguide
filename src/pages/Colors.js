import { React, useRef, createRef } from "react";
import BtnIndex from "../components/BtnIndex";

const Colors = () => {  
  const colorList = [
    {
      title: "neutral colors",
      listColor: [
        ["bg-neutral-50", 50, "#F9FAFB"],
        ["bg-neutral-100", 100, "#EFF1F5"],
        ["bg-neutral-200", 200, "#EAECF0"],
        ["bg-neutral-300", 300, "#D0D5DD"],
        ["bg-neutral-400", 400, "#98A2B3"],
        ["bg-neutral-500", 500, "#667085"],
        ["bg-neutral-600", 600, "#475467"],
        ["bg-neutral-700", 700, "#344054"],
        ["bg-neutral-800", 800, "#1D2939"],
        ["bg-neutral-900", 900, "#101828"],
      ],
    },
    {
      title: "primary colors",
      listColor: [
        ["bg-primary-main", "Main", "#0057E7"],
        ["bg-primary-surface", "Surface", "#F0F5FF"],
        ["bg-primary-border", "Border", "#CCDCFF"],
        ["bg-primary-hover", "Hover", "#0039B2"],
        ["bg-primary-pressed", "Pressed", "#07007D"],
        ["bg-primary-focused", "Focused", "#C4D5F2"],
      ],
    },
    {
      title: "secondary colors",
      listColor: [
        ["bg-secondary-main", "Main", "#0057E7"],
        ["bg-secondary-surface", "Surface", "#F0F5FF"],
        ["bg-secondary-border", "Border", "#CCDCFF"],
        ["bg-secondary-hover", "Hover", "#0039B2"],
        ["bg-secondary-pressed", "Pressed", "#07007D"],
        ["bg-secondary-focused", "Focused", "#C4D5F2"],
      ],
    },
    {
      title: "success colors",
      listColor: [
        ["bg-success-main", "Main", "#0057E7"],
        ["bg-success-surface", "Surface", "#F0F5FF"],
        ["bg-success-border", "Border", "#CCDCFF"],
        ["bg-success-hover", "Hover", "#0039B2"],
        ["bg-success-pressed", "Pressed", "#07007D"],
        ["bg-success-focused", "Focused", "#C4D5F2"],
      ],
    },
    {
      title: "error colors",
      listColor: [
        ["bg-error-main", "Main", "#0057E7"],
        ["bg-error-surface", "Surface", "#F0F5FF"],
        ["bg-error-border", "Border", "#CCDCFF"],
        ["bg-error-hover", "Hover", "#0039B2"],
        ["bg-error-pressed", "Pressed", "#07007D"],
        ["bg-error-focused", "Focused", "#C4D5F2"],
      ],
    },
  ];

  const reference = useRef([]);
  reference.current = colorList.map((_, i) => reference.current[i] ?? createRef());
  
  return (
    <>
      <div className="content-left">
        <div className="pb-4 mb-10 border-b border-neutral-200 dark:border-neutral-700">
          <h1 className="mb-4">Colors</h1>
          <p className="leading-relaxed dark:text-neutral-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            suscipit magnam minima. Beatae deserunt perferendis aut ipsum
            labore, nihil laborum sint, vitae aspernatur dolor quibusdam velit
            fugit dolores cum, ad possimus maiores nulla? Ut, minus? Natus hic
            necessitatibus, sapiente consectetur nihil ea suscipit itaque facere
            recusandae architecto. Veniam, fuga nam?
          </p>
        </div>

        {colorList.map((itemList, indexList) => {
          return (
            <div
              key={indexList += 2}
              ref={reference.current[indexList]}
              className="mb-8"
            >
              <h4 className="text-lg md:text-xl mb-2 capitalize font-medium text-neutral-800 dark:text-neutral-50 inline-block">
                {itemList.title}
              </h4>
              <div className="flex flex-wrap gap-3 text-xs sm:gap-4 md:text-sm">
                {itemList.listColor.map(([className, colorName, hex]) => (
                  <div
                    key={indexList += 2}
                    className={`flex-1 ${itemList.title === "neutral colors" ? 'basis-1/6' : 'basis-1/4 md:first:basis-full'} md:basis-1/6 `}
                  >
                    <div className={`w-full h-10 mb-2 md:h-16 rounded-lg ${className}`}></div>
                    <div className="flex flex-col md:flex md:justify-between">
                      <div className="font-medium text-neutral-900 dark:text-neutral-200">
                        {colorName}
                      </div>
                      <div className="text-[0.70rem] text-neutral-700 dark:text-neutral-300">
                        {hex}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="content-right">
        <h6>On this page</h6>
        <ul>
          {colorList.map((itemRef, indexRef) => {
            return (
              <li key={indexRef += 4}>
                <BtnIndex
                  reference={reference.current[indexRef]}
                  label={itemRef.title}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Colors;
