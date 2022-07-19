/* eslint-disable react/no-this-in-sfc */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Positions } from '../../react-app-env';
import { serverRequest, postServerRequest } from '../api/api';
import './PostRequest.scss';

export const PostRequest : React.FC = () => {
  const validEmailRegex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
  const validPhoneRegex = /^[+]{0,1}380([0-9]{9})$/;

  const [positions, setPositions] = useState<Positions[]>([]);

  const [name, setName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(true);

  const [email, setEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(true);

  const [phone, setPhone] = useState('');
  const [phoneIsValid, setPhoneIsValid] = useState(true);

  const [uploadedPhoto, setUploadedPhoto] = useState<File[]>([]);
  const [uploadedPhotoName, setUploadedPhotoName] = useState('Upload your photo');
  const [isUploadValid, setUploadValid] = useState(false);

  const [radioChecked, setRadioChecked] = useState<null | number>(null);

  useEffect(() => {
    const fetcher = async () => {
      const result = await serverRequest('positions');

      setPositions(result.positions);
    };

    fetcher();
  }, []);

  return (
    <div className="post container" id="post">
      <h1 className="post__heading">Working with POST request</h1>
      <form
        className="post__form form"
        id="post_form"
        onSubmit={(event) => {
          event.preventDefault();

          if (name.length < 2) {
            setNameIsValid(false);
          }

          if (!email.match(validEmailRegex)) {
            setEmailIsValid(false);
          }

          if (!phone.match(validPhoneRegex)) {
            setPhoneIsValid(false);
          }

          if (uploadedPhoto.length > 0) {
            setUploadValid(true);
          }

          if (
            nameIsValid
            && emailIsValid
            && phoneIsValid
            && isUploadValid
            && radioChecked !== null) {
            const data = new FormData();

            data.append('name', name);
            data.append('email', email);
            data.append('phone', phone);
            data.append('position_id', `${radioChecked}`);
            data.append('photo', uploadedPhoto[0]);

            postServerRequest(data);
          }
        }}
      >
        <label htmlFor="name" className="form__label--container">
          <input
            className={classNames(
              'form__input--text',
              { error: !nameIsValid },
            )}
            type="text"
            placeholder="Your name"
            id="name"
            value={name}
            onBlur={() => {
              if (name.length < 2) {
                setNameIsValid(false);
              }
            }}
            onChange={(event) => {
              setName(event.target.value);
              if (name.length > 2) {
                setNameIsValid(true);
              }
            }}
          />
          <label
            htmlFor="name"
            className={classNames(
              'form__label--legend',
              { legend_visible: name.length > 0 },
              { notValid: !nameIsValid },
            )}
          >
            name
          </label>
        </label>
        <label htmlFor="name" className="form__label--container">
          <input
            className={classNames(
              'form__input--text',
              { error: emailIsValid },
            )}
            type="text"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label
            htmlFor="email"
            className={classNames(
              'form__label--legend',
              { legend_visible: email.length > 0 },
              { error: emailIsValid },
            )}
          >
            email
          </label>
        </label>
        <label htmlFor="name" className="form__label--container" id="phone_container">
          <input
            id="phone"
            className="form__input--text"
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
              if (phoneIsValid && (phone.length === 13)) {
                setPhoneIsValid(true);
              }
            }}
            onFocus={(event) => {
              if (event.target.value === '') {
                setPhone('+38');
              }
            }}
          />
          <label
            htmlFor="phone"
            className={classNames('form__label--legend', { legend_visible: phone.length > 0 })}
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
                  value={singlePosition.id}
                  onChange={(event) => {
                    setRadioChecked(Number(event.target.value));
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
                  value={singlePosition.id}
                  onChange={(event) => {
                    setRadioChecked(Number(event.target.value));
                  }}
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
          <label
            htmlFor="photo_upload"
            className="fake_upload_field"
          >
            {uploadedPhotoName}
          </label>
          <input
            className="form__input--file"
            type="file"
            id="photo_upload"
            accept="image/jpeg, image/jpg"
            onChange={(event) => {
              const reader = new FileReader();
              let correctSize = false;

              if ((event.target.files !== null) && (event.target.files.length > 0)) {
                reader.readAsDataURL(event.target.files[0]);

                reader.onload = () => {
                  const img = new Image();
                  const temp = `${reader.result}`;

                  img.src = temp;
                  img.onload = () => {
                    const height = img.height;
                    const width = img.width;

                    if ((height >= 50) && (width >= 50)) {
                      correctSize = true;
                    }

                    if (
                      event.target.files !== null
                  && event.target.files.length > 0
                  && event.target.files[0].size <= 5242880
                  && correctSize
                    ) {
                      setUploadedPhotoName(event.target.files[0].name);
                      setUploadedPhoto([...event.target.files]);
                      setUploadValid(true);
                    }
                  };
                };
              } else {
                setUploadedPhotoName('Upload your photo');
                setUploadValid(false);
              }
            }}
          />
        </label>
        <button
          type="submit"
          className="button form__submit"
          disabled={(
            name.length < 2
            || email.length < 2
            || phone.length < 2
            || (radioChecked === null)
            || !(isUploadValid))}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};
