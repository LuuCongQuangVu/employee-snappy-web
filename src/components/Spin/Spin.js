import React from 'react';
import classNames from 'classnames/bind';
import { CgSpinner } from 'react-icons/cg';

import styles from './Spin.module.scss';

const clsx = classNames.bind(styles);

function Spin({ children, spinning }) {
  return (
    <div className={clsx('wrapper')}>
      {spinning && (
        <div className={clsx('spin')}>
          <div className={clsx('loading')}>
            <CgSpinner className={clsx('icon')} />
          </div>
        </div>
      )}

      {children}
    </div>
  );
}

export default Spin;
