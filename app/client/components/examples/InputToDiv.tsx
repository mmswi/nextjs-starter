import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { Portal } from '../shared/Portal';

export const InputToDiv: FunctionComponent<any> = (): JSX.Element => {
  const [text, setText] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  //
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log('clicked!!!!');
  };

  return (
    <div onClick={handleClick}>
      <input type="text" onChange={handleChange}/>
      <Portal id="my-input-portal">
        <div>
          <strong>Typed text is {text}</strong>
        </div>
      </Portal>
    </div>
  );
};