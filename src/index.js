import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//pizza array
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  //main component to be rendered
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {color: "red",fontSize: "48px",textTransform: "uppercase",fontStyle: "italic"}; //creating object storing css then using it
  const style = {};

  return (
    // <h1 style={{ color: "red", fontSize: "48px", textTransform: "uppercase",fontStyle:"italic" }}> //inline css
    <header className="header">
      <h1 className="header" style={style}>
        Fast React Pizza Company
      </h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  //parent component
  //pass data from parent to the child component Menu()->pizza()
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment>
          {" "}
          {
            //React fragment . Can also we written using <></>
          }
          <p>
            Authentic Italian Cuisine. 6-Creative dishes to choose from. All
            from our stone oven, all organic,all delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>we are currently working on our menu, please come back later</p>
      )}

      {/* <Pizza
        name="pizza-Spinaci"
        ingredients="ingredients: Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="ingridents:Tomato,Mushrooms, mozarella Cheese, onions"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}
// function Pizza(props) {    //passing data using props here
//   //child component
//   //pizza function
//   // console.log(props);
//   return (
//     <li className="pizza">
//       <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
//       <div>
//         <h3>{props.pizzaObj.name}</h3>
//         <p>{props.pizzaObj.ingredients}</p>
//         <span>Price:{props.pizzaObj.price}</span>
//       </div>
//     </li>
//   );
// }

function Pizza({ pizzaObj }) {
  //passing data using  array destructuring here
  //child component
  //pizza function
  // console.log(props);

  if (pizzaObj.soldOut) console.log(true);

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      {" "}
      {
        // using string literal for the sol out pizza for applying special class to them
      }
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours(); //some random js to the react app
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;
  console.log(isOpen);

  // if (hour >= openHours && hour <= closeHours)
  //   alert("We are currently opened ");
  // else alert("we are currently closed");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHours} />
      ) : (
        <p>
          We are happy to welcome you between {openHours}:00 to {closeHours}:00
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  //child of Footer component as it was getting big
  return (
    <div className="order">
      <p>
        We're open until {props.closeHour}:00. Come visit us or order onlines
      </p>

      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")); //rendering main componrnt i.e "APP"
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React.StrictMode- renders the page twice for errors
//props- how we pass data between 2 componeents specially between parent and child component
