import { Outlet } from 'react-router-dom';

const MainRoot = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-x md:px-8 lg:px-10">
        <Outlet />
      </div>
    </div>
  );
};

export default MainRoot;
