import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    const res = fetch("/img")
      .then((res) => res.json())
      .then((data) => {
        setImgs(data.imgs);
      });
  }, [imgs]);

  return (
    <>
      <div className="w-full py-5 bg-gray-100 flex justify-center items-center border-b">
        <Link to="/admin-login">Login as Admin</Link>
      </div>
      <div className="container my-10">
        <div className="img-gallery">
          {imgs.map((el) => (
            <Link to={el.img}>
              <img src={el.img} key={el._id} className="img" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
