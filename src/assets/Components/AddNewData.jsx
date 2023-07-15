import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

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
    img:"",
  });
  const navigation = useNavigate();



  // function handleChangess(e) {
  //     const imgUrl = URL.createObjectURL(e.target.files[0]);
  //     setData ({...data , img : imgUrl });
      
  // }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const oldData = getData();
    const id = uuidv4().slice(0, 4);
    console.log(id);
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
      massage: "",
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
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                massage
              </label>
              <textarea
                required
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                id="grid-password"
                type="text"
                placeholder="massage"
                onChange={handleChange}
                value={data.massage}
                name="massage"
              ></textarea>
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
                  ].map((val, i) => {
                    return (
                      <option key={val.slice(0, 2)} value={val}>
                        {val}
                      </option>
                    );
                  })}
                </select>
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
              {["Male", "Female"].map((label, i) => {
                return (
                  <div key={i + 1}>
                    <input
                      type="radio"
                      name="gender"
                      id={label}
                      value={label}
                      className="peer hidden"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor={label}
                      className="block cursor-pointer select-none rounded-[5px] p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                    >
                      {label}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div className="-mx-3 md:flex mb-6">
            <input type="file" onChange={handleChangess} />
          </div> */}

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
