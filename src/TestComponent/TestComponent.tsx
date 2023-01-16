import React from "react";

import { TestComponentProps } from "./TestComponent.type";


const test: React.FC<TestComponentProps> = ({ heading, content }) => {
  return (
    <div>
      <div>{content}</div>
    </div>
  )
}

export default test;