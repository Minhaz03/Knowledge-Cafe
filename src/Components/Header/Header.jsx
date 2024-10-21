import profile from "../../images/profile.png";

const Header = () => {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <div className="flex justify-between items-center p-5 mx-5 mt-10 border-b-2">
        <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
        <img src={profile} alt="" />
      </div>
    </main>
  );
};

export default Header;
