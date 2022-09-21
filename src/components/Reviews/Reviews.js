import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';
import s from './Reviews.module.css';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (id === '') {
      return;
    } else {
      fetchReviews(id)
        .then(review => {
          setReviews(review.results);
        })
        .catch(error => console.log(error));
    }
  }, [id]);

  return (
    <ul>
      {reviews &&
        reviews.map(review => (
          <li className={s.item} key={review.id}>
            <h2>{review.author}</h2>
            <p>{review.content}</p>
          </li>
        ))}
    </ul>
  );
};

export default Reviews;
