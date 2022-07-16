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
  if (className === 'card__phone') {
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
      <p
        className={`${className}`}
        data-tip={someString}
      >
        {temp}
      </p>
      <ReactTooltip>
        {someString}
      </ReactTooltip>
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
