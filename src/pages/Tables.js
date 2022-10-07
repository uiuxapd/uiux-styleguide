import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { React, useRef } from "react";
import BtnIndex from "../components/BtnIndex";

const Tables = () => {
  const toBasicTable = useRef(null),
  toScrollingTable = useRef(null);

  return (
    <>
      <div className="content-left">
        <div className="pb-4 mb-10 border-b border-neutral-200 dark:border-neutral-800">
          <h1 className="mb-4">Table</h1>
          <p className="leading-relaxed dark:text-neutral-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            suscipit magnam minima. Beatae deserunt perferendis aut ipsum
            labore, nihil laborum sint, vitae aspernatur dolor quibusdam velit
            fugit dolores cum, ad possimus maiores nulla? Ut, minus? Natus hic
            necessitatibus, sapiente consectetur nihil ea suscipit itaque facere
            recusandae architecto. Veniam, fuga nam?
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {/* Table Start */}
          <div>
            <div ref={toBasicTable} className="flex flex-col gap-4">
              <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                Basic Table
              </h4>
              <div className="p-4 w-full rounded-t-xl border border-neutral-200 dark:border-neutral-600">
                <div className="w-[calc(100vw_-_90vw)] min-w-full overflow-x-auto rounded">
                  <table className="w-max sm:w-full table-auto text-sm">
                    <thead className="h-12 bg-primary-surface text-primary-main text-left">
                      <tr>
                        <th className="px-4 rounded-tl">No</th>
                        <th className="px-4">Name</th>
                        <th className="px-4">ID</th>
                        <th className="px-4">Amount</th>
                        <th className="px-4">Status</th>
                        <th className="px-4 rounded-tr text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="h-[60px] bg-white border-b border-neutral-200">
                        <td className="px-4 text-neutral-900">1</td>
                        <td className="px-4 text-neutral-900">Ahmad Hilwan Diwa</td>
                        <td className="px-4 text-neutral-900">-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Active</td>
                        <td className="px-4 text-neutral-900" align="center">
                          <EllipsisHorizontalIcon className="icon24" />
                        </td>
                      </tr>
                      <tr className="h-[60px] bg-white border-b border-neutral-200">
                        <td className="px-4 text-neutral-900">2</td>
                        <td className="px-4 text-neutral-900">Arpin Hervian</td>
                        <td className="px-4 text-neutral-900">-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Active</td>
                        <td className="px-4 text-neutral-900" align="center">
                          <EllipsisHorizontalIcon className="icon24" />
                        </td>
                      </tr>
                      <tr className="h-[60px] bg-white border-b border-neutral-200">
                        <td className="px-4 text-neutral-900">3</td>
                        <td className="px-4 text-neutral-900">Arvanzo Rifnazky</td>
                        <td className="px-4 text-neutral-900">-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Active</td>
                        <td className="px-4 text-neutral-900" align="center">
                          <EllipsisHorizontalIcon className="icon24" />
                        </td>
                      </tr>
                      <tr className="h-[60px] bg-white border-b border-neutral-200">
                        <td className="px-4 text-neutral-900">4</td>
                        <td className="px-4 text-neutral-900">Aswin Santosa</td>
                        <td className="px-4 text-neutral-900">-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Active</td>
                        <td className="px-4 text-neutral-900" align="center">
                          <EllipsisHorizontalIcon className="icon24" />
                        </td>
                      </tr>
                      <tr className="h-[60px] bg-white border-b border-neutral-200">
                        <td className="px-4 text-neutral-900">5</td>
                        <td className="px-4 text-neutral-900">Ilham Jaka Elandra</td>
                        <td className="px-4 text-neutral-900">-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Active</td>
                        <td className="px-4 text-neutral-900" align="center">
                          <EllipsisHorizontalIcon className="icon24" />
                        </td>
                      </tr>
                      <tr className="h-[60px] bg-white border-b border-neutral-200">
                        <td className="px-4 text-neutral-900">6</td>
                        <td className="px-4 text-neutral-900">Juanda Esa Putra</td>
                        <td className="px-4 text-neutral-900">-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Active</td>
                        <td className="px-4 text-neutral-900" align="center">
                          <EllipsisHorizontalIcon className="icon24" />
                        </td>
                      </tr>
                      <tr className="h-[60px] bg-white border-b border-neutral-200">
                        <td className="px-4 text-neutral-900">7</td>
                        <td className="px-4 text-neutral-900">Mohammad Fahmi Maulana</td>
                        <td className="px-4 text-neutral-900">-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Active</td>
                        <td className="px-4 text-neutral-900" align="center">
                          <EllipsisHorizontalIcon className="icon24" />
                        </td>
                      </tr>
                      <tr className="h-[60px] bg-white border-b border-neutral-200">
                        <td className="px-4 text-neutral-900">8</td>
                        <td className="px-4 text-neutral-900">Musa Pardede</td>
                        <td className="px-4 text-neutral-900">-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Active</td>
                        <td className="px-4 text-neutral-900" align="center">
                          <EllipsisHorizontalIcon className="icon24" />
                        </td>
                      </tr>
                      <tr className="h-[60px] bg-white border-b border-neutral-200">
                        <td className="px-4 text-neutral-900">9</td>
                        <td className="px-4 text-neutral-900">Piki Rahmadi</td>
                        <td className="px-4 text-neutral-900">-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Active</td>
                        <td className="px-4 text-neutral-900" align="center">
                          <EllipsisHorizontalIcon className="icon24" />
                        </td>
                      </tr>
                      <tr className="h-[60px] bg-white">
                        <td className="px-4 text-neutral-900 rounded-bl">10</td>
                        <td className="px-4 text-neutral-900">Sonia</td>
                        <td className="px-4 text-neutral-900">-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Active</td>
                        <td className="px-4 rounded-br" align="center">
                          <EllipsisHorizontalIcon className="icon24" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-wrap gap-4 justify-center sm:justify-between items-center text-sm mt-4">
                  <div>
                    Rows per Page
                    <select className="bg-white border border-primary-500 text-neutral-900 text-sm font-medium p-2 rounded-lg shadow transition-all hover:bg-primary-50/30 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none mx-2">
                      <option>10</option>
                      <option>25</option>
                    </select>
                    1-10 of 100 records
                  </div>
                  <div>
                    <button className="text-primary-main text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">
                      &#171;
                    </button>
                    <button className="text-primary-main text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">
                      &#8249;
                    </button>
                    <button className="bg-primary-main text-white text-sm font-medium py-2 px-4 rounded-lg shadow transition-all hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">
                      1
                    </button>
                    <button className="text-primary-main text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">
                      2
                    </button>
                    <button className="text-primary-main text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">
                      3
                    </button>
                    <button className="text-primary-main text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">
                      &#8250;
                    </button>
                    <button className="text-primary-main text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">
                      &#187;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Table End */}
          
          {/* Table Start */}
          <div>
            <div ref={toScrollingTable} className="flex flex-col gap-4">
              <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                Scrolling Table
              </h4>
              <div className="p-4 w-full rounded-t-xl border border-neutral-200 dark:border-neutral-600">
                <div className="w-[calc(100vw_-_90vw)] min-w-full overflow-x-auto rounded">
                  <table className="w-max text-sm">
                    <thead className="h-12 bg-primary-surface text-primary-main text-left">
                      <tr>
                        <th className="px-4">No</th>
                        <th className="px-4">Name</th>
                        <th className="px-4">ID</th>
                        <th className="px-4">Amount</th>
                        <th className="px-4">Amount</th>
                        <th className="px-4">Amount</th>
                        <th className="px-4">Amount</th>
                        <th className="px-4">Amount</th>
                        <th className="px-4">Amount</th>
                        <th className="px-4">Amount</th>
                        <th className="px-4">Status</th>
                        <th className="px-4 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="h-[60px] bg-white border-b border-neutral-200">
                        <td className="px-4 text-neutral-900">1</td>
                        <td className="px-4 text-neutral-900">Ahmad Hilwan Diwa</td>
                        <td className="px-4 text-neutral-900">-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Active</td>
                        <td className="px-4 text-neutral-900" align="center">
                          <EllipsisHorizontalIcon className="icon24" />
                        </td>
                      </tr>
                      <tr className="h-[60px] bg-white border-b border-neutral-200">
                        <td className="px-4 text-neutral-900">2</td>
                        <td className="px-4 text-neutral-900">Arpin Hervian</td>
                        <td className="px-4 text-neutral-900">-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Active</td>
                        <td className="px-4 text-neutral-900" align="center">
                          <EllipsisHorizontalIcon className="icon24" />
                        </td>
                      </tr>
                      <tr className="h-[60px] bg-white border-b border-neutral-200">
                        <td className="px-4 text-neutral-900">3</td>
                        <td className="px-4 text-neutral-900">Arvanzo Rifnazky</td>
                        <td className="px-4 text-neutral-900">-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Active</td>
                        <td className="px-4 text-neutral-900" align="center">
                          <EllipsisHorizontalIcon className="icon24" />
                        </td>
                      </tr>
                      <tr className="h-[60px] bg-white border-b border-neutral-200">
                        <td className="px-4 text-neutral-900">4</td>
                        <td className="px-4 text-neutral-900">Aswin Santosa</td>
                        <td className="px-4 text-neutral-900">-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Active</td>
                        <td className="px-4 text-neutral-900" align="center">
                          <EllipsisHorizontalIcon className="icon24" />
                        </td>
                      </tr>
                      <tr className="h-[60px] bg-white border-b border-neutral-200">
                        <td className="px-4 text-neutral-900">5</td>
                        <td className="px-4 text-neutral-900">Ilham Jaka Elandra</td>
                        <td className="px-4 text-neutral-900">-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Active</td>
                        <td className="px-4 text-neutral-900" align="center">
                          <EllipsisHorizontalIcon className="icon24" />
                        </td>
                      </tr>
                      <tr className="h-[60px] bg-white border-b border-neutral-200">
                        <td className="px-4 text-neutral-900">6</td>
                        <td className="px-4 text-neutral-900">Juanda Esa Putra</td>
                        <td className="px-4 text-neutral-900">-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Active</td>
                        <td className="px-4 text-neutral-900" align="center">
                          <EllipsisHorizontalIcon className="icon24" />
                        </td>
                      </tr>
                      <tr className="h-[60px] bg-white border-b border-neutral-200">
                        <td className="px-4 text-neutral-900">7</td>
                        <td className="px-4 text-neutral-900">Mohammad Fahmi Maulana</td>
                        <td className="px-4 text-neutral-900">-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Active</td>
                        <td className="px-4 text-neutral-900" align="center">
                          <EllipsisHorizontalIcon className="icon24" />
                        </td>
                      </tr>
                      <tr className="h-[60px] bg-white border-b border-neutral-200">
                        <td className="px-4 text-neutral-900">8</td>
                        <td className="px-4 text-neutral-900">Musa Pardede</td>
                        <td className="px-4 text-neutral-900">-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Active</td>
                        <td className="px-4 text-neutral-900" align="center">
                          <EllipsisHorizontalIcon className="icon24" />
                        </td>
                      </tr>
                      <tr className="h-[60px] bg-white border-b border-neutral-200">
                        <td className="px-4 text-neutral-900">9</td>
                        <td className="px-4 text-neutral-900">Piki Rahmadi</td>
                        <td className="px-4 text-neutral-900">-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Active</td>
                        <td className="px-4 text-neutral-900" align="center">
                          <EllipsisHorizontalIcon className="icon24" />
                        </td>
                      </tr>
                      <tr className="h-[60px] bg-white">
                        <td className="px-4 text-neutral-900">10</td>
                        <td className="px-4 text-neutral-900">Sonia</td>
                        <td className="px-4 text-neutral-900">-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Rp. 1.000.000,-</td>
                        <td className="px-4 text-neutral-900">Active</td>
                        <td className="px-4 text-neutral-900" align="center">
                          <EllipsisHorizontalIcon className="icon24" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-wrap gap-4 justify-center sm:justify-between items-center text-sm mt-4">
                  <div>
                    <div>
                      Rows per Page
                      <select className="bg-white border border-primary-500 text-neutral-900 text-sm font-medium p-2 rounded-lg shadow transition-all hover:bg-primary-50/30 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none mx-2">
                        <option>10</option>
                        <option>25</option>
                      </select>
                      1-10 of 100 records
                    </div>
                  </div>
                  <div>
                    <div>
                      <button className="text-primary-main text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">
                        &#171;
                      </button>
                      <button className="text-primary-main text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">
                        &#8249;
                      </button>
                      <button className="bg-primary-main text-white text-sm font-medium py-2 px-4 rounded-lg shadow transition-all hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">
                        1
                      </button> 
                      <button className="text-primary-main text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">
                        2
                      </button>
                      <button className="text-primary-main text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">
                        3
                      </button>
                      <button className="text-primary-main text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">
                        &#8250;
                      </button>
                      <button className="text-primary-main text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">
                        &#187;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Table End */}
        </div>
      </div>
      <div className="content-right">
      <h6>on this page</h6>
        <ul>
          <li><BtnIndex reference={toBasicTable} label="basic table" /></li>
          <li><BtnIndex reference={toScrollingTable} label="scrolling table" /></li>
        </ul>
      </div>
    </>
  );
};

export default Tables;
