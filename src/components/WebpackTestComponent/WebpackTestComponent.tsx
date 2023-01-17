import React from 'react';
import {WebpackTestComponentType} from "./WebpackTestComponent.type";


const WebpackTestComponent: React.FC<WebpackTestComponentType> = ({ heading, content }) => {
  return (
    <div>
      <h1>
        {heading}
      </h1>
      <div>{content}</div>
    </div>
  )};

export default WebpackTestComponent;