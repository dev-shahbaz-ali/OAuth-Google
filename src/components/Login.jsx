import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // 🔥 If token exists, redirect to home
    if (token) {
      navigate("/");
      return;
    }

    google.accounts.id.initialize({
      client_id:
        "172113672497-7fmucp3d2tki37j0ht5i2t0lk2bl36g1.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("googleSignInDiv"),
      { theme: "outline", size: "large" },
    );
  }, []); // ✅ IMPORTANT: empty dependency array

  const handleCredentialResponse = (response) => {
    if (response.credential) {
      localStorage.setItem("token", response.credential);
      navigate("/"); // ✅ use navigate instead of window.location
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back 👋</h1>
          <p className="text-gray-500 mt-2">
            Sign in to continue to your account
          </p>
        </div>

        <div id="googleSignInDiv"></div>
      </div>
    </div>
  );
};

export default Login;
