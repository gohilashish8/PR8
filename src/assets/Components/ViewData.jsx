import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const getData = () => {
  const data = localStorage.getItem("data");
  if (data != null) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
const ViewData = () => {
  const [data, setData] = useState([]);
  const getFinalData = () => {
    setData(getData());
  };
  useEffect(() => {
    getFinalData();
  }, []);
  const handleDelete = (e) => {
    const newData = data.filter((res) => res.id !== e);
    localStorage.setItem("data", JSON.stringify(newData));
    getFinalData();
  };

  const handleFillter = () => {
   

  }
  return (
    <>
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <div className=" flex items-center justify-center font-sans overflow-hidden">
            <div className="w-full">
              <div className="bg-white shadow-md rounded my-6">






                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-center">index</th>
                      <th className="py-3 px-6 text-left">Name</th>
                      <th className="py-3 px-6 text-left">Number</th>
                      <th className="py-3 px-6 text-center">Email</th>
                      <th className="py-3 px-6 text-center">Std.</th>
                      <th className="py-3 px-6 text-center">city</th>
                      <th className="py-3 px-6 text-center">Roll no.</th>
                      <th className="py-3 px-6 text-center">gr no.</th>
                      <th className="py-3 px-6 text-center">gender</th>
                      <th className="py-3 px-6 text-center">Option</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {data != null ? data.map((res, i) => {
                      return (
                        <tr
                          className="border-b border-gray-200 hover:bg-gray-100"
                          key={res.id}
                        >
                          <td className="py-3 px-6 text-center whitespace-nowrap">
                            {i + 1}
                          </td>
                          <td className="py-3 px-6 text-center">{res.name}</td>
                          <td className="py-3 px-6 text-center">
                            {res.number}
                          </td>
                          <td className="py-3 px-6 text-center">{res.email}</td>
                          <td className="py-3 px-6 text-center">{res.std}</td>
                          <td className="py-3 px-6 text-center">{res.city}</td>
                          <td className="py-3 px-6 text-center">
                            {res.rollNO}
                          </td>
                          <td className="py-3 px-6 text-center">{res.grno}</td>
                          <td className="py-3 px-6 text-center">
                            <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                              {res.gender}
                            </span>
                          </td>
                          <td className="py-3 px-6 text-center">
                            <div className="flex item-center justify-center gap-5">
                              <Link to={`/editdata/${res.id}`}>
                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    />
                                  </svg>
                                </div>
                              </Link>
                              <div
                                className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer"
                                onClick={() => handleDelete(res.id)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    }) : <div> No Data found</div> }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewData;
