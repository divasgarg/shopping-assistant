import { useState } from "react";
import axios from "axios";

export default function Home() {
    const [recommendations, setRecommendations] = useState([]);

    const fetchRecommendations = async () => {
        const res = await axios.post("/api/recommend", { user_id: "123" });
        setRecommendations(res.data.recommendations);
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>🛍 AI Shopping Assistant</h1>
            <button onClick={fetchRecommendations}>Get Recommendations</button>
            <ul>
                {recommendations.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}