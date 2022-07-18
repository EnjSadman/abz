import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import './Card.scss';

interface Props {
  imageUrl: string;
  name: string;
  position: string,
  email: string,
  phone: string,
}

function toolTiper(someString : string, className : string) {
  if (className.includes('card__phone')) {
    const redactedString = `${someString.slice(0, 3)} (${someString.slice(3, 6)}) ${someString.slice(6, 9)} ${someString.slice(9, 11)} ${someString.slice(11, 13)}`;

    return (
      <p
        className={`${className}`}
      >
        {redactedString}
      </p>
    );
  }

  if (someString.length <= 34) {
    return (
      <p
        className={`${className}`}
      >
        {someString}
      </p>
    );
  }

  const temp = `${someString.slice(0, 34)}...`;

  return (
    <>
      <ReactTooltip
        id={temp}
        place="bottom"
        arrowColor="transparent"
        backgroundColor="rgba(0, 0, 0, 0.87)"
      >
        {someString}
      </ReactTooltip>
      <p
        data-tip
        data-for={temp}
        className={`${className}`}
      >
        {temp}
      </p>

    </>
  );
}

export const Card : React.FC<Props> = ({
  imageUrl,
  name,
  position,
  email,
  phone,
}) => {
  const [image, setImage] = useState(imageUrl);

  useEffect(() => {
    const imgChecker = async () => {
      fetch(imageUrl).catch(_err => {
        setImage('images/photo-cover.png');
      });
    };

    imgChecker();
  }, []);

  return (
    <div className="card">
      <img
        src={`${image}`}
        alt={`${name}`}
        className="card__photo"
      />
      {toolTiper(name, 'card__name')}
      {toolTiper(position, 'card__position')}
      {toolTiper(email, 'card__email')}
      {toolTiper(phone, 'card__phone')}
    </div>
  );
};
