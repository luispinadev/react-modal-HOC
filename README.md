This HOC gives the wrapped component a modal behaviour.  

Depending on the options, this can output a traditional modal popup with backdrop (using the provided default styles), or just
add a 'deferred click' like behaviour to trigger a callback on click outside of the component,
without changing the component's style.  


Options:

 * className:  class name for top level div (default: null)
 * closeCallbackName: name for the callback that closes the modal. This should be a prop on the wrapped component (default empty string)
 * showCloseButton: wether to show the 'close button' before the component (default: false)
 * closeButton: react element or string for the close button (default: <div>x</div>)
 * closeOnBackdropClick: wether to trigger the 'closeCallback' when backdrop is clicked (default: true)
 * isFixed: wether to apply the default 'fixed' styles. These will position the modal in the middle of the screen (default: false)
 * backdropOpacity: numeric opacity value for backdrop, ex: use 0 for transparent, 1 for no transparency (default: 0.3)
 * backdropClass: custom class name for backdrop (default: styles.backdrop )
 * containerClass: custom class name for container (default: styles.container)
