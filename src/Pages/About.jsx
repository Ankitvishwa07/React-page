import countryFacts from "../api/about.json";

const About = () => {
  return (
    <div className="container">
      <div>
        <h3 className="title">
          here are some interesting facts
          <br />
          we are proud of
        </h3>
      </div>
      <div className="grid-three-col">
        {countryFacts.map((countr) => {
          const { country, interesting_fact } = countr;

          return (
            <div className="card">
              <h3>
                <span>Country: </span>
                {country}
              </h3>
              <p>
                <span>Interesting fact: </span>
                {interesting_fact}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
