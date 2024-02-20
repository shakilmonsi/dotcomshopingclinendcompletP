import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,

        category: data.category,
        size: data.size,
        color:data.color,
        price: parseFloat(data.price),
        recipe: data.recipe,

        demothre: res.data.data.display_url,
        demotwo: res.data.data.display_url,
        demoone: res.data.data.display_url,
        image: res.data.data.display_url,
      };
      //
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div>
      <SectionTitle
        heading="add an item"
        subHeading="What's new?"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>


            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">SIZE*</span>
              </label>
              <select
                {...register("size", { required: true })}
                className="select select-bordered w-full"
              >
                <option >
                  select size
                </option>
                <option value="salad">xl</option>
                <option value="pizza">l</option>
                <option value="soup">m</option>
                <option value="dessert">xxl</option>
                <option value="drinks">auto</option>
              </select>
            </div>

            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">color*</span>
              </label>
              <select
          
                {...register("color", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="">
                  Select a category
                </option>
                <option value="salad">red</option>
                <option value="pizza">green</option>
                <option value="soup">yallow</option>
                <option value="dessert">primary</option>
                <option value="drinks">auto</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>

          {/* //_____________________________img section _______________________________________________________ */}
          <div className="flex  pr-14  ">
            <div className="form-control w-full my-6">
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full my-6">
              <input
                {...register("demoone", { required: true })}
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full my-6">
              <input
                {...register("demotwo", { required: true })}
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full my-6">
              <input
                {...register("demothre", { required: true })}
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>
          </div>

          {/* //_____________________________img section _______________________________________________________ */}

          <button className="btn">
            Add Item <FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
