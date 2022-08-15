import React from 'react';
import ReactTooltip from 'react-tooltip';

export function toolTiper(someString : string, className : string) {
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
