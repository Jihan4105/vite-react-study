// import Gallery from "../js/Gallery.jsx";
// import TodoList from "../js/Todos.jsx"
import Avatar from "../js/Avatar.jsx"
import { createRoot } from "react-dom/client"

createRoot(document.querySelector("#root")).render(
  <section className="section">
    {/* <TodoList /> */}
    <>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </>
  </section>
)