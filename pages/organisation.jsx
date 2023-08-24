import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../data/data.js";

const Orders = () => {
  const [items, setItems] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);

  const handleAddItem = () => {
    const newItem = {
      organisationName: "",
      accountName: "",
      address: "",
      email: "",
      GivenName: "",
      MiddleName: "",
      FamilyName: "",
      FullName: "",
      UserNote: "",
      ExternalUser: false,
      Address1: "",
      Address2: "",
      City: "",
      Region: "",
      Country: "",
    };
    setItems([...items, newItem]);
  };

  const handleChange = (e, index, field) => {
    const updatedItems = [...items];
    updatedItems[index][field] = e.target.value;
    setItems(updatedItems);
  };

  const handleSubmit = (index) => {
    const updatedItems = [...items];
    const submittedItem = updatedItems[index];
    setSubmittedData([...submittedData, submittedItem]);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between px-4 pt-4">
        <h2>ORGANISATIONS</h2>
        <h2>Welcome Back, Client</h2>
      </div>

      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="flex justify-center items-center   px-4 pt-4">
            <h2>Enter Details Here</h2>
          </div>
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className="bg-gray-50 hover:bg-gray-300 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex">
                  <p className="text-gray-600 sm:text-left text-right">
                    <label>
                      Organisation:
                      <input
                        type="text"
                        style={{ marginBottom: "1rem" }}
                        className="w-1/2"
                        value={item.organisationName}
                        onChange={(e) =>
                          handleChange(e, index, "organisationName")
                        }
                      />
                    </label>
                  </p>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  <label>
                    Email:
                    <input
                      type="text"
                      style={{ marginBottom: "1rem" }}
                      className="w-1/2"
                      value={item.email}
                      onChange={(e) => handleChange(e, index, "email")}
                    />
                  </label>
                </p>
                <p className="hidden md:flex">
                  <label>
                    Given Name:{" "}
                    <input
                      type="text"
                      style={{ marginBottom: "1rem" }}
                      className="w-1/2"
                      value={item.GivenName}
                      onChange={(e) => handleChange(e, index, "GivenName")}
                    />
                  </label>
                </p>
                <div className="sm:flex hidden justify-between items-center">
                  <label>
                    Middle Name:
                    <input
                      type="text"
                      style={{ marginBottom: "1rem" }}
                      className="w-1/2"
                      value={item.MiddleName}
                      onChange={(e) => handleChange(e, index, "MiddleName")}
                    />
                  </label>
                </div>
                <div className="flex">
                  <div className="pl-4">
                    <p className="text-gray-600 sm:text-left text-right">
                      <label>
                        Family Name:
                        <input
                          type="text"
                          style={{ marginBottom: "1rem" }}
                          className="w-1/2"
                          value={item.FamilyName}
                          onChange={(e) => handleChange(e, index, "FamilyName")}
                        />
                      </label>
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  <label>
                    Full Name:{" "}
                    <input
                      type="text"
                      style={{ marginBottom: "1rem" }}
                      className="w-1/2"
                      value={item.FullName}
                      onChange={(e) => handleChange(e, index, "FullName")}
                    />
                  </label>
                </p>
                <p className="hidden md:flex">
                  <label>
                    User Note :{" "}
                    <input
                      type="text"
                      style={{ marginBottom: "1rem" }}
                      className="w-1/2"
                      value={item.UserNote}
                      onChange={(e) => handleChange(e, index, "UserNote")}
                    />
                  </label>
                </p>
                <div className="sm:flex hidden justify-between items-center">
                  <label>
                    Address1 :{" "}
                    <input
                      type="text"
                      style={{ marginBottom: "1rem" }}
                      className="w-1/2"
                      value={item.Address1}
                      onChange={(e) => handleChange(e, index, "Address1")}
                    />
                  </label>
                </div>
                <div className="flex">
                  <div className="pl-4">
                    <p className="text-gray-600 sm:text-left text-right">
                      <label>
                        Address2:
                        <input
                          type="text"
                          style={{ marginBottom: "1rem" }}
                          className="w-1/2"
                          value={item.Address2}
                          onChange={(e) => handleChange(e, index, "Address2")}
                        />
                      </label>
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  <label>
                    City:{" "}
                    <input
                      type="text"
                      style={{ marginBottom: "1rem" }}
                      className="w-1/2"
                      value={item.City}
                      onChange={(e) => handleChange(e, index, "City")}
                    />
                  </label>
                </p>
                <p className="hidden md:flex">
                  <label>
                    Region:{" "}
                    <input
                      type="text"
                      style={{ marginBottom: "1rem" }}
                      className="w-1/2"
                      value={item.Region}
                      onChange={(e) => handleChange(e, index, "Region")}
                    />
                  </label>
                </p>
                <div className="sm:flex hidden justify-between items-center">
                  <label>
                    Country :
                    <input
                      type="text"
                      style={{ marginBottom: "1rem" }}
                      className="w-1/2"
                      value={item.Country}
                      onChange={(e) => handleChange(e, index, "Country")}
                    />
                  </label>
                  <button
                    className="rounded-lg bg-green-400 px-4 py-4 flex items-center justify-center text-center"
                    onClick={() => handleSubmit(index)}
                  >
                    Submit
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            className="rounded-lg bg-green-400 px-4 py-4 flex items-center justify-center text-center"
            onClick={handleAddItem}
          >
            Add
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3>Submitted Data:</h3>
        <ul>
          {submittedData.map((item, index) => (
            <li key={index}>
              Organisation Name: {item.organisationName}
              <br />
              Account Name: {item.accountName}
              <br />
              Address: {item.address}
              <br />
              Email: {item.email}
              <br />
              Given Name: {item.GivenName}
              <br />
              Middle Name: {item.MiddleName}
              <br />
              Family Name: {item.FamilyName}
              <br />
              Full Name: {item.FullName}
              <br />
              User Note: {item.UserNote}
              <br />
              External User: {item.ExternalUser.toString()}
              <br />
              Address 1: {item.Address1}
              <br />
              Address 2: {item.Address2}
              <br />
              City: {item.City}
              <br />
              Region: {item.Region}
              <br />
              Country: {item.Country}
              <br />
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Orders;
