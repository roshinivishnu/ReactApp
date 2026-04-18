import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome 👋</h1>
      <p className="mb-4">This is a React Router multi-page app.</p>
      <div className="space-x-4">
        <Link to="/about" className="bg-blue-500 text-white px-4 py-2 rounded">About</Link>
        <Link to="/users" className="bg-green-500 text-white px-4 py-2 rounded">Users</Link>
      </div>
    </div>
  );
}
