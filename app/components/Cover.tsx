import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function Cover() {
  return (
    <section className={"cover"}>
      <div>
        <h1>React</h1>
        <p>
          Designers: Creating and showcasing collections, setting trends, and
          building brands. Models: Walking runways, posing for photoshoots, and
          representing designers' visions. Stylists: Curating looks for
          photoshoot, events, and celebrities. Editors and Journalists:
          Reporting on fashion trends, critiquing collections, and shaping
          public opinion.
        </p>
        <div>
          <a href="#" className={"docs"}>
            <span> Documentation</span>{" "}
            <span>
              {" "}
              <FontAwesomeIcon icon={faArrowRightLong} />
            </span>
          </a>
          <a href="#" className={"exp"}>
            <span> Explore</span>
          </a>
        </div>
      </div>
    </section>
  );
}
