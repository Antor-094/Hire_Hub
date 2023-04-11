import React from "react";

const Blog = () => {
  return (
    <div className="mt-11 space-y-3">
      <div className="card md:w-[80%] mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">When should you use context API?</h2>
          <p>
            Prop drilling can become tedious and error-prone, especially in
            large and complex applications with many components. Using the
            Context API allows you to avoid having to pass props down through
            every level of the component tree and makes it easier to manage the
            state of the application. By using context to share data between
            components, you can avoid the need for prop drilling and simplify
            your codebase, making it easier to maintain and scale your
            application over time.
          </p>
        </div>
      </div>
      <div className="card md:w-[80%] mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title"> What is a custom hook?</h2>
          <p>
            A custom hook is a function that you write in React to reuse some
            code in multiple places. It uses built-in hooks like useState,
            useEffect, etc. to manage state and other logic. You name your
            custom hook with the word use in front of it, like useMyCustomHook.
            You can use custom hooks to make your code more organized, easier to
            understand, and more efficient.
          </p>
        </div>
      </div>
      <div className="card md:w-[80%] mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title"> What is useRef?</h2>
          <p>
            useRef is a hook in React that allows you to create a reference to a
            DOM element or a value that persists across component renders. You
            can use it to manipulate the DOM directly, store mutable values, or
            cache values between renders. For example, if you want to focus an
            input element or access its value, you can create a ref variable
            using useRef and attach it to the element using the ref prop. This
            creates a reference to the element that can be used later in your
            code. Alternatively, you can use useRef to store a value that you
            want to persist across component renders. This can be useful for
            caching values that are expensive to compute or managing state that
            doesn't trigger a re-render. In summary, useRef is a tool in React
            that provides a way to reference DOM elements and persist values
            across renders.
          </p>
        </div>
      </div>
      <div className="card md:w-[80%] mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title"> What is useMemo?</h2>
          <p>
            useMemo is a tool in React that lets you optimize performance by
            memoizing the result of a function call and recompute it only when
            its dependencies change. In simpler terms, you can use useMemo to
            store the result of a calculation, and only recalculate it when the
            inputs to the calculation change. This can improve the speed of your
            app and reduce unnecessary calculations. For example, if you have a
            function that takes a long time to execute, you can use useMemo to
            cache its result and avoid re-executing it unnecessarily. In
            summary, useMemo is a useful tool in React for optimizing
            performance by caching the result of expensive calculations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
