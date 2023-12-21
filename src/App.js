import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="about" element={<About />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="contact" element={<Contact />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="*" element={<Error_404 />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
