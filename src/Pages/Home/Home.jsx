import { Link, useLoaderData } from 'react-router-dom';
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import { useState } from 'react';

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
      <div>
        <div className="text-center my-16">
          <h4>--- Sip & Saver ---</h4>
          <h2>Our Popular Products</h2>
          <Link to="/addcoffee">
            <button className="btn btn-info">Add Coffee</button>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {coffees.map((coffee) => (
              <CoffeeCard
                key={coffee._id}
                coffee={coffee}
                coffees={coffees}
                setCoffees={setCoffees}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
