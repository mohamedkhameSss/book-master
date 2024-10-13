import React, { useEffect, useState } from "react";
import axios from "axios";
import BannarCard from "../bannarCard/BannarCard";
import Search from "../search/Search";
import Category from "../category/Category";
const Home = () => {
  const [recentdata, setRecenData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [onchange, setOnchange] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.dbooks.org/api/recent")
      .then((response) => setRecenData(response.data.books))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`https://www.dbooks.org/api/search/${onchange}`)
      .then((response) => setSearchData(response.data.books))
      .catch((error) => {
        console.log(error);
      });
  }, [onchange]);
  // console.log(data);

  return (
    <>
      <div
        className='w-100 container mb-5 mt-5 p-5'
        style={{ backgroundColor: "rgb(243, 247, 236)" }}
      >
        <div
          className='w-100  text-center p-4'
          style={onchange.length > 0 ? { opacity: 0.3 } : { opacity: 1 }}
        >
          <h1>Discover books you'll love!</h1>
          <h5 className='text-muted p-2 w-75 m-auto'>
            Enter a book you like and the site will analyse our huge database of
            real readers' favorite books to provide book recommendations and
            suggestions for what to read next.
          </h5>
        </div>
        <Search
          setOnchange={setOnchange}
          onchange={onchange}
          searchData={searchData}
        />
      </div>
      <section
        className='row align-items-center container-fluid pt-5 pb-5'
        style={{ backgroundColor: "rgb(0, 0, 0)" }}
      >
        <div className='col-12 hoverRound p-5 col-md-6'>
          <img
            src='/assets/shop1.jpg'
            className='d-block w-75 m-auto  rounded '
            alt=''
          />
        </div>
        <div className='col-12 col-md-6'>
          <h2 className='text-white'>Our Recent Books</h2>
          <h4 className="text-white">Take A look</h4>
          <BannarCard data={recentdata} key={recentdata.id} />
        </div>
      </section>
      <section>
        <Category/>
      </section>
    </>
  );
};

export default Home;
