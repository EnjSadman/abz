import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Positions } from '../../react-app-env';
import { serverRequest, postServerRequest } from '../api/api';
import './PostRequest.scss';

interface Props {
  serverResponse: number | null,
  setServerResponse: (arg0 : number | null) => void,
}

export const PostRequest : React.FC<Props> = ({ serverResponse, setServerResponse }) => {
  const validEmailRegex = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
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
  const [uploadError, setUploadError] = useState<null | string>(null);
  const [isUploadValid, setUploadValid] = useState(false);

  const [radioChecked, setRadioChecked] = useState<null | number>(null);

  const responseGetter = async (someData : FormData) => {
    const result = await postServerRequest(someData);

    setServerResponse(result);
  };

  useEffect(() => {
    const fetcher = async () => {
      const result = await serverRequest('positions');

      setPositions(result.positions);
    };

    fetcher();
  }, []);

  return (
    <div className="post container" id="post">
      {((serverResponse === null) || (serverResponse === 422) || (serverResponse === 409)) ? (
        <>
          <h1 className="post__heading">Working with POST request</h1>
          {
            serverResponse === 409
            && (<h2 className="error_heading">User with this email or phone already exist</h2>)
          }
          <form
            className="post__form form"
            id="post_form"
            onSubmit={(event) => {
              event.preventDefault();

              if (name.length < 2) {
                setNameIsValid(false);
              }

              if (!validEmailRegex.test(email)) {
                setEmailIsValid(false);
              }

              if (!validPhoneRegex.test(phone)) {
                setPhoneIsValid(false);
              }

              if (uploadedPhoto.length > 0) {
                setUploadValid(true);
              }

              if (nameIsValid
            && emailIsValid
            && phoneIsValid
            && isUploadValid
            && radioChecked !== null) {
                setServerResponse(null);
                const data = new FormData();

                data.append('name', name);
                data.append('email', email);
                data.append('phone', phone);
                data.append('position_id', `${radioChecked}`);
                data.append('photo', uploadedPhoto[0]);

                responseGetter(data);
              }
            }}
          >
            <label htmlFor="name" className="form__label--container">
              <input
                className={classNames(
                  'form__input--text',
                  { error_input: !nameIsValid },
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
                  if (event.target.value.length >= 2) {
                    setNameIsValid(true);
                  }
                }}
              />
              <label
                htmlFor="name"
                className={classNames(
                  'form__label--legend',
                  { legend_visible: name.length > 0 },
                  { error_label: !nameIsValid },
                )}
              >
                name
              </label>
              {!nameIsValid && (
                <label
                  className="form__label--under error_label"
                  htmlFor="name"
                >
                  Invalid name
                </label>
              )}
            </label>
            <label htmlFor="email" className="form__label--container">
              <input
                className={classNames(
                  'form__input--text',
                  { error_input: !emailIsValid },
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
                  { error_label: !emailIsValid },
                )}
              >
                email
              </label>
              {!emailIsValid && (
                <label
                  className="form__label--under error_label"
                  htmlFor="email"
                >
                  Invalid email
                </label>
              )}
            </label>
            <label htmlFor="phone" className="form__label--container" id="phone_container">
              <input
                id="phone"
                className={classNames(
                  'form__input--text',
                  { error_input: !phoneIsValid },
                )}
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
                className={classNames(
                  'form__label--legend',
                  { legend_visible: phone.length > 0 },
                  { error_label: !phoneIsValid },
                )}
              >
                phone
              </label>
              <label
                className={classNames('form__label--under', { error_label: !phoneIsValid })}
                htmlFor="phone"
              >
                {
                  (phoneIsValid)
                    ? ('+38 (XXX) XXX - XX - XX')
                    : ('Invalid phone')
                }
              </label>
            </label>
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
                className={classNames('fake_upload_button', { error_input: uploadError !== null })}
              >
                Upload
              </label>
              <label
                htmlFor="photo_upload"
                className={classNames('fake_upload_field', { error_input: uploadError !== null })}
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

                  setUploadError(null);

                  if ((event.target.files !== null) && (event.target.files.length > 0)) {
                    reader.readAsDataURL(event.target.files[0]);

                    reader.onload = () => {
                      const img = new Image();
                      const temp = `${reader.result}`;

                      img.src = temp;
                      img.onload = () => {
                        const { height } = img;
                        const { width } = img;

                        if ((height >= 50) && (width >= 50)) {
                          correctSize = true;
                        }

                        if (event.target.files !== null
                      && event.target.files.length > 0
                      && event.target.files[0].size <= 5242880
                      && correctSize) {
                          setUploadedPhotoName(event.target.files[0].name);
                          setUploadedPhoto([...event.target.files]);
                          setUploadValid(true);
                        } else if (event.target.files !== null
                          && event.target.files[0].size > 5242880) {
                          setUploadedPhotoName('Upload your photo');
                          setUploadError('image size higher than 5MB');
                        } else if (!correctSize) {
                          setUploadedPhotoName('Upload your photo');
                          setUploadError('resolution must be more than 50x50');
                        }
                      };
                    };
                  } else {
                    setUploadedPhotoName('Upload your photo');
                    setUploadValid(false);
                  }
                }}
              />
              {uploadError !== null && (
                <label
                  className="form__label--under error_label"
                >
                  {uploadError}
                </label>
              )}
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
        </>
      )
        : (
          <img
            src="../../images/sent.webp"
            alt="registration completed"
            className="sent_image"
          />
        )}
    </div>
  );
};
