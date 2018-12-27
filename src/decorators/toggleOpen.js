import React, {Component} from 'react';

export default (OriginComponent) => class WrappedComponent extends Component {
    state ={
        opened: false,
    };

    toggleOpen = () => {
        this.setState({opened: !this.state.opened})
    };

    render() {
        return (
            <OriginComponent {...this.props} {...this.state}  toggleOpen={this.toggleOpen} />
        )
    }
}