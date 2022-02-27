import From from "./Components/From";
import { Header } from "./Components/Header";
import "./styles.css";

export default function App() {
  return (
    <section>
      <div className="container">
        <Header />
        <From />
      </div>
    </section>
  );
}
