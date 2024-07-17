import { Component } from "react";
import { useNavigate } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    // console.log("constructor called");
    this.state = {
      hasError: false,
      error: undefined,
    };
  }

  static getDerivedStateFromError(error) {
    // console.log("getDerived");
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("logging", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      console.log("rendering");
      return (
        <div>
          <h1>Something went wrong: {this.state.error.message}</h1>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export { ErrorBoundary };
