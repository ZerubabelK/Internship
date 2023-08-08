import React from "react";
import { useContact } from "../context/Provider";
import NavBar from "../components/NavBar";
import { Contact } from "./Contact";
import { useNavigate } from "react-router-dom";

// the add contact page
const AddContact: React.FC = () => {
  const { addContact } = useContact(); // addContact function from the contact context

  // the state variables for the form
  const [name, setName] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");

  const navigator = useNavigate(); // navigator hook for navigation to other pages

  // handle the submit of the form
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // create the contact object
    const contact: Contact = {
      id: Math.floor(Math.random() * 1000 + 1),
      name,
      phone,
      email,
      address,
    };

    addContact(contact);
    navigator("/contact");
  };

  return (
    <div>
      <NavBar />
      <div className="w-3/4 mx-auto">
        <div className="w-full bg-gradient-to-r from-cyan-200 to-blue-200 min-h-[25vh] rounded-xl"></div>
        <div className="container p-3 justify-between my-3">
          <h1 className="text-center text-3xl">Add Contact</h1>
          <div className="w-full my-5">
            <div className="w-1/2 mx-auto">
              <div className="mb-3 grid grid-cols-2">
                <label htmlFor="name" className="">
                  Name
                </label>
                <input
                  type="text"
                  className="border px-3 py-1 rounded"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3 grid grid-cols-2">
                <label htmlFor="phone" className="">
                  Phone
                </label>
                <input
                  type="text"
                  className="border px-3 py-1 rounded"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-3 grid grid-cols-2">
                <label htmlFor="email" className="">
                  Email
                </label>
                <input
                  type="text"
                  className="border px-3 py-1 rounded"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3 grid grid-cols-2">
                <label htmlFor="address" className="">
                  Address
                </label>
                <input
                  type="text"
                  className="border px-3 py-1 rounded"
                  id="address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="flex justify-center my-5">
                <button
                  type="button"
                  className="bg-sky-500 px-4 py-1 self-center rounded text-white"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
