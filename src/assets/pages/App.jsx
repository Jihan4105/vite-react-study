// import Gallery from "../js/Gallery.jsx";
import TodoList from "../js/Todos.jsx"
// import Avatar from "../js/Avatar.jsx"
import { createRoot } from "react-dom/client"

createRoot(document.querySelector("#root")).render(
  <section className="section">
    <TodoList />
    {/* <Avatar /> */}
  </section>
)