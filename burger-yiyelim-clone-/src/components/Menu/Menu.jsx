import Data from "../../Data/Data";
import "./Menu.css";
import MenuItem from "../MenuItem/MenuItem";
const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menu-title"> Burgerlerimiz</h1>
      <div className="menu-list">
        {Data.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
