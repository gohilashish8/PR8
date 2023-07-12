import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const getData = () => {
  const data = localStorage.getItem("data");
  if (data != null) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
const AddNewData = () => {
  const [data, setData] = useState({
    name: "",
    number: "",
    email: "",
    std: "",
    grno: "",
    gender: "",
    rollNO: "",
    city: "",
  });
  const navigation = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const oldData = getData();
    const id = oldData.length + 1001;
    const finaldata = { ...data, id };
    const latestData = [...oldData, finaldata];
    console.log(latestData);
    localStorage.setItem("data", JSON.stringify(latestData));
    setData({
      name: "",
      number: "",
      email: "",
      std: "",
      grno: "",
      gender: "",
      rollNO: "",
      city: "",
    });
    navigation("/viewdata");
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-4">
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Name
              </label>
              <input
                required
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                id="grid-password"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                value={data.name}
                name="name"
              />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Email
              </label>
              <input
                required
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="grid-first-name"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                value={data.email}
                name="email"
              />
            </div>
            <div className="md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Mobile Number
              </label>
              <input
                required
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="grid-last-name"
                type="number"
                placeholder="Number"
                onChange={handleChange}
                value={data.number}
                name="number"
              />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                city
              </label>
              <input
                required
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                id="grid-password"
                type="text"
                placeholder="city"
                onChange={handleChange}
                value={data.city}
                name="city"
              />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-2">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Roll No.
              </label>
              <input
                required
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="grid-city"
                type="number"
                placeholder="Roll Number"
                onChange={handleChange}
                value={data.rollNO}
                name="rollNO"
              />
            </div>
            <div className="md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Standard
              </label>
              <div className="relative">
                

                <select
                    name="std"
                    onChange={handleChange}
                    className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded group:"
                    id="grid-state"
                    checked={data.std}
                  >
                    <option value="0">Select</option>
                    {[
                      "1st",
                      "2nd",
                      "3th",
                      "4th",
                      "5th",
                      "6th",
                      "7th",
                      "8th",
                      "9th",
                      "10th",
                      "11th",
                      "12th",
                    ].map((val) => {
                      return (
                        
                          <option value={val} >{val}</option>
                    )
                    } ) }
                  </select>
                <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker right-0 top-[50%] translate-y-[-50%] group-focus:rotate-180 ">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Gr. No.
              </label>
              <input
                required
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="grid-zip"
                type="number"
                placeholder="gr no."
                onChange={handleChange}
                value={data.grno}
                name="grno"
              />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
        
            <div className="md:w-full px-3 flex gap-5">
              {["Male", "Female"].map((label) => {
                return (
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      id={label}
                      value={label}
                      class="peer hidden"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor={label}
                      class="block cursor-pointer select-none rounded-[5px] p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                    >
                      {label}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3 flex justify-center">
              <button
                type="submit"
                className="text-[18px] border-2 border-black w-[150px] py-1 rounded-lg font-semibold duration-500 hover:text-white hover:bg-black"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewData;
