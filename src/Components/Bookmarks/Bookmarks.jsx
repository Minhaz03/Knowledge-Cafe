import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
import { prototype } from "postcss/lib/previous-map";

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="md:w-1/3 ml-10 bg-gray-300 rounded-xl p-4 m-4">
      <div className="text-center my-3">
        <h3 className="text-4xl">Reading Time: {readingTime}</h3>
      </div>
      <h2 className="text-4xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>

      {
        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
}

export default Bookmarks;
