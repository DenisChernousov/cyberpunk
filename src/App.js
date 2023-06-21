import './App.css';
import Header from "./Components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import './Fonts/Archangelsk.woff';
import Change from "./Components/Change/Change";
import Action from "./Components/Action/Action";
import Hp from "./Components/HP/Hp";
import Buy from "./Components/Buy/Buy";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Change />
                <Action />
                <Hp />
                <Buy />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
