import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../assets/homeStyles.css';
import acordionImg from '../assets/enter_icon.png';
import fetchAnimals from '../API/api';
import Header from './Header';

const Animal = () => {
  const animalList = useSelector((state) => state.animalsReducer);
  const [AnimalDetails, setAnimalDetails] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnimals());
  }, [dispatch]);

  return (
    <div className="animals-cont">
      <Header />
      <div className="search-bar-cont">
        <input
          id="search-input"
          type="text"
          placeholder="Search"
          onChange={(e) => setAnimalDetails(e.target.value)}
        />
      </div>
      <div id="home_content_cont">
        {animalList.length <= 1 ? <p>Just a moment please...</p> : (
          // eslint-disable-next-line
          animalList.filter((searchItem) => {
          // eslint-disable-next-line
          if (AnimalDetails == '') {
              return searchItem;
            } if (searchItem.name.toLowerCase().includes(AnimalDetails.toLowerCase())) {
              return searchItem;
            }
          }).map((animal) => (
            <Link key={animal.fish_id} className="content-cont" to={`/${animal.fish_id}`}>
              <div key={animal.fish_id}>
                <div className="animal_images">
                  <div className="img_accordion">
                    <img src={animal.actualimagelink} className="anim_img" alt={animal.name} />
                    <img src={acordionImg} className="accordion" alt="" />
                  </div>
                </div>
                <article className="heading">
                  <h1>
                    {animal.name}
                  </h1>
                </article>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Animal;
