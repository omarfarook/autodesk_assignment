import { Component } from 'react';
import { createPortal } from 'react-dom'

const toasterRoot = document.getElementById('toaster') as HTMLElement;

class Toaster extends Component {
    el: HTMLElement = document.createElement('div');

    componentDidMount() {
        toasterRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        toasterRoot.removeChild(this.el);
    }

    render() {
        return createPortal(this.props.children, this.el);
    }
}

export default Toaster