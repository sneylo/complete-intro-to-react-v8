const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.animal),
    React.createElement("h1", {}, props.name),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      animal: "dog",
      name: "luna",
      breed: "Husky",
    }),
    React.createElement(Pet, {
      animal: "bird",
      name: "Igi",
      breed: "Eagel",
    }),
    React.createElement(Pet, {
      animal: "Banik",
      name: "Alojz",
      breed: "Husky",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
