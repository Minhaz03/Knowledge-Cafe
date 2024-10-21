import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { title, cover, readingTime, author, image, postedDate, hashtags} = blog;
  return (
    <div className="mt-10">
      <img src={cover} alt={`Cover Picture of the title ${title} `} />
      <div className="flex justify-between">
        <div className="flex gap-5 mt-6">
            <img className="rounded-full w-14" src={image} alt="" />
            <div>
                <h3 className="text-2xl">{author}</h3>
                <p>{postedDate}</p>
            </div>
        </div>
        <div className="mt-6">
            <span>{readingTime} mim read</span>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {
            hashtags.map((hash, idx) => <span key={idx} className="p-3 font-bold"><a href="">{hash}</a></span>)
        }
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  // blog: PropTypes.shape({
  //   // Define the expected shape of the blog object
  //   title: PropTypes.string.isRequired,
  //   author: PropTypes.string.isRequired,
  //   content: PropTypes.string.isRequired,
  //   // Add other properties as needed
  // }).isRequired,
};

export default Blog;
