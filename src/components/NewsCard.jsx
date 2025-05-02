import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,

    thumbnail_url,
    details,
    tags,
  } = news;

  // Format date
  const date = new Date(author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  // Shorten details
  const shortDetails =
    details.length > 200 ? details.slice(0, 200) + "..." : details;

  return (
    <div className="max-w-2xl mx-auto bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
      {/* Author Header */}
      <div className="flex items-center justify-between px-4 py-3 ">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-sm">
            <p className="font-semibold">{author.name}</p>
            <p className="text-gray-500 text-xs">{date}</p>
          </div>
        </div>
        <div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12h.01M12 12h.01M18 12h.01"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 pt-2 font-bold text-lg leading-snug text-gray-900">
        {title}
      </h2>

      {/* Tags */}
      <p className="px-4 pt-2 text-sm text-gray-500">
        {tags.map((tag, index) => (
          <span key={index} className="text-orange-500 mr-1">
            #{tag}
          </span>
        ))}
      </p>

      {/* Thumbnail Image */}
      <div className="mt-3 px-4">
        <img
          src={thumbnail_url}
          alt="thumbnail"
          className="w-full h-48 object-cover rounded-md"
        />
      </div>

      {/* Details */}
      <p className="px-4 py-3 text-sm text-gray-700">
        {shortDetails}
        <span className="text-blue-600 hover:underline cursor-pointer ml-1">
          Read More
        </span>
      </p>

      {/* Footer */}
      <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100">
        <div className="flex items-center text-orange-500 gap-1">
          <FaStar className="w-4 h-4" />
          <span className="text-sm font-medium text-gray-800">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center text-gray-500 gap-1">
          <FaEye className="w-4 h-4" />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
