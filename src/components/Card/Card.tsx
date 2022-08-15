import React, { useEffect, useState } from 'react';
import { toolTiper } from '../Tooltiper/Tooltiper';
import './Card.scss';

interface Props {
  imageUrl: string;
  name: string;
  position: string,
  email: string,
  phone: string,
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
