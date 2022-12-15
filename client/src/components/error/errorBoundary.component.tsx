import React, { ReactElement, ReactNode, ReactPropTypes } from "react";
interface IProps {
    children:ReactNode
    errorElement:ReactNode
}
interface ErrorState {
    hasError:boolean;
}
export class ErrorBoundary extends React.Component<IProps, ErrorState>{
    state:ErrorState ={
        hasError:false
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void
    {
        this.setState({hasError:true});
        console.log(error, errorInfo);
    }
    render(): React.ReactNode
    {
        if(this.state.hasError){
            return this.props.errorElement;
        }
        return this.props.children;
    }
}
