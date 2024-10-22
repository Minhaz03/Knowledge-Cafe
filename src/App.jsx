import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookMark = blog => {
     const newBookMarks = [...bookmarks, blog];
     setBookmarks(newBookMarks);
  }

  const handelMarkAsRead = time => {
    setReadingTime(readingTime + time);
  }

  return (
    <>
      <section className="max-w-screen-2xl mx-auto" >
        <Header></Header>

        <main className="md:flex p-5 mx-5">
          <Blogs 
          handleAddToBookMark={handleAddToBookMark}
          handelMarkAsRead = {handelMarkAsRead}
          ></Blogs>
          <Bookmarks 
          bookmarks={bookmarks}
          readingTime={readingTime}
          ></Bookmarks>
        </main>
      </section>
    </>
  );
}

export default App;
