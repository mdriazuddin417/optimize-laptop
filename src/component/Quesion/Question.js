import React from "react";
import "./Question.css";
const Question = () => {
  return (
    <div>
      <h2 className="text-center text-primary">Question Mark</h2>

      <div className="question-container">
        <div className="question">
          <h4>How React works?</h4>
          <article>
            React is a declarative,efficient and flexible JavaScript library for
            creating user interfaces. React js is an open source,component-based
            front-end library that is solely responsible for the view layer of
            the each state of my application and will efficiently update and
            render efficiently when my data changes. React A implements a
            virtual DOM which is basically a DOM tree representation in
            JavaScript. The DOM can understand when there is a change in the
            original code, so it will use its virtual representation. Virtual
            DOM will then try to find the most effective way to update the
            browser's DOM.
          </article>
        </div>
        <div className="question">
          <h4>Props Vs State?</h4>
          <article>
            Props are read-only and State changes can be asynchronous. Props are
            immutable and State is Mutable. props allow you to pass data from
            one component to other components as an argument. State holds
            information about the components. Props are used to communicate
            between components and State can be used for rendering dynamic
            changes with the component . Stateless component can have props and
            Stateless components can not have site. props make components
            reuseable and State can not make components reuseable;
          </article>
        </div>
      </div>
    </div>
  );
};

export default Question;
