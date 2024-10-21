import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <section className="max-w-screen-2xl mx-auto" >
        <Header></Header>

        <main className="md:flex p-5 mx-5">
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </main>
      </section>
    </>
  );
}

export default App;
