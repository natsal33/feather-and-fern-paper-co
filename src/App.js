import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Error_404 from "./404-page";
import Root from "./routes/root";
import Home from "./routes/home";
import About from "./routes/about";
import PrivacyPolicy from "./routes/privacy-policy";
import TermsAndConditions from "./routes/terms-conditions";
import Contact from "./routes/contact";
import FAQ from "./routes/faq";
import Gallery, { loader as galleryLoader } from "./routes/gallery";
import PhotoAlbum, { loader as photoAlbumLoader } from "./routes/PhotoAlbum";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index="true" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} loader={galleryLoader} />
      <Route
        path="/gallery/:albumName"
        element={<PhotoAlbum />}
        loader={photoAlbumLoader}
      />
      <Route path="/about" element={<About />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
