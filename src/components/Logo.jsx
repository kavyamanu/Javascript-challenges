import logo from "./logo.png";

export const Logo = () => {
  return (
    <>
      <img
        src={logo}
        alt="logo"
        height="50"
        width="50"
        style={{ paddingRight: 20 }}
      />
      <h1>LearnJS</h1>
    </>
  );
};
