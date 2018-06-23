import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const SeriesListItem = ({ series }) => (
  console.log(series);
    <li>
      <Link to={'/series/${series.show.id}'}>
        {series.show.name}
      </Link>
      {series}
    </li>
)

const SeriesList = (props) => {
  return (
    <div>
      <ul className="series-list">
        {props.list.map(series => (
          <SeriesListItem series={series.show.name} key={series.show.id}/>
        ))}
      </ul>
    </div>
  )
}

export default SeriesList;
