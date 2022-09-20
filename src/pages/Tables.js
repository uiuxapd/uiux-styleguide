import { React } from "react";
import "../styles/components/tables.css"

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
        <div className="component-section flex-none">
          <div className="component-block">
            <table className="w-full table-auto text-sm">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ahmad Hilwan Diwa</td>
                  <td>-</td>
                  <td>Rp. 1.000.000,-</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Arpin Hervian</td>
                  <td>-</td>
                  <td>Rp. 1.000.000,-</td>
                  <td>Active</td> 
                </tr>
                <tr>
                  <td>3</td>
                  <td>Arvanzo Rifnazky</td>
                  <td>-</td>
                  <td>Rp. 1.000.000,-</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Aswin Santosa</td>
                  <td>-</td>
                  <td>Rp. 1.000.000,-</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Ilham Jaka Elandra</td>
                  <td>-</td>
                  <td>Rp. 1.000.000,-</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Juanda Esa Putra</td>
                  <td>-</td>
                  <td>Rp. 1.000.000,-</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Mohammad Fahmi Maulana</td>
                  <td>-</td>
                  <td>Rp. 1.000.000,-</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Musa Pardede</td>
                  <td>-</td>
                  <td>Rp. 1.000.000,-</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Piki Rahmadi</td>
                  <td>-</td>
                  <td>Rp. 1.000.000,-</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Sonia</td>
                  <td>-</td>
                  <td>Rp. 1.000.000,-</td>
                  <td>Active</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Table End */}
    </>
  );
};

export default Tables;
