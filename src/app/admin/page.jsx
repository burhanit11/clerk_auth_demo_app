import { useUser } from "@clerk/nextjs";

const AdminComponent = () => {
  const { user } = useUser();
  const role = user?.publicMetadata?.role;

  if (role !== "admin") {
    return <p>Access denied. Admins only.</p>;
  }

  return <div>Welcome to the admin area!</div>;
};

export default AdminComponent;
