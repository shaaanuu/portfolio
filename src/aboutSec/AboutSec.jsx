import "./AboutSec.scss";

export const AboutSec = () => {
  return (
    <>
      <div className="about-me-title">- ABOUT ME -</div>
      <div className="about-sec" id="about">
        <div className="about-pic">
          <img src="/assets/pic.jpeg" alt="pic" />
        </div>
        <div className="about">
          <p>
            Iam an Independent frontend developer and flutter developer based in
            India.
          </p>
          <p>
            I specialize in crafting minimalistic, aesthetic and responsive
            websites and also in mobile app development with flutter.
          </p>
          <p>
            In the free time, i love to read books mainly in self-help and
            personal development category. And i would also likes to spend time
            on learning new technologies.
          </p>
        </div>
      </div>
    </>
  );
};
