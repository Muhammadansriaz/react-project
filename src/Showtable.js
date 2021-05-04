import React from "react";
const Showtable = ({ data, arr, dell_item, edit_item }) => {
  return (
    <div>
      {data.map((xyz, ind) => {
        return (
          <table className="table">
            <tbody>
              <tr key={ind}>
                <td>{xyz.name}</td>
                <td>{xyz.email}</td>
                <td>{xyz.amount}</td>
                <td>
                  <img width="100px" height="80px" src={xyz.img}></img>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dell_item(ind);
                    }}
                  >
                    Dell
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      edit_item(ind);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}

      {arr.map((abc, ind) => {
        return (
          <table className="table">
            <tbody>
              <tr key={ind}>
                <td>{abc.name}</td>
                <td>{abc.email}</td>
                <td>{abc.amount}</td>
                <td>
                  <img
                    width="100px"
                    height="80px"
                    src={abc.img}
                    alt="img"
                  ></img>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dell_item(ind);
                    }}
                  >
                    Dell
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      edit_item(ind);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default Showtable;
