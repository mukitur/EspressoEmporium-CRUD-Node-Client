/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const CoffeeCard = ({ coffee }) => {
  //   console.log(coffee);

  const { _id, name, quantity, supplier, taste, photo } = coffee;

  // Delete Function
  const handleDelete = (_id) => {
    const proceed = window.confirm('Are you sure want to delete?');
    if (proceed) {
      //   console.log(_id);
      fetch(`http://localhost:5500/coffee/${_id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            swal('Okey!', 'You deleted the coffee!', 'error');
          }
        });
    }
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl my-5">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between gap-3 text-start w-3/4 mr-5">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
          <p>Taste: {taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn">View</button>
            <Link to={`/updatecoffee/${_id}`}>
              <button className="btn">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-600"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
