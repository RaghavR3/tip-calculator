import Calculator from "./components/calculator";
import Form from "./components/form";

function App() {
  return (
    <div className="h-[100vh] bg-primary-sky-blue flex flex-col items-center justify-center">
      <h1 className="font-body text-2xl font-bold text-tertiary-green pb-20">
        S P L I <br /> T T E R
      </h1>
      <Form />
    </div>
  );
}

export default App;
