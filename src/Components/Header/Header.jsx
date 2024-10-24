import profile from "../../images/profile.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 mx-5 mt-10 border-b-2">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
