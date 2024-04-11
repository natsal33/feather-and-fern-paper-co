import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
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
import AdminLogin from "./routes/AdminLogin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="/" element={<Root />}>
      <Route index="true" element={<Home />} />
      <Route
        exact
        path="/gallery"
        element={<Gallery />}
        loader={galleryLoader}
      />
      <Route
        exact
        path="/gallery/:albumName"
        element={<PhotoAlbum />}
        loader={photoAlbumLoader}
      />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route
        exact
        path="/terms-and-conditions"
        element={<TermsAndConditions />}
      />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/faq" element={<FAQ />} />
      <Route exact path="/admin-login" element={<AdminLogin/>}/>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
