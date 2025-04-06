import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { ICONS } from "../../static/icons";

const Footer = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("accessToken", user?.user?.accessToken);
      setLoading(false);
      setShow(false);
      navigate("/admin-dashboard", { replace: true });
      e.target.reset();
    } catch (error) {
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        setError("Incorrect Email or Password");
        setLoading(false);
      } else {
        setError("Something went wrong. Please try again.");
        setLoading(false);
      }
    }
  };
  return (
    <React.Fragment>
      <div className="bg-[#303E4B] py-10 text-white">
        <div className="w-[85%] mx-auto">
          <div className="grid grid-cols-1 gap-12 md:flex md:justify-between">
            {/* About */}
            <div className="w-[40%]">
              <div className="flex items-center space-x-2">
                <div className="text-[#FF6300] newsreader font-bold text-2xl py-1">
                  Tech<span className="text-blue-600">Bridge</span>
                </div>
              </div>
              <p className="text-sm leading-9 text-white">
                TechBridge combines transformational consulting capabilities,
                deep industry knowledge, and AI and technology expertise to
                deliver valuable customer experiences and accelerated growth
                across a broad range of industries worldwide.
              </p>
            </div>

            {/* Explore */}
            <div className="w-[30%] ml-30">
              <h4 className="text-xl font-semibold mb-4">Explore</h4>
              <ul className="space-y-4 text-gray-300 text-base font-semibold">
                <li className="hover:text-white cursor-pointer transition">
                  Home
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Solutions
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Articles
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Events
                </li>
                <li
                  onClick={() => setShow(!show)}
                  className="hover:text-white cursor-pointer transition"
                >
                  Admin Login
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="w-[30%]">
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <button
                onClick={() => navigate("/contact")}
                className="mt-2 cursor-pointer border border-blue-500 hover:bg-blue-700 hover:text-white text-blue-400 font-semibold uppercase px-6 py-2 rounded-full transition duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      {show && (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-80 flex justify-center items-center">
          <div className="relative w-[95%] md:w-[30%] h-[40vh] md:h-[50vh] bg-white rounded-md p-4 shadow-sm md:mt-0 mt-[-50px] ">
            <ICONS.close
              size={30}
              className="absolute cursor-pointer right-3 top-3 z-50"
              onClick={() => setShow(false)}
            />

            <div className="pt-10">
              <h3 className="text-xl font-[500] text-center text-black">
                Admin Login
              </h3>
              <form onSubmit={handleLogin} className="pt-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-3 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="relative pt-6">
                  <input
                    type={!visible ? "password" : "text"}
                    autoComplete="current-password"
                    placeholder="Password"
                    className="px-4 py-3 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {visible ? (
                    <ICONS.eyelock
                      className="absolute top-9 right-2 cursor-pointer"
                      size={20}
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <ICONS.eye
                      className="absolute top-9 right-2 cursor-pointer"
                      size={20}
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
                {error && (
                  <div className="text-red-500 text-sm py-1">{error}</div>
                )}
                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="checked"
                      className="md:mt-1 mt-0 w-[15px] h-[15px]"
                    />
                    <p className="pl-2 md:text-sm text-xs">Remember me</p>
                  </div>
                  <h3 className="text-sm cursor-pointer font-[500] text-[#DE324D]">
                    Forget Password?
                  </h3>
                </div>
                <div className="md:mt-5 mt-6 flex justify-center">
                  <button
                    type="submit"
                    className="px-8 uppercase py-3 bg-[#000] font-[500] cursor-pointer hover:bg-[#DC143C] rounded-sm text-white"
                  >
                    {loading ? "Please wait..." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Footer;
