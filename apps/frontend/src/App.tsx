import React, {useEffect, useState} from "react";

const App = () => {
    const [arts, setArts] = useState<{id: string; artName: string}[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    fetch("/api/arts")
        .then((response) => {
            if (!response.ok) throw new Error("Błąd podczas ładowania danych");
            return response.json();
        })
        .then((data) => {
            setArts(data.arts);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
        });

    return (
        <div>
            <h1>Witaj w aplikacji!</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Click me!</button>
            <ul>
                {arts.map((art: {id: string; artName: string}) => (
                    <li key={art.id}>{art.artName}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
