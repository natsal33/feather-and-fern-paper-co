// ImageDetail.js
import { useParams } from "react-router-dom";

const ImageDetail = () => {
  const { imageId } = useParams();

  return (
    <div>
      <h2>Image Detail</h2>
      <p>Display details for image with ID: {imageId}</p>
    </div>
  );
};

export default ImageDetail;
