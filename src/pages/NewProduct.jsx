import { useState } from "react";
import { addNewProduct } from "../api/firebase";
import { uploadImage } from "../api/uploader";
import Button from "../components/ui/Button";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    console.log(value);
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(file).then((url) => {
      console.log(product);
      addNewProduct(product, url);
    });
  };

  return (
    <section>
      {file && <img src={URL.createObjectURL(file)} alt="local file" />}
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          id="product"
          name="file"
          required
          accept="image/*"
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ""}
          placeholder="Product name"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={product.price ?? ""}
          required
          onChange={handleChange}
          placeholder="Price"
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ""}
          onChange={handleChange}
          required
          placeholder="Category"
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ""}
          onChange={handleChange}
          required
          placeholder="Product descriptions"
        />
        <input
          type="text"
          name="options"
          value={product.options ?? ""}
          onChange={handleChange}
          required
          placeholder="Options (seperate by comma)"
        />
        <Button text={"Register"} />
      </form>
    </section>
  );
}
