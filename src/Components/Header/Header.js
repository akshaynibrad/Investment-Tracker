import logo from "../../assets/investment-calculator-logo.png";
import Style from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <header className={Style.header}>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    </div>
  );
};

export default Header;
