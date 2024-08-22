import React from "react";
import { data } from "./data";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <h1 className="title">WEB DEVELOPMENT ESSENTIALS</h1>
      <div className="grid">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
