const ReviewsList = ({ revArrey }) => {
  if (revArrey.length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  } else {
    return (
      <ul>
        {revArrey.map(rev => (
          <li key={rev.id}>
            <h3>{rev.author}</h3>
            <p>{rev.content}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default ReviewsList;
