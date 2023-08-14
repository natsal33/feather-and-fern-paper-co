import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Error_404 from "./404-page";
import Root from "./routes/root";
import Home from "./routes/home";
import About from "./routes/about";
import PrivacyPolicy from "./routes/privacy-policy";
import TermsAndConditions from "./routes/terms-conditions";
import Contact from "./routes/contact";
import FAQ from "./routes/faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error_404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
