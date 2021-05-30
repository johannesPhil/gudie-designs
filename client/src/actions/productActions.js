import axios from "axios";

export const uploadProduct = (formData) => {
	axios.post("/api/products/", formData).then((res) => console.log(res));
};
