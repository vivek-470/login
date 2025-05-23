import { useLocation } from "react-router-dom";

const Account= () => {
  const location = useLocation();
  const name = location.state?.name || "User";

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
      <div className="bg-white shadow rounded p-4 flex gap-4 items-start">
        <div className="relative">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <span className="absolute bottom-0 right-0 bg-purple-600 text-white text-xs rounded-full p-1">
            📷
          </span>
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-gray-500">demo@gmail.com</p>
          <p className="mt-2 text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;
