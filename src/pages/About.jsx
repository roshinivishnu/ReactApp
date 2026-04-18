import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">About</h1>
      <p className="mb-4">This app demonstrates routing using React Router.</p>
      <button onClick={() => navigate("/")} className="bg-blue-500 text-white px-4 py-2 rounded">
        Go Home
      </button>
    </div>
  );
}