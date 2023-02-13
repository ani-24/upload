import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ImUpload } from "react-icons/im";

const Admin = () => {
  const [img, setImg] = useState("");

  const [imgs, setImgs] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    // axios
    //   .get("/auth")
    //   .then((res) => {
    //     const res = fetch("/img")
    //       .then((res) => res.json())
    //       .then((data) => {
    //         setImgs(data.imgs);
    //       });
    //   })
    //   .catch(() => {
    //     navigate("/admin-login");
    //   });
    fetch("/auth")
      .then((res) => {
        fetch("/img")
          .then((res) => res.json())
          .then((data) => {
            setImgs(data.imgs);
          });
      })
      .catch(() => {
        navigate("/admin-login");
      });
  }, [imgs]);

  return (
    <>
      <div className="container mt-10">
        <div className="img-gallery">
          {imgs.map((el) => (
            <Link to={el.img}>
              <img src={el.img} key={el._id} className="img" />
            </Link>
          ))}
        </div>
        <form method="POST" action="/upload" encType="multipart/form-data">
          <input
            type="file"
            name="img"
            id="img"
            defaultValue={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <button type="submit" className="button mt-5">
            Upload <ImUpload />
          </button>
        </form>
      </div>
    </>
  );
};

export default Admin;
