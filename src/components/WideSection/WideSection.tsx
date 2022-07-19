import React from 'react';
import './WideSection.scss';

export const WideSection: React.FC = () => {
  return (
    <div className="container--full wide_section">
      <div className="wide_section_container">
        <h1 className="wide_section__heading">
          Test assignment for front-end developer
        </h1>
        <p className="wide_section__paragraph">
          What defines a good front-end developer is one that has skilled knowledge of HTML,
          CSS, JS with a vast understanding of
          User design thinking as they&#39;ll be building web interfaces with accessibility in mind.
          They should also be excited to learn,
          as the world of Front-End Development keeps evolving.
        </p>
        <button
          type="button"
          className="button"
          onClick={() => {
            document.getElementById('post')?.scrollIntoView();
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};
