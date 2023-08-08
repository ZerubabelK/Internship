import { useParams } from "react-router-dom";
import { useContact } from "../context/Provider";
import NavBar from "../components/NavBar";

const ContactDetail: React.FC = () => {
  const { id } = useParams<string>();
  const { contacts } = useContact();
  const contact = contacts.find((contact) => contact.id === Number(id)); // find the contact with the given id
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
                  disabled
                  value={contact?.name}
                  type="text"
                  className="border px-3 py-1 rounded"
                  id="name"
                />
              </div>
              <div className="mb-3 grid grid-cols-2">
                <label htmlFor="phone" className="">
                  Phone
                </label>
                <input
                  disabled
                  value={contact?.phone}
                  type="text"
                  className="border px-3 py-1 rounded"
                  id="phone"
                />
              </div>
              <div className="mb-3 grid grid-cols-2">
                <label htmlFor="email" className="">
                  Email
                </label>
                <input
                  disabled
                  value={contact?.email}
                  type="text"
                  className="border px-3 py-1 rounded"
                  id="email"
                />
              </div>
              <div className="mb-3 grid grid-cols-2">
                <label htmlFor="address" className="">
                  Address
                </label>
                <input
                  disabled
                  value={contact?.address}
                  type="text"
                  className="border px-3 py-1 rounded"
                  id="address"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
