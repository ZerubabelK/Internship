import React from "react";
import NavBar from "../components/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { useContact } from "../context/Provider";

// the contact interface
export interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
}

// the contact context value interface
const Contact: React.FC = () => {
  const { contacts, deleteContact } = useContact();
  const navigator = useNavigate(); // navigator hook for navigation to other pages
  return (
    <div>
      <NavBar />
      <div className="w-3/4 mx-auto">
        <div className="w-full bg-gradient-to-r from-cyan-200 to-blue-200 min-h-[25vh] rounded-xl"></div>
        <div className="container p-3 flex justify-between my-3">
          <h1 className="text-center text-3xl">Contacts</h1>
          <div className="flex justify-center gap-3">
            <Link
              to="/contact/add"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Contact
            </Link>
          </div>
        </div>
        <div>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Address</th>
                <th className="px-4 py-2 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr
                  key={contact.id}
                  className={
                    index % 2 ? "bg-gray-100 cursor-pointer" : "cursor-pointer"
                  }
                  onClick={(_) => navigator(`/contact/${contact.id}`)}
                >
                  <td className="border px-4 py-2">{contact.name}</td>
                  <td className="border px-4 py-2">{contact.phone}</td>
                  <td className="border px-4 py-2">{contact.email}</td>
                  <td className="border px-4 py-2">{contact.address}</td>
                  <td className="border px-4 py-2 flex justify-evenly">
                    <Link
                      onClick={(e) => e.stopPropagation()}
                      to={`/contact/edit/${contact.id}`}
                    >
                      edit
                    </Link>
                    <button
                      onClick={(e) => {
                        deleteContact(contact.id);
                        e.stopPropagation();
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contact;
