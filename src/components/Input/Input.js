import React from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';

const clsx = classNames.bind(styles);

function Input({ className, ...props }) {
  return <input className={clsx('wrapper', { className })} {...props} />;
}

export default Input;
