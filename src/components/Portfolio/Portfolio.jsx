import "./portfolio.scss";
import PortfolioList from "../portfoliolist/PortfolioList";
import React, { useState, useEffect } from "react";
import { Reactjs, mernstack, website } from "../data";
const Portfolio = () => {
  const [selected, setSelected] = useState("reactjs");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "reactjs":
        setData(Reactjs);
        break;
      case "mernstack":
        setData(mernstack);
        break;
      case "html":
        setData(website);
        break;
       default:
        setData(Reactjs);
    }
  }, [selected]);
  const list = [
    {
      id: "reactjs",
      title: "React Web App",
    },
    {
      id: "mernstack",
      title: "MERN Stack App",
    },
    {
      id: "html",
      title: "HTML CSS Websites",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected == item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((data) => (
          <div className="item">
           <a href={data?.link}> <img src={data.img} width="200px" height="200px" ></img> </a>
            <h3>{data.title}</h3>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
