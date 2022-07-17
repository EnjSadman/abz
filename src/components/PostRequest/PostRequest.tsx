/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Positions } from '../../react-app-env';
import { serverRequest } from '../api/api';
import './PostRequest.scss';

export const PostRequest : React.FC = () => {
  const [positions, setPositions] = useState<Positions[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [radioChecked, setRadioChecked] = useState<null | string>(null);

  useEffect(() => {
    const fetcher = async () => {
      const result = await serverRequest('positions');

      setPositions(result.positions);
    };

    fetcher();
  }, []);

  return (
    <div className="post container">
      <h1 className="post__heading">Working with POST request</h1>
      <form
        className="post__form form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="name" className="form__label--container">
          <input
            className="form__input--text"
            type="text"
            placeholder="Your name"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <label
            htmlFor="name"
            className="form__label--legend"
          >
            name
          </label>
        </label>
        <label htmlFor="name" className="form__label--container">
          <input
            className="form__input--text"
            type="text"
            placeholder="Email"
            id="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label
            htmlFor="email"
            className="form__label--legend"
          >
            email
          </label>
        </label>
        <label htmlFor="name" className="form__label--container">
          <input
            id="phone"
            className="form__input--text"
            type="text"
            placeholder="Phone"
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
          <label
            htmlFor="phone"
            className="form__label--legend"
          >
            phone
          </label>
        </label>
        <label className="form__label--phone" htmlFor="phone">+38 (XXX) XXX - XX - XX</label>
        <p className="form__heading--radio">Select your position</p>
        {positions.map((singlePosition, index) => (
          (index === positions.length - 1)
            ? (
              <label key={singlePosition.id} id="last_radio" className="form__label--radio">
                <input
                  type="radio"
                  className="form__input--radio"
                  name="position"
                  id={singlePosition.name}
                  value={singlePosition.name}
                  onChange={(event) => {
                    setRadioChecked(event.target.value);
                  }}
                />
                <label htmlFor={singlePosition.name} className="custom_radio" />
                <p className="form__label--text">
                  {singlePosition.name}
                </p>
              </label>
            )
            : (
              <label key={singlePosition.id} className="form__label--radio">
                <input
                  type="radio"
                  className="form__input--radio"
                  name="position"
                  id={singlePosition.name}
                />
                <label htmlFor={singlePosition.name} className="custom_radio" />
                <p className="form__label--text">
                  {singlePosition.name}
                </p>
              </label>
            )

        ))}
        <label
          htmlFor="photo_upload"
          className="fake_upload"
        >
          <label
            htmlFor="photo_upload"
            className="fake_upload_button"
          >
            Upload
          </label>
          <label htmlFor="photo_upload" className="fake_upload_field">
            Upload your photo
          </label>
          <input
            className="form__input--file"
            type="file"
            id="photo_upload"
            accept="image/png, image/jpg"
          />
        </label>
        <button
          type="submit"
          className="button form__submit"
          disabled
        >
          Sign up
        </button>
      </form>
    </div>
  );
};
