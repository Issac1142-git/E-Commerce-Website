import React from "react";
import {
  ErrorImageContainer,
  ErrorImageText,
  ErrorImageOverlay,
} from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };
  // errorboundary is a error handling class based component
  // getDerivedStateFromError catch the error and set the error with state
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  //we can access the error  about which component throw the error with the info
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError)
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>Page you looking for is not found</ErrorImageText>
        </ErrorImageOverlay>
      );

    return this.props.children;
  }
}

export default ErrorBoundary;
