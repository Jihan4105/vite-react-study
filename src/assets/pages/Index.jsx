// import Gallery from "../js/Gallery.jsx";
// import TodoList from "../js/Todos.jsx"
// import Avatar from "../js/Avatar.jsx"
// import Clock from "../js/Clock.jsx";
import { createRoot } from "react-dom/client"
import Gallery from "../js/Gallery.jsx";

function Card({ children }) {
  // console.log(children)

  return (
    <div className="card">
      {children}
      <div className="dodo">
        HEHE
      </div>
    </div>
  );
}

createRoot(document.querySelector("#root")).render(
  <section className="section">
    {/* <TodoList /> */}
    <>
      <Gallery />
    </>
  </section>
)
