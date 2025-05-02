import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="w-full max-w-xs mx-auto ">
      <h2 className="text-xl font-semibold mb-4 ">Login With</h2>

      <button className="flex cursor-pointer items-center justify-center w-full border border-blue-500 text-blue-500 hover:bg-blue-50 py-2 rounded mb-3">
        <FaGoogle className="mr-2" />
        Login with Google
      </button>

      <button className="flex cursor-pointer items-center justify-center w-full border border-gray-700 text-gray-700 hover:bg-gray-100 py-2 rounded">
        <FaGithub className="mr-2" />
        Login with GitHub
      </button>
    </div>
  );
};

export default SocialLogin;
