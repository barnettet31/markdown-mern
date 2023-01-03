import React, { ReactElement, ReactNode, ReactPropTypes } from "react";
interface IProps {
  children: ReactNode;
  errorElement: ReactNode;
}
interface ErrorState {
  hasError: boolean;
}
export class ErrorBoundary extends React.Component<IProps, ErrorState> {
  state: ErrorState = {
    hasError: false,
  };
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ hasError: true });
  }
  render(): React.ReactNode {
    if (this.state.hasError) {
      console.log(this.state);
      return this.props.errorElement;
    }
    return this.props.children;
  }
}
