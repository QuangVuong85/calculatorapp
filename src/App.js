import React from 'react';
import {store} from "./redux/store";
import Calculator from "./screens/calculator";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <Calculator/>
        </Provider>
        //....
    );
}

export default App;