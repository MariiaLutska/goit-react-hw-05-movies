import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';
import { Box } from '../Box';
import { Section } from '../Section/section.jsx';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(id).then(data => {
      setReviews(data.results);
    });
  }, [id]);

  return (
    <>
      {reviews &&
        reviews.map(review => (
          <Box as="li" key={reviews.id}>
            <Section title="Autor:">{review.autor}</Section>
            <p>{review.content}</p>
          </Box>
        ))}
    </>
  );
};
