import React from "react";
import TestComponent from "./TestComponent";

export default {
  title: "TestComponent"
};

export const WithText = () => (
  <TestComponent
    heading="With Text Test"
    content={
    <div className="bg-blue-300 p-40">
      <h1 className="text-3xl font-bold underline text-center">
        TailWind Test
      </h1>
    </div>}
  />
);

export const WithButtons = () => (
  <TestComponent
    heading="With Buttons Test"
    content={
      <div>
        <button onClick={() => alert("You clicked me!")}>Click me</button>
      </div>
    }
  />
);