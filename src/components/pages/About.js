import NavBar from "../layout/NavBar";

const About = (props) => {
  return (
    <>
      <NavBar user={props.user} />
      <div className="page-content">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          deserunt atque a asperiores vero rerum ratione, accusantium in
          necessitatibus numquam praesentium non officiis cumque aliquam, earum
          neque officia minus nam.
        </p>
      </div>
    </>
  );
};

export default About;
