import Navbar from "./component/Navbar";
import Tasks from "./component/Tasks";

function App() {


  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Tasks />
      </div>
    </>
  )
}

export default App
