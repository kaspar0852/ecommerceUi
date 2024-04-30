import React from 'react';
import ReactDOM from 'react-dom';

const renderToaster = (Component: React.FC): Promise<void> => {
    return new Promise((resolve) => {
      let toasterRoot = document.getElementById('toaster-root');
      if (!toasterRoot) {
        toasterRoot = document.createElement('div');
        toasterRoot.id = 'toaster-root';
        document.body.appendChild(toasterRoot);
      }
  
      const toasterContainer = document.createElement('div');
      toasterRoot.appendChild(toasterContainer);
  
      ReactDOM.render(<Component />, toasterContainer);
  
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(toasterContainer);
        toasterRoot.removeChild(toasterContainer);
        resolve();
      }, 5600);
    });
  };


export default renderToaster;
