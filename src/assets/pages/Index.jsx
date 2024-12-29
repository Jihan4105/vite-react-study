// import Gallery from "../js/Gallery.jsx";
// import TodoList from "../js/Todos.jsx"
import Avatar from "../js/Avatar.jsx"
import { createRoot } from "react-dom/client"

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

createRoot(document.querySelector("#root")).render(
  <section className="section">
    {/* <TodoList /> */}
    <>
      <Card>
        <Avatar
          size={100}
          person={{ 
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
          }}
        />
      </Card>
    </>
  </section>
)