import { Link } from 'react-router-dom';

const AddCoffee = () => {
  return (
    <div className="my-20">
      <Link to="/">
        <h1 className="text-2xl">Back to Home</h1>
      </Link>
      <div className="w-3/4 mx-auto bg-gray-300 p-3 md:p-6">
        <h2 className="text-3xl text-center my-3">Add New Coffee</h2>
        <p className="text-center w-3/4 mx-auto mb-6">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        {/* form start */}
        <form>
          {/* Form name & quantity Row */}
          <div className="flex flex-col md:flex-row gap-5 w-3/4 mx-auto justify-evenly mb-6">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Coffee Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  name="quantity"
                  type="text"
                  placeholder="Coffee Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Form supplier & Taste Row */}
          <div className="flex flex-col md:flex-row gap-5 w-3/4 mx-auto justify-evenly mb-6">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Coffee Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  placeholder="Coffee Supplier"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  name="test"
                  type="text"
                  placeholder="Taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Form Category & details Row */}
          <div className="flex flex-col md:flex-row gap-5 w-3/4 mx-auto justify-evenly mb-6">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Coffee Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  name="details"
                  type="text"
                  placeholder="Coffee Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Form photo url Row */}
          <div className="flex flex-col md:flex-row gap-5 w-3/4 mx-auto justify-evenly mb-6">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Coffee Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* submit button */}
          <div className="w-3/4 mx-auto justify-evenly my-6">
            <input type="submit" value="Add Coffee" className="btn btn-block" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
