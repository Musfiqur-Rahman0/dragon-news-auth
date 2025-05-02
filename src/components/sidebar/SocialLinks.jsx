import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="w-full  ">
      <h2 className="text-lg font-semibold mb-4">Find Us On</h2>
      <div className="border border-gray-200 rounded overflow-hidden">
        <a
          href="#"
          className="flex items-center px-4 py-3 border-b border-gray-200 hover:bg-gray-50"
        >
          <FaFacebookF className="text-blue-600 mr-3" />
          Facebook
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-3 border-b border-gray-200 hover:bg-gray-50"
        >
          <FaTwitter className="text-blue-400 mr-3" />
          Twitter
        </a>
        <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-50">
          <FaInstagram className="text-pink-500 mr-3" />
          Instagram
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
