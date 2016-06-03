import React from 'react'
import classnames from 'classnames' // util for conditional classname generation

import styles from './styles'

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
    <div className={classnames(containerClass, { [styles.isFixed]: isFixed })}>
      { showCloseButton && <div onClick={ props[closeCallbackName] } >{closeButton}</div> }
      <WrappedComponent {...props} />
    </div>
  </div>

