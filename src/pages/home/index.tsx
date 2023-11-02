import { Link } from "react-router-dom";
import "./style.scss";
import Loader from "../../utils/Loader";
import { useEffect, useState } from "react";

const UserHome = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section id="home" className="home">
          <div className="container home__container">
            <div className="home__main">
              <h1>Build your future with us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                minus neque nulla voluptatem unde officiis nihil adipisci eum
                incidunt voluptatum et quaerat natus quia eos, iusto harum optio
                tenetur fugit?
              </p>
              <Link to="/user/services">Our services</Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default UserHome;
