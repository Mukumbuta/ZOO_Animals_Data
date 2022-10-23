import React from 'react';
import { useSelector } from 'react-redux';
import DetailsPageHeader from './DetailsPageHeader';
import '../assets/detailsPageStyles.css';

const DisplayAnimalDetails = () => {
  const { animalsReducer } = useSelector((state) => state);

  let image;
  let animalName;
  let lifeSpan;
  let diet;
  let geoRange;
  let activeTime;
  let latinName;
  let maxLength;
  let minLength;
  let minWeight;
  let maxWeight;
  let habitat;

  // eslint-disable-next-line
  animalsReducer.map((animalia) => {
    // eslint-disable-next-line
    if (animalia.id == window.location.pathname.slice(1)) {
      image = animalia.image_link;
      animalName = animalia.name;
      lifeSpan = animalia.lifespan;
      diet = animalia.diet;
      geoRange = animalia.geo_range;
      activeTime = animalia.active_time;
      latinName = animalia.latin_name;
      maxLength = animalia.length_max;
      minLength = animalia.length_min;
      minWeight = animalia.weight_min;
      maxWeight = animalia.weight_max;
      habitat = animalia.habitat;
    }
  });

  return (
    <div>
      <div>
        <DetailsPageHeader name={animalName} />
      </div>
      <section className="animals-details-cont">
        <div id="details-header">
          <img src={image} id="species" alt="" />
          <h1>
            {animalName}
          </h1>
        </div>
        <ul className="details">
          <li>
            <h2>Latin Name</h2>
            <p>
              {latinName}
            </p>
          </li>
          <li>
            <h2>Life Span</h2>
            <p>
              {lifeSpan}
            </p>
          </li>
          <li>
            <h2>Habitat</h2>
            <p>
              {habitat}
            </p>
          </li>
          <li>
            <h2>Deit</h2>
            <p>
              {diet}
            </p>
          </li>
          <li>
            <h2>Active Time</h2>
            <p>
              {activeTime}
            </p>
          </li>
          <li>
            <h2>Geographical Range</h2>
            <p>
              {geoRange}
            </p>
          </li>

          <li>
            <h2>Weight</h2>
            <p>
              Maximum Weight:
              {' '}
              {maxWeight}
            </p>
            <p>
              Minimum Weight:
              {' '}
              {minWeight}
            </p>
          </li>

          <li>
            <h2>Length</h2>
            <p>
              Maximum Length:
              {' '}
              {maxLength}
            </p>
            <p>
              Minimum Length:
              {' '}
              {minLength}
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};
export default DisplayAnimalDetails;
