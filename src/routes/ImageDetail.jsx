// ImageDetail.js
import { useParams } from "react-router-dom";

const ImageDetail = () => {
  const { imageId } = useParams();

  console.log("made it into route component");

  // Fetch image details based on imageId
  // You can use this information to render the details of the selected image

  return (
    <div>
      <h2>Image Detail</h2>
      <p>Display details for image with ID: {imageId}</p>
    </div>
  );
};

export default ImageDetail;
