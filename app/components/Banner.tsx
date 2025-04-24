import fashion from "~/img/medium-shot-woman-clothes-shopping.jpg";
import TypeIt from "typeit-react";
import { useState } from "react";

export default function Banner() {
  const [state, setState] = useState(true);

  const stopCursor = () => {
    setState(!state);
  };
  return (
    <section
      className={"banner"}
      style={{
        backgroundImage: `linear-gradient(
                to right,
                var(--color-gray-800),
                var(--color-red-400)
        ), url(${fashion}`,
      }}
    >
      <div>
        <h2>How to get started with improving your fashion lifestyle</h2>
        <TypeIt
          as={"q"}
          options={{
            lifeLike: true,
            waitUntilVisible: true,
            speed: 2,
            cursor: state,
            afterComplete: stopCursor,
          }}
        >
          Designers: Creating and showcasing collections, setting trends, and
          building brands. Models: Walking runways, posing for photoshoots, and
          representing designers' visions. Stylists: Curating looks for
          photoshoots, events, and celebrities. Editors and Journalists:
          Reporting on fashion trends, critiquing collections, and shaping
          public opinion.
        </TypeIt>

        {state ? (
          <span className={"author"}>Mrs Onuigbo</span>
        ) : (
          <span className={"author"} onClick={stopCursor}>
            Mummy ugo
          </span>
        )}

        <button onClick={stopCursor}>Toggle</button>
      </div>
    </section>
  );
}
