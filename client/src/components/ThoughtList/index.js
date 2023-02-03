import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating';

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${thought.thoughtAuthor}`}
                >
                  
                  <span style={{ fontSize: '1rem' }}>
                  {thought.thoughtAuthor}  created this review on {thought.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You created this review on {thought.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <Rating value={thought.thoughtRating} />
              {/* <p>{thought.thoughtRating}</p> */}
              <p>{thought.thoughtCountry}</p>
              <p>{thought.thoughtCity}</p>
              <p>{thought.thoughtLandmark}</p>
              <p>{thought.thoughtText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${thought._id}`}
            >
              Edit this Review
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
