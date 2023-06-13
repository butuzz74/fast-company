import React from "react";
import useMockData from "../utils/mockData";

const Main = () => {
    const { error, initialize, progress, status } = useMockData();
    const handleClick = () => {
        initialize();
        console.log(1);
    };
    return (
        <div className="container mt-5">
            <h1> Main Page</h1>
            <ul>
                <li>Status:{status}</li>
                <li>Progress:{progress}</li>
                {error && <li>Error:{error}</li>}
            </ul>
            <h3>Инициализация данных в Firebase</h3>
            <button className="btn btn-primary" onClick={handleClick}>
                Инициализировать
            </button>
        </div>
    );
};

export default Main;
