import React from 'react';
import { useSelector } from 'react-redux';
import DetailsPageHeader from './DetailsPageHeader';
import '../assets/detailsPageStyles.css';

const DisplayAnimalDetails = () => {
  const { animalsReducer } = useSelector((state) => state);

  let image;
  let name;
  let color;
  let carbohydrateContent;
  let caloriesContent;
  let sodiumContent;
  let servingWeigth;
  let location;
  let population;
  let habitat;
  let protein;

  // eslint-disable-next-line
  animalsReducer.map((animalia) => {
    // eslint-disable-next-line
    if (animalia.fish_id == window.location.pathname.slice(1)) {
      image = animalia.actualimagelink;
      name = animalia.name;
      color = animalia.Color;
      carbohydrateContent = animalia.Carbohydrate;
      caloriesContent = animalia.Calories;
      sodiumContent = animalia.Sodium;
      servingWeigth = animalia.servingWeigth;
      population = animalia.Population;
      location = animalia.Location;
      habitat = animalia.Habitat;
      protein = animalia.Protein;
    }
  });

  return (
    <div>
      <div>
        <DetailsPageHeader name={name} />
      </div>
      <section className="animals-details-cont">
        <div id="details-header">
          <img src={image} id="species" alt="" />
          <h1>
            {name}
          </h1>
        </div>
        <ul className="details">
          <li>
            <h2>Species Name</h2>
            <p>
              {name}
            </p>
          </li>
          <li>
            <h2>Carbohydrate Content</h2>
            <p>
              {carbohydrateContent}
            </p>
          </li>
          <li>
            <h2>Calories Content</h2>
            <p>
              {caloriesContent}
            </p>
          </li>
          <li>
            <h2>Protein Content</h2>
            <p>
              {protein}
            </p>
          </li>
          <li>
            <h2>Habitat</h2>
            <p>
              {habitat}
            </p>
          </li>
          <li>
            <h2>Serving Weight</h2>
            <p>
              {servingWeigth}
            </p>
          </li>
          <li>
            <h2>Location</h2>
            <p>
              {location}
            </p>
          </li>
          <li>
            <h2>Population</h2>
            <p>
              {population}
            </p>
          </li>

          <li>
            <h2>Sodium Content</h2>
            <p>
              {sodiumContent}
            </p>
          </li>
          <li>
            <h2>Color</h2>
            <p>
              {color}
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};
export default DisplayAnimalDetails;
