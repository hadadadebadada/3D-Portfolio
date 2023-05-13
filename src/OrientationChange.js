import React from 'react';

class OrientationChange extends React.Component {
  state = {
    isPortrait: window.innerHeight > window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ isPortrait: window.innerHeight > window.innerWidth });
  };

  render() {
    const { isPortrait } = this.state;

    const appStyles = isPortrait
      ? {
          transform: 'rotate(-90deg)',
          transformOrigin: '50% 50%',
          width: '100vh',
          height: '100vw',
          overflowX: 'hidden',
          position: 'absolute',
          top: '50%',
          left: '50%',
          
          WebkitTransform: 'translate(-50%, -50%) rotate(-90deg)',
          MozTransform: 'translate(-50%, -50%) rotate(-90deg)',
          MsTransform: 'translate(-50%, -50%) rotate(-90deg)',
          OTransform: 'translate(-50%, -50%) rotate(-90deg)',
        }
      : {};

    return <div style={appStyles}>{this.props.children}</div>;
  }
}

export default OrientationChange;