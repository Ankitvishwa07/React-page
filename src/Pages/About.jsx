import countryFacts from "../api/about.json";

const About = () => {
  return (
    <div className="container">
      <div>
        <h2 className="title">
          here are some interesting facts
          <br />
          we are proud of
        </h2>
      </div>
      <div className="grid-three-col">
        {countryFacts.map((countr) => {
          const { country, interesting_fact } = countr;

          return (
            <div className="card">
              <div className="card-inner">
                <h3>
                  <span>Country: </span>
                  {country}
                </h3>
                <p>
                  <span>Interesting fact: </span>
                  {interesting_fact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
