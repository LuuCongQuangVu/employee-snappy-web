import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const clsx = classNames.bind(styles);

function Button({
  to,
  href,
  onClick,
  children,
  primary,
  className,
  small,
  large,
  style,
  primaryOutline,
  text = true,
  disabled,
  rounded,
  icon,
  ...passProps
}) {
  let Component = 'button';
  const props = { onClick, style, ...passProps };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  const classes = clsx('wrapper', {
    text,
    primary,
    'primary-outline': primaryOutline,
    small,
    large,
    disabled,
    rounded,
    [className]: className,
  });

  return (
    <Component className={classes} {...props}>
      {icon && <span className="mr-8">{icon}</span>} <span>{children}</span>
    </Component>
  );
}

export default Button;
