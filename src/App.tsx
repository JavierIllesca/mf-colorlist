import ReactDOM from "react-dom/client";
import ColorList from "./components/ColorList";

const App = () => {

    return (
        <>
            <ColorList colorsList={[]}/>
            <ColorList colorsList={["#32b60a","#9e0000", "#0651a7"]}/>
        </>
    )

}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
