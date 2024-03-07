import "./item.css";

export default function Item({ portfolioItem, visible }) {
  return (
    <section className={visible}>
      <h2>{portfolioItem.contentTitle}</h2>
      {/* <ul> */}
        {/* <li><span style={{width: "3rem", display:"inline-block", textAlign: "right"}}>WHAT:</span> <span style={{textAlign: 'left'}}>{portfolioItem.what}</span></li>
        <li>WHY: {portfolioItem.why}</li>
        <li>HOW: {portfolioItem.how}</li> */}
        {portfolioItem.features.map((feature) => {
          return (
            // <li key={feature.image.alt}>
              <figure key={feature.image.alt}>
                <img src={feature.image.src} alt={feature.image.alt} />
                <figcaption>{feature.caption}</figcaption>
              </figure>
            // {/* </li> */}
          );
        })}
      {/* </ul> */}
    </section>
  );
}
