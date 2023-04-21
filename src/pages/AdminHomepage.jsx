import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminHomepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Logout button clicked");

    dispatch({ type: "login", payload: "" });
    navigate("/login");
  };

  return (
    <div>
      <h1>This is admin homepage! Only logged in user can see it.</h1>
      <button type="submit" onClick={handleSubmit}>
        Logout
      </button>
    </div>
  );
};

export default AdminHomepage;
