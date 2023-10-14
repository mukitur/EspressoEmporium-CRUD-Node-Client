import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
  const coffees = useLoaderData();

  return (
    <div>
      <h2>Home Page{coffees.length}</h2>
      <div>
        <div className="text-center my-16">
          <h4>--- Sip & Saver ---</h4>
          <h2>Our Popular Products</h2>
          <Link to="/addcoffee">
            <button className="btn btn-info">Add Coffee</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
