import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  const [sortColumn, setSortColumn] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterStd, setFilterStd] = useState("all");
  const [eaxtra, setExtra] = useState(getData());
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const searchInputRef = useRef(null);

  const handleDropdownToggle = (id) => {
    setOpenDropdown(id === openDropdown ? null : id);
  };

  const getFinalData = () => {
    setData(getData());
  };

  useEffect(() => {
    getFinalData();
  }, []);

  const handleDelete = (id) => {
    const newData = getData().filter((res) => res.id !== id);
    localStorage.setItem("data", JSON.stringify(newData));

    const isRecordInFilteredData = data.some((res) => res.id === id);

    if (isRecordInFilteredData) {
      setData(newData);
      setExtra(newData);
      searchInputRef.current.value = "";
      setFilterStd("all");
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredData = getData().filter((item) => {
      const itemName = item.name.toLowerCase();
      return itemName.includes(searchTerm);
    });
    setData(filteredData);
    console.log(filteredData);
    setExtra(filteredData);
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const sortedData = data.sort((a, b) => {
    const valueA = a[sortColumn];
    const valueB = b[sortColumn];
    if (valueA === "undefined" || valueB === "undefined") {
      return 0;
    }

    let comparison = 0;
    if (sortColumn === "number") {
      comparison = valueA - valueB;
    } else {
      comparison = valueA.localeCompare(valueB);
    }

    return sortOrder === "asc" ? comparison : -comparison;
  });

  const handleFilter = (e) => {
    const selectedStd = e.target.value;
    setFilterStd(selectedStd);
    if (selectedStd === "all") {
      getFinalData();
    } else {
      const filteredData = getData().filter((item) => item.std === selectedStd);
      setData(filteredData);
    }
  };

  const filterData = eaxtra;
  const uniqueFilterData = [...new Set(filterData.map((val) => val.std))];

  const hendleNavigate = (res) => {
    navigate("/singledata", { state: res });
  };

  return (
    <>
      <div className="container mx-auto">
        <div>
          <div className=" flex items-center justify-center font-sans">
            <div className="w-full">
              <div className="my-2">
                <label className="text-sm font-medium text-gray-900 mr-2">
                  Filter by Std:
                </label>
                <select
                  onChange={handleFilter}
                  value={filterStd}
                  className="p-2 border w-[120px] border-gray-300 rounded"
                >
                  <option value="all">All</option>
                  {uniqueFilterData.map((std) => (
                    <option key={std} value={std}>
                      {std}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-white  rounded my-6">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 my-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search here..."
                    onChange={handleSearch}
                    ref={searchInputRef}
                  />
                </div>
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-center">index</th>
                      <th className="py-3 px-6 text-left">
                        <button
                          onClick={() => handleSort("name")}
                          className="flex items-center justify-center mx-auto capitalize cursor-pointer"
                        >
                          NAME
                          {sortColumn === "name" && (
                            <span className="ml-1">
                              {sortOrder === "asc" ? "▲" : "▼"}
                            </span>
                          )}
                        </button>
                      </th>

                      <th className="py-3 px-6 text-center">
                        <button
                          onClick={() => handleSort("number")}
                          className="flex items-center justify-center mx-auto capitalize cursor-pointer"
                        >
                          NUMBER
                          {sortColumn === "number" && (
                            <span className="ml-1">
                              {sortOrder === "asc" ? "▲" : "▼"}
                            </span>
                          )}
                        </button>
                      </th>

                      <th className="py-3 px-6 text-center">
                        <button
                          onClick={() => handleSort("email")}
                          className="flex items-center justify-center mx-auto capitalize cursor-pointer"
                        >
                          EMAIL
                          {sortColumn === "email" && (
                            <span className="ml-1">
                              {sortOrder === "asc" ? "▲" : "▼"}
                            </span>
                          )}
                        </button>
                      </th>
                      <th className="py-3 px-6 text-center">
                        <button
                          onClick={() => handleSort("std")}
                          className="flex items-center justify-center mx-auto capitalize cursor-pointer"
                        >
                          STD.
                          {sortColumn === "std" && (
                            <span className="ml-1">
                              {sortOrder === "asc" ? "▲" : "▼"}
                            </span>
                          )}
                        </button>
                      </th>
                      <th className="py-3 px-6 text-center">
                        <button
                          onClick={() => handleSort("city")}
                          className="flex items-center justify-center mx-auto capitalize cursor-pointer"
                        >
                          CITY
                          {sortColumn === "city" && (
                            <span className="ml-1">
                              {sortOrder === "asc" ? "▲" : "▼"}
                            </span>
                          )}
                        </button>
                      </th>
                      <th className="py-3 px-6 text-center">
                        <button
                          onClick={() => handleSort("rollNO")}
                          className="flex items-center justify-center mx-auto capitalize cursor-pointer"
                        >
                          ROLL NO.
                          {sortColumn === "rollNO" && (
                            <span className="ml-1">
                              {sortOrder === "asc" ? "▲" : "▼"}
                            </span>
                          )}
                        </button>
                      </th>
                      <th className="py-3 px-6 text-center">
                        <button
                          onClick={() => handleSort("grno")}
                          className="flex items-center justify-center mx-auto capitalize cursor-pointer"
                        >
                          GR NO.
                          {sortColumn === "grno" && (
                            <span className="ml-1">
                              {sortOrder === "asc" ? "▲" : "▼"}
                            </span>
                          )}
                        </button>
                      </th>
                      <th className="py-3 px-6 text-center">Gender</th>
                      <th className="py-3 px-6 text-center">Option</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {sortedData.length > 0 ? (
                      sortedData.map((res, i) => {
                        return (
                          <tr
                            className="border-b border-gray-200 hover:bg-gray-100"
                            key={res.id}
                          >
                            <td className="py-3 px-6 text-center whitespace-nowrap">
                              {i + 1}
                            </td>
                            <td className="py-3 px-6 text-center">
                              {res.name}
                            </td>
                            <td className="py-3 px-6 text-center">
                              {res.number}
                            </td>
                            <td className="py-3 px-6 text-center">
                              {res.email}
                            </td>
                            <td className="py-3 px-6 text-center">{res.std}</td>
                            <td className="py-3 px-6 text-center">
                              {res.city}
                            </td>
                            <td className="py-3 px-6 text-center">
                              {res.rollNO}
                            </td>
                            <td className="py-3 px-6 text-center">
                              {res.grno}
                            </td>
                            <td className="py-3 px-6 text-center">
                              <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                                {res.gender}
                              </span>
                            </td>
                            <td className="py-3 px-6 text-center relative">
                              <div className="flex item-center justify-center gap-5">
                                <button
                                  id={`dropdownMenuIconButton-${res.id}`}
                                  onClick={() => handleDropdownToggle(res.id)}
                                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg  focus:ring-4 focus:outline-none "
                                  type="button"
                                >
                                  <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 4 15"
                                  >
                                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                  </svg>
                                </button>

                                {openDropdown === res.id && (
                                  <div
                                    id={`dropdownDots-${res.id}`}
                                    className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-[120px] absolute top-2 right-1 mt-10"
                                  >
                                    <ul
                                      aria-labelledby={`dropdownMenuIconButton-${res.id}`}
                                    >
                                      <Link to={`/editdata/${res.id}`}>
                                        <div className=" mr-2 cursor-pointer flex py-2 px-2 hover:bg-slate-200  w-full ">
                                          <div>
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                              className="w-[20px] h-[20px] inline mr-2"
                                            >
                                              <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                              />
                                            </svg>
                                          </div>
                                          <div>Edit</div>
                                        </div>
                                      </Link>

                                      <div
                                        className=" mr-2 transform flex cursor-pointer py-2 px-2 hover:bg-slate-200  w-full "
                                        onClick={() => handleDelete(res.id)}
                                      >
                                        <div>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="w-[20px] h-[20px] inline mr-2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            />
                                          </svg>
                                        </div>
                                        <div> Delete </div>
                                      </div>

                                      <div
                                        onClick={() => hendleNavigate(res)}
                                        className=" mr-2 transform flex cursor-pointer py-2 px-2 hover:bg-slate-200  w-full"
                                      >
                                        <div>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="w-[20px] h-[20px] inline mr-2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                          </svg>
                                        </div>
                                        <div> View </div>
                                      </div>
                                    </ul>
                                  </div>
                                )}
                              </div>
                              <div className="flex item-center justify-center gap-5"></div>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td className="py-3 px-6 text-center" colSpan="10">
                          No Data found
                        </td>
                      </tr>
                    )}
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
