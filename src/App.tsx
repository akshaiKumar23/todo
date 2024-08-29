import BackgroundHeading from "./components/BackgroundHeading";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import TodoList from "./components/TodoList";

export interface TodoType {
  text: string;
  id: number;
  isCompleted: boolean;
}

function App() {
  return (
    <div className="flex justify-center items-center font-poppins min-h-screen bg-[#f1d4b3]">
      <BackgroundHeading />

      <main className="w-[972px] h-[536px] bg-white rounded-[8px] shadow-lg grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header />
        <TodoList />
        <SideBar />
      </main>
    </div>
  );
}

export default App;
