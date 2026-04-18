import { useParams, useNavigate } from "react-router-dom";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Sam Wilson", email: "sam@example.com" }
];

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return <h2 className="p-6">User not found</h2>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Detail</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <button onClick={() => navigate("/users")} className="mt-4 bg-gray-800 text-white px-4 py-2 rounded">
        Go Back
      </button>
    </div>
  );
}
