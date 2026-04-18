import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h2 className="text-xl font-bold">MyApp</h2>
      <div className="space-x-4">
        <NavLink to="/" className="hover:text-yellow-400">Home</NavLink>
        <NavLink to="/about" className="hover:text-yellow-400">About</NavLink>
        <NavLink to="/users" className="hover:text-yellow-400">Users</NavLink>
      </div>
    </nav>
  );
}