import { Link } from "react-router-dom";
import "../App.css";

function Dashboard() {
  //   return Error;

  // throw new Error("testing...");
  return (
    <div className=" w-full flex justify-center">
      <div className="p-4 w-1/2 h-1/2 ml-6 mt-6 shadow-md bg-gray-200  flex flex-col items-center justify-center space-y-4 ">
        <Link to="/submit-form" className="w-full max-w-md">
          <h2 className="text-lg font-semibold text-blue-500 hover:text-blue-800">
            Fill out the Application form
          </h2>
        </Link>

        <Link
          to="/users"
          className="text-lg font-semibold text-blue-500 hover:text-blue-800"
        >
          <h2>Get the list of Users</h2>
        </Link>

        <Link
          to="/profile"
          className="text-lg font-semibold text-blue-500 hover:text-blue-800"
        >
          <h2>Go to Profile</h2>
        </Link>

        <Link
          to="/"
          className="text-lg font-semibold text-blue-500 hover:text-blue-800"
        >
          <h2>Go to Home</h2>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
