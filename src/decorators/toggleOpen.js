import React, {PureComponent} from 'react';

export default ToggleComponent => class Component extends PureComponent {
    state ={
        isOpen: false,
    };

    toggleOpen = () => {
        this.setState({isOpen: !this.state.isOpen})
    };

    render() {
        return (
            <ToggleComponent
                {...this.props}
                {...this.state}
                toggleOpen={this.toggleOpen}
            />
        )
    }
}