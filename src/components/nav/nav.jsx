import "./nav.css";
import linkedinLogo from "./linkedin.png";

export default function Nav({ portfolioItems, visible, setVisible }) {
  return (
    <nav>
      <ul className="listTitles">
        {portfolioItems.map((item) => {
          return (
            <li
              className={visible[item.listTitle]}
              id={item.listTitle}
              key={item.listTitle}
              onClick={() => {
                document.querySelector("main").style.opacity = 0;
                setTimeout(() => {
                  setVisible((previousState) => {
                    let newState = { ...previousState };
                    Object.entries(newState).forEach(
                      ([key, value]) => (newState[key] = "hide")
                    );
                    newState[item.listTitle] = "reveal";
                    return newState;
                  });
                  document.querySelector("main").style.opacity = 1;
                }, 500);
              }}
            >
              {item.listTitle}
              <span id={item.listReveal}>{item.listReveal}</span>
            </li>
          );
        })}
        {/* {Object.entries(portfolioItems).map(([key, value]) => {
          if (key !== "Me") {
            return (
              <li
                key={key}
                onMouseEnter={() =>
                  setVisible((previousState) => {
                    let newState = { ...previousState };
                    Object.entries(newState).forEach(
                      ([key, value]) => (newState[key] = "none")
                    );
                    newState[key] = "block";
                    return newState;
                  })
                }
              >
                {key}
              </li>
            );
          }
        })} */}
        <li className="contacts">
          <a href="https://www.linkedin.com/in/carlin-preun" target="_blank">
            <img src={linkedinLogo} alt="Linkedin" width={25} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
