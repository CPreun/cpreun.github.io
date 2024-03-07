import { useState } from "react";
import "./App.css";
import { portfolioItems } from "./portfolioItems";
import Nav from "./components/nav/nav";
import Item from "./components/item/item";

let stateList = {};

for (let i = 0; i < portfolioItems.length; i++) {
  stateList[`${portfolioItems[i].listTitle}`] = "hide";
}

export default function App() {
  const [visible, setVisible] = useState(stateList);

  return (
    <>
      <section className="contents">
        <h1>
          Carlin Preun
        </h1>
        <Nav
          portfolioItems={portfolioItems}
          visible={visible}
          setVisible={setVisible}
        />
      </section>
      <main>
        <div id="screen">
          {portfolioItems.map((item) => (
            <Item
              key={item.listTitle}
              portfolioItem={item}
              visible={visible[item.listTitle]}
            />
          ))}
        </div>
      </main>
    </>
  );
}
