import React from 'react'
import styles from './styles.styl' // using wepack style require for default CSS include

export default (WrappedComponent, {
  className= null,
  closeCallbackName = '',
  showCloseButton = false,
  closeButton = <div className={styles.closeButton} >x</div>,
  closeOnBackdropClick = true,
  isFixed = false,
  backdropOpacity = 0.3,
  backdropClass = styles.backdrop,
  containerClass = styles.container,
}) => props => 
  <div className={className}>
    <div
      className={backdropClass} 
      style={ {opacity: backdropOpacity }}
      onClick={closeOnBackdropClick && props[closeCallbackName]}
    />
    <div className={`${containerClass} ${isFixed ? styles.isFixed : ''}`}>
      { showCloseButton && <div onClick={ props[closeCallbackName] } >{closeButton}</div> }
      <WrappedComponent {...props} />
    </div>
  </div>

