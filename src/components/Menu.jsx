// Menu.jsx
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div className="menu">
      <h2 className="menu-title">MAIN DISHES</h2>

      <MenuItem
        image=""
        name="Diavolo Piada"
        description="Deep fric of vegetalbe"
        price="$7.99"
      />

      <MenuItem
        image=""
        name="Ciabatta Carpaccio"
        description="Deep fric of vegetalbe"
        price="$6.99"
      />

      <MenuItem
        image=""
        name="Clabatta Vitello Tonato"
        description="Deep fric of vegetalbe"
        price="$6.99"
      />

      <MenuItem
        image=""
        name="Caprese Salada"
        description="Deep fric of vegetalbe"
        price="$2.99"
      />
    </div>
  );
}
