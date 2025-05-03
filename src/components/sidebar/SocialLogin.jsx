import { FaGoogle, FaGithub } from "react-icons/fa";
import useAuth from "../../hook/useAuth";

const SocialLogin = () => {
  const { signInWithGithub, signInWithGoogle } = useAuth();

  const handleLoginWithGit = () => {
    signInWithGithub();
    console.log("user loged in with github");
  };

  const handleLoginWithGoogle = () => {
    signInWithGoogle();
    console.log("user signed in as google");
  };

  return (
    <div className="w-full max-w-xs mx-auto ">
      <h2 className="text-xl font-semibold mb-4 ">Login With</h2>

      <button
        onClick={handleLoginWithGoogle}
        className="flex cursor-pointer items-center justify-center w-full border border-blue-500 text-blue-500 hover:bg-blue-50 py-2 rounded mb-3"
      >
        <FaGoogle className="mr-2" />
        Login with Google
      </button>

      <button
        onClick={handleLoginWithGit}
        className="flex cursor-pointer items-center justify-center w-full border border-gray-700 text-gray-700 hover:bg-gray-100 py-2 rounded"
      >
        <FaGithub className="mr-2" />
        Login with GitHub
      </button>
    </div>
  );
};

export default SocialLogin;
