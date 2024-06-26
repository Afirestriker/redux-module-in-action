# Redux and Redux-toolkit

## React is a library used to build user interfaces

## redux and react are two separate things

## Redux is a library for managing state in a predictable way in JavaScript applications

## Redux can be used with any UI library or framework such as React, Angular, Vue, or even vanilla JavaScript

## `redux-toolkit` is a library for efficient redux development

It is an enhance version of redux that help smoother the developer experience by addressing few redux shortcomings

## `redux` and `redux-toolkit` don't need a UI library to work

## To integrate redux with react, we need a library called `react-redux`

## `react-redux` is the official Redux UI binding library for React

`react-redux` offers a couple of functions that helps us connect the react application with redux.

`react-redux` binds the two libraries together.

## When should you use redux in the react application?

- Not all application need redux.
- It might be neeful where
  - Scenarios, where you large amounts of application state that are needed in manay places in the app.
  - The app state is updated frequently over time.
  - The logic to update the state may be complex.
  - The app has a medium or large-sized codebase, and might be worked on by many people.

## Redux operates under the three core princple/ concepts

1. Store - holds the state of your application. Only one store for the entire application (recommended)
2. Action - describe **what** happened in the application.
3. Reducer - handles the action and decides **how** to handle the state.
