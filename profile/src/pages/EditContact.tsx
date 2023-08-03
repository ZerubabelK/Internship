// import necessary modules
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContact } from "../context/Provider";
import NavBar from "../components/NavBar";

// the edit contact page
const EditContact: React.FC = () => {
  const { id } = useParams(); // get the id from the url
  const { contacts, updateContact } = useContact();
  const contact = contacts.find((contact) => contact.id === Number(id)); // find the contact with the given id

  // set the initial state of the contact
  const [name, setName] = React.useState<string>(contact?.name || "");
  const [phone, setPhone] = React.useState<string>(contact?.phone || "");
  const [email, setEmail] = React.useState<string>(contact?.email || "");
  const [address, setAddress] = React.useState<string>(contact?.address || "");

  const navigator = useNavigate(); // navigator hook for navigation to other pages

  // handle the update of the contact
  const handleUpdate = () => {
    updateContact(Number(id), name, phone, email, address);
    navigator("/contact");
  };
  return (
    <div>
      <NavBar />
      <div className="w-3/4 mx-auto">
        <div className="w-full bg-gradient-to-r from-cyan-200 to-blue-200 min-h-[25vh] rounded-xl"></div>
        <div className="container p-3 justify-between my-3">
          <h1 className="text-center text-3xl">Contact Detail</h1>
          <div className="w-full my-5">
            <div className="w-1/2 mx-auto">
              <div className="mb-3 grid grid-cols-2">
                <label htmlFor="name" className="">
                  Name
                </label>
                <input
                  value={name}
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
                  value={phone}
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
                  value={email}
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
                  value={address}
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
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
