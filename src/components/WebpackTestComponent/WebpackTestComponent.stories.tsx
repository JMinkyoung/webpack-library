import React from "react";
import WebpackTestComponent from "./WebpackTestComponent";

export default {
  title: "TestComponent"
};

export const WithText = () => (
  <WebpackTestComponent
    heading="With Text Test"
    content={<h2>Content 테스트</h2>}
  />
);

export const WithButtons = () => (
  <WebpackTestComponent
    heading="With Buttons Test"
    content={
      <div>
        <button className="py-2 px-4 rounded-lg shadow-md text-white bg-blue-500">me</button>
      </div>
    }
  />
);