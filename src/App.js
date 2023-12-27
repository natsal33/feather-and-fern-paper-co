import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Error_404 from "./404-page";
import Root from "./routes/root";
import Home from "./routes/home";
import About from "./routes/about";
import PrivacyPolicy from "./routes/privacy-policy";
import TermsAndConditions from "./routes/terms-conditions";
import Contact from "./routes/contact";
import FAQ from "./routes/faq";
import Gallery from "./routes/gallery";

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
        path: "gallery/*",
        element: <Gallery />,
        children: [
          {
            path: "view-album/:albumName",
            element: <About />,
          },
        ],
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index="true" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:albumName" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
