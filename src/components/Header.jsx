export const Header = (props) => {
  console.log(props)
  
  return (
    <>
      <h1 className="font-black text-5xl text-white text-center md:w-1/2 mx-auto italic">
        Patient Monitoring {""}
        <br />
        <span className="text-indigo-600 "> Vet </span>
      </h1>
    </>
  );
};

export default Header;
