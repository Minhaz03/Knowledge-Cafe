import PropTypes from "prop-types";
import { MdOutlineBookmarkAdded } from "react-icons/md";

const Blog = ({ blog, handleAddToBookMark, handelMarkAsRead}) => {
  const { id, title, cover, readingTime, author, image, postedDate, hashtags } =
    blog;
  return (
    <div className="mb-24 space-y-4 mt-5">
      <img
        className="mb-4 rounded-lg"
        src={cover}
        alt={`Cover Picture of the title ${title} `}
      />
      <div className="flex justify-between mb-4">
        <div className="flex gap-5">
          <img className="rounded-full w-14" src={image} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{postedDate}</p>
          </div>
        </div>
        <div className="">
          <span>{readingTime} min read</span>
          <button 
          onClick={() => handleAddToBookMark(blog)}
          className="ml-3 text-2xl">
            <MdOutlineBookmarkAdded /></button>
        </div>
      </div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx} className="p-2 font-bold">
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button onClick={() => handelMarkAsRead(id,readingTime)}
      className="text-purple-600 font-bold underline">Mark As Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMark: PropTypes.func,
  handelMarkAsRead: PropTypes.func
  // blog: PropTypes.shape({
  //   // Define the expected shape of the blog object
  //   title: PropTypes.string.isRequired,
  //   author: PropTypes.string.isRequired,
  //   content: PropTypes.string.isRequired,
  //   // Add other properties as needed
  // }).isRequired,
};

export default Blog;
