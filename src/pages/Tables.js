import { EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { React } from "react";
import "../styles/components/tables.css";

const Tables = () => {
  return (
    <>
      <div className="pb-4 mb-8 border-b border-neutral-200 dark:border-neutral-800">
        <h1 className="mb-4">Table</h1>
        <p className="leading-relaxed dark:text-neutral-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          suscipit magnam minima. Beatae deserunt perferendis aut ipsum labore,
          nihil laborum sint, vitae aspernatur dolor quibusdam velit fugit
          dolores cum, ad possimus maiores nulla? Ut, minus? Natus hic
          necessitatibus, sapiente consectetur nihil ea suscipit itaque facere
          recusandae architecto. Veniam, fuga nam?
        </p>
      </div>

      {/* Table Start */}
      <div>
        <h3 className="mb-8">Basic Table</h3>
        <div className="p-4 w-full rounded-t-xl border border-neutral-200 dark:border-neutral-600">
          <table className="w-full table-auto text-sm">
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
                <td className="px-4">1</td>
                <td className="px-4">Ahmad Hilwan Diwa</td>
                <td className="px-4">-</td>
                <td className="px-4">Rp. 1.000.000,-</td>
                <td className="px-4">Active</td>
                <td className="px-4" align="center"><EllipsisHorizontalIcon className="icon24" /></td>
              </tr>
              <tr className="h-[60px] bg-white border-b border-neutral-200">
                <td className="px-4">2</td>
                <td className="px-4">Arpin Hervian</td>
                <td className="px-4">-</td>
                <td className="px-4">Rp. 1.000.000,-</td>
                <td className="px-4">Active</td>
                <td className="px-4" align="center"><EllipsisHorizontalIcon className="icon24" /></td>
              </tr>
              <tr className="h-[60px] bg-white border-b border-neutral-200">
                <td className="px-4">3</td>
                <td className="px-4">Arvanzo Rifnazky</td>
                <td className="px-4">-</td>
                <td className="px-4">Rp. 1.000.000,-</td>
                <td className="px-4">Active</td>
                <td className="px-4" align="center"><EllipsisHorizontalIcon className="icon24" /></td>
              </tr>
              <tr className="h-[60px] bg-white border-b border-neutral-200">
                <td className="px-4">4</td>
                <td className="px-4">Aswin Santosa</td>
                <td className="px-4">-</td>
                <td className="px-4">Rp. 1.000.000,-</td>
                <td className="px-4">Active</td>
                <td className="px-4" align="center"><EllipsisHorizontalIcon className="icon24" /></td>
              </tr>
              <tr className="h-[60px] bg-white border-b border-neutral-200">
                <td className="px-4">5</td>
                <td className="px-4">Ilham Jaka Elandra</td>
                <td className="px-4">-</td>
                <td className="px-4">Rp. 1.000.000,-</td>
                <td className="px-4">Active</td>
                <td className="px-4" align="center"><EllipsisHorizontalIcon className="icon24" /></td>
              </tr>
              <tr className="h-[60px] bg-white border-b border-neutral-200">
                <td className="px-4">6</td>
                <td className="px-4">Juanda Esa Putra</td>
                <td className="px-4">-</td>
                <td className="px-4">Rp. 1.000.000,-</td>
                <td className="px-4">Active</td>
                <td className="px-4" align="center"><EllipsisHorizontalIcon className="icon24" /></td>
              </tr>
              <tr className="h-[60px] bg-white border-b border-neutral-200">
                <td className="px-4">7</td>
                <td className="px-4">Mohammad Fahmi Maulana</td>
                <td className="px-4">-</td>
                <td className="px-4">Rp. 1.000.000,-</td>
                <td className="px-4">Active</td>
                <td className="px-4" align="center"><EllipsisHorizontalIcon className="icon24" /></td>
              </tr>
              <tr className="h-[60px] bg-white border-b border-neutral-200">
                <td className="px-4">8</td>
                <td className="px-4">Musa Pardede</td>
                <td className="px-4">-</td>
                <td className="px-4">Rp. 1.000.000,-</td>
                <td className="px-4">Active</td>
                <td className="px-4" align="center"><EllipsisHorizontalIcon className="icon24" /></td>
              </tr>
              <tr className="h-[60px] bg-white border-b border-neutral-200">
                <td className="px-4">9</td>
                <td className="px-4">Piki Rahmadi</td>
                <td className="px-4">-</td>
                <td className="px-4">Rp. 1.000.000,-</td>
                <td className="px-4">Active</td>
                <td className="px-4" align="center"><EllipsisHorizontalIcon className="icon24" /></td>
              </tr>
              <tr className="h-[60px] bg-white border-b border-neutral-200">
                <td className="px-4 rounded-bl">10</td>
                <td className="px-4">Sonia</td>
                <td className="px-4">-</td>
                <td className="px-4">Rp. 1.000.000,-</td>
                <td className="px-4">Active</td>
                <td className="px-4 rounded-br" align="center"><EllipsisHorizontalIcon className="icon24" /></td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-between items-center text-sm mt-4">
            <div>
              <div>Rows per Page
                <select className="bg-white border border-primary-500 text-primary-500 text-sm font-medium p-2 rounded-lg shadow transition-all hover:bg-primary-50/30 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none mx-2">
                  <option>10</option>
                  <option>25</option>
                </select>1-10 of 100 records</div>
            </div>
            <div>
              <div>
              <button class="text-primary-500 text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">&#171;</button>
              <button class="text-primary-500 text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">&#8249;</button>
              <button class="bg-primary-main text-white text-sm font-medium py-2 px-4 rounded-lg shadow transition-all hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">1</button>
              <button class="text-primary-500 text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">2</button>
              <button class="text-primary-500 text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">3</button>
              <button class="text-primary-500 text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">&#8250;</button>
              <button class="text-primary-500 text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">&#187;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Table End */}

      {/* Table Start */}
      <div>
        <h3 className="my-8">Scrolling Table</h3>
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
                  <td className="px-4">1</td>
                  <td className="px-4">Ahmad Hilwan Diwa</td>
                  <td className="px-4">-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Active</td>
                  <td className="px-4" align="center"><EllipsisHorizontalIcon className="icon24" /></td>
                </tr>
                <tr className="h-[60px] bg-white border-b border-neutral-200">
                  <td className="px-4">2</td>
                  <td className="px-4">Arpin Hervian</td>
                  <td className="px-4">-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Active</td>
                  <td className="px-4" align="center"><EllipsisHorizontalIcon className="icon24" /></td>
                </tr>
                <tr className="h-[60px] bg-white border-b border-neutral-200">
                  <td className="px-4">3</td>
                  <td className="px-4">Arvanzo Rifnazky</td>
                  <td className="px-4">-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Active</td>
                  <td className="px-4" align="center"><EllipsisHorizontalIcon className="icon24" /></td>
                </tr>
                <tr className="h-[60px] bg-white border-b border-neutral-200">
                  <td className="px-4">4</td>
                  <td className="px-4">Aswin Santosa</td>
                  <td className="px-4">-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Active</td>
                  <td className="px-4" align="center"><EllipsisHorizontalIcon className="icon24" /></td>
                </tr>
                <tr className="h-[60px] bg-white border-b border-neutral-200">
                  <td className="px-4">5</td>
                  <td className="px-4">Ilham Jaka Elandra</td>
                  <td className="px-4">-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Active</td>
                  <td className="px-4" align="center"><EllipsisHorizontalIcon className="icon24" /></td>
                </tr>
                <tr className="h-[60px] bg-white border-b border-neutral-200">
                  <td className="px-4">6</td>
                  <td className="px-4">Juanda Esa Putra</td>
                  <td className="px-4">-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Active</td>
                  <td className="px-4" align="center"><EllipsisHorizontalIcon className="icon24" /></td>
                </tr>
                <tr className="h-[60px] bg-white border-b border-neutral-200">
                  <td className="px-4">7</td>
                  <td className="px-4">Mohammad Fahmi Maulana</td>
                  <td className="px-4">-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Active</td>
                  <td className="px-4" align="center"><EllipsisHorizontalIcon className="icon24" /></td>
                </tr>
                <tr className="h-[60px] bg-white border-b border-neutral-200">
                  <td className="px-4">8</td>
                  <td className="px-4">Musa Pardede</td>
                  <td className="px-4">-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Active</td>
                  <td className="px-4" align="center"><EllipsisHorizontalIcon className="icon24" /></td>
                </tr>
                <tr className="h-[60px] bg-white border-b border-neutral-200">
                  <td className="px-4">9</td>
                  <td className="px-4">Piki Rahmadi</td>
                  <td className="px-4">-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Active</td>
                  <td className="px-4" align="center"><EllipsisHorizontalIcon className="icon24" /></td>
                </tr>
                <tr className="h-[60px] bg-white border-b border-neutral-200">
                  <td className="px-4">10</td>
                  <td className="px-4">Sonia</td>
                  <td className="px-4">-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Rp. 1.000.000,-</td>
                  <td className="px-4">Active</td>
                  <td className="px-4" align="center"><EllipsisHorizontalIcon className="icon24" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center text-sm mt-4">
            <div>
              <div>Rows per Page
                <select className="bg-white border border-primary-500 text-primary-500 text-sm font-medium p-2 rounded-lg shadow transition-all hover:bg-primary-50/30 hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none mx-2">
                  <option>10</option>
                  <option>25</option>
                </select>1-10 of 100 records</div>
            </div>
            <div>
              <div>
              <button class="text-primary-500 text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">&#171;</button>
              <button class="text-primary-500 text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">&#8249;</button>
              <button class="bg-primary-main text-white text-sm font-medium py-2 px-4 rounded-lg shadow transition-all hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 focus:shadow-none focus:outline-none">1</button>
              <button class="text-primary-500 text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">2</button>
              <button class="text-primary-500 text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">3</button>
              <button class="text-primary-500 text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">&#8250;</button>
              <button class="text-primary-500 text-sm font-medium py-2 px-4 rounded-lg transition-all hover:text-primary-600 focus:ring-4 focus:ring-blue-300 focus:text-primary-700 focus:outline-none">&#187;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Table End */}

    </>
  );
};

export default Tables;
