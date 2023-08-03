// Import necessary packages
import React from "react";
import { Contact } from "../pages/Contact";

// the provider props interface
interface ProviderProps {
  children: React.ReactNode;
}

// the contact context value interface
interface ContactContextValue {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  updateContact: (
    id: number,
    name: string,
    phone: string,
    email: string,
    address: string
  ) => void;
  deleteContact: (id: number) => void;
}

// create the contact context
const ContactContext = React.createContext<ContactContextValue>({
  contacts: [],
  addContact: () => {},
  updateContact: () => {},
  deleteContact: () => {},
});

// create the useContact hook
export const useContact = () => React.useContext(ContactContext);

// the contact provider for wrapping the app
const ContactProvider: React.FC<ProviderProps> = ({ children }) => {
  // set the initial state of the contacts
  const [contacts, setContacts] = React.useState<Contact[]>([
    {
      id: 1,
      name: "John Doe",
      phone: "09123456789",
      email: "johndoe@mgial.com",
      address: "Manila",
    },
    {
      id: 2,
      name: "Jane Doe",
      phone: "09123456789",
      email: "janedoe@gmail.com",
      address: "Manila",
    },
    {
      id: 3,
      name: "John Smith",
      phone: "09123456789",
      email: "jognsmith@mgial.com",
      address: "Manila",
    },
  ]);

  // Implement the add, update, and delete contact functions
  const addContact = (contact: Contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  const updateContact = (
    id: number,
    name: string,
    phone: string,
    email: string,
    address: string
  ) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === id
          ? { ...contact, name, phone, email, address }
          : contact
      )
    );
  };

  const deleteContact = (id: number) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  // set the value of the context
  const value: ContactContextValue = {
    contacts,
    addContact,
    updateContact,
    deleteContact,
  };

  return (
    <ContactContext.Provider value={value}>
      <div className="space-y-5">{children}</div>
    </ContactContext.Provider>
  );
};

export default ContactProvider;
