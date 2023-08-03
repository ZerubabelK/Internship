import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/profile";
import Hooks from "./pages/hooks";
import Contact from "./pages/Contact";
import ContactDetail from "./pages/ContactDetail";
import AddContact from "./pages/AddContact";
import ContactProvider from "./context/Provider";
import EditContact from "./pages/EditContact";

// the router that will be used by the app to navigate between pages
const router = createBrowserRouter([
  {
    // this is the profile page
    path: "/",
    element: <Profile />,
  },
  {
    // this is the counter page
    path: "/hooks",
    element: <Hooks />,
  },
  {
    // this is the list page
    path: "/contact",
    element: <Contact />,
  },
  {
    // this is the detail page
    path: "/contact/:id",
    element: <ContactDetail />,
  },
  {
    // this is the add page
    path: "/contact/add",
    element: <AddContact />,
  },
  {
    // this is the edit page
    path: "/contact/edit/:id",
    element: <EditContact />,
  },
  {
    // this is the 404 page
    path: "*",
    element: (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Error</h1>
        <p className="text-gray-700 text-lg mb-4">
          Oops! Something went wrong. Please try again later.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go back
        </button>
      </div>
    ),
  },
]);

// the app component
const App: React.FC = () => (
  <ContactProvider>
    <RouterProvider router={router} />
  </ContactProvider>
);

export default App;
