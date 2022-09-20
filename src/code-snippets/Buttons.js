const btnPrimary = `
<button className="bg-primary-500 text-white text-sm font-medium py-2 px-4 rounded-lg shadow transition-all hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">Small</button>
<button className="bg-primary-500 text-white text-base font-medium py-2 px-4 rounded-lg shadow transition-all hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">Medium</button>
<button className="bg-primary-500 text-white text-base font-medium py-2.5 px-4 rounded-lg shadow transition-all hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">Large</button>

<button className="bg-primary-500 text-white text-sm font-medium py-2 px-4 rounded-full shadow transition-all hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">Small</button>
<button className="bg-primary-500 text-white text-base font-medium py-2 px-4 rounded-full shadow transition-all hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">Medium</button>
<button className="bg-primary-500 text-white text-base font-medium py-2.5 px-4 rounded-full shadow transition-all hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">Large</button>`;

const btnSecondary = `
<button className="bg-neutral-50 text-primary-500 text-sm font-medium py-2 px-4 rounded-lg shadow transition-all hover:bg-neutral-100/70 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">Small</button>
<button className="bg-neutral-50 text-primary-500 text-base font-medium py-2 px-4 rounded-lg shadow transition-all hover:bg-neutral-100/70 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">Medium</button>
<button className="bg-neutral-50 text-primary-500 text-base font-medium py-2.5 px-4 rounded-lg shadow transition-all hover:bg-neutral-100/70 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">Large</button>

<button className="bg-neutral-50 text-primary-500 text-sm font-medium py-2 px-4 rounded-full shadow transition-all hover:bg-neutral-100/70 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">Small</button>
<button className="bg-neutral-50 text-primary-500 text-base font-medium py-2 px-4 rounded-full shadow transition-all hover:bg-neutral-100/70 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">Medium</button>
<button className="bg-neutral-50 text-primary-500 text-base font-medium py-2.5 px-4 rounded-full shadow transition-all hover:bg-neutral-100/70 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">Large</button>`;

const btnOutlined = `
<button className="bg-white border border-primary-500 text-primary-500 text-sm font-medium py-2 px-4 rounded-lg shadow transition-all hover:bg-primary-50/30 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">Small</button>
<button className="bg-white border border-primary-500 text-primary-500 text-base font-medium py-2 px-4 rounded-lg shadow transition-all hover:bg-primary-50/30 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">Medium</button>
<button className="bg-white border border-primary-500 text-primary-500 text-base font-medium py-2.5 px-4 rounded-lg shadow transition-all hover:bg-primary-50/30 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">Large</button>

<button className="bg-white border border-primary-500 text-primary-500 text-sm font-medium py-2 px-4 rounded-full shadow transition-all hover:bg-primary-50/30 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">Small</button>
<button className="bg-white border border-primary-500 text-primary-500 text-base font-medium py-2 px-4 rounded-full shadow transition-all hover:bg-primary-50/30 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">Medium</button>
<button className="bg-white border border-primary-500 text-primary-500 text-base font-medium py-2.5 px-4 rounded-full shadow transition-all hover:bg-primary-50/30 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">Large</button>`;

const btnError = `
<button className="bg-error-500 text-white text-sm font-medium py-2 px-4 rounded-lg shadow transition-all hover:bg-error-600 focus:ring-4 focus:ring-error-100 focus:shadow-none focus:outline-none">Small</button>
<button className="bg-error-500 text-white text-base font-medium py-2 px-4 rounded-lg shadow transition-all hover:bg-error-600 focus:ring-4 focus:ring-error-100 focus:shadow-none focus:outline-none">Medium</button>
<button className="bg-error-500 text-white text-base font-medium py-2.5 px-4 rounded-lg shadow transition-all hover:bg-error-600 focus:ring-4 focus:ring-error-100 focus:shadow-none focus:outline-none">Large</button>

<button className="bg-error-500 text-white text-sm font-medium py-2 px-4 rounded-full shadow transition-all hover:bg-error-600 focus:ring-4 focus:ring-error-100 focus:shadow-none focus:outline-none">Small</button>
<button className="bg-error-500 text-white text-base font-medium py-2 px-4 rounded-full shadow transition-all hover:bg-error-600 focus:ring-4 focus:ring-error-100 focus:shadow-none focus:outline-none">Medium</button>
<button className="bg-error-500 text-white text-base font-medium py-2.5 px-4 rounded-full shadow transition-all hover:bg-error-600 focus:ring-4 focus:ring-error-100 focus:shadow-none focus:outline-none">Large</button>`;

const btnText = `
<button className="text-primary-500 text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">Small</button>
<button className="text-primary-500 text-base font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">Medium</button>
<button className="text-primary-500 text-base font-medium py-2.5 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">Large</button>

<button className="text-primary-500 text-sm font-medium py-2 px-4 rounded-full transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">Small</button>
<button className="text-primary-500 text-base font-medium py-2 px-4 rounded-full transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">Medium</button>
<button className="text-primary-500 text-base font-medium py-2.5 px-4 rounded-full transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">Large</button>`;

const btnDisable = `
<button className="bg-neutral-200 text-neutral-500 border border-neutral-300 text-sm font-medium py-2 px-4 rounded-lg cursor-not-allowed">Small</button>
<button className="bg-neutral-200 text-neutral-500 border border-neutral-300 text-base font-medium py-2 px-4 rounded-lg cursor-not-allowed">Medium</button>
<button className="bg-neutral-200 text-neutral-500 border border-neutral-300 text-base font-medium py-2.5 px-4 rounded-lg cursor-not-allowed">Large</button>

<button className="bg-neutral-200 text-neutral-500 border border-neutral-300 text-sm font-medium py-2 px-4 rounded-full cursor-not-allowed">Small</button>
<button className="bg-neutral-200 text-neutral-500 border border-neutral-300 text-base font-medium py-2 px-4 rounded-full cursor-not-allowed">Medium</button>
<button className="bg-neutral-200 text-neutral-500 border border-neutral-300 text-base font-medium py-2.5 px-4 rounded-full cursor-not-allowed">Large</button>`;
        
export { btnPrimary, btnSecondary, btnOutlined, btnError, btnText, btnDisable };