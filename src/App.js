import { AddToDo } from "./containers/AddToDo";
import { VisibleToDoList } from "./containers/VisibleToDoList";
import { Footer } from "./components/Footer";
const App = () => (
  <div>
    <AddToDo />
    <VisibleToDoList />
    <Footer />
  </div>
);

export default App;