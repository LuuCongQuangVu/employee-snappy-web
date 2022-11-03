import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Spin from '~/components/Spin';
import { withUser } from '~/hocs';

const clsx = classNames.bind(styles);

const propTypes = {
  login: PropTypes.func,
};

function Login({ login }) {
  console.log(login);

  return (
    <Spin>
      <div className={clsx('wrapper')}>
        <div className={clsx('dark-overlay')}>
          <div className={clsx('inner')}>
            <h1>Đăng nhập</h1>
            <p>Vui lòng điền thông tin tài khoản mật khẩu vể đi vào thiệt lập nhân viên</p>
            <div className="mb-12 mt-16">
              <label htmlFor="email">Email:</label>
              <div>
                <Input type="email" placeholder="Nhập email của bạn" id="email" />
              </div>
            </div>
            <div className="mb-12">
              <label htmlFor="password">Mật khẩu</label>
              <div>
                <Input type="password" placeholder="Nhập mật khẩu của bạn" id="password" />
              </div>
            </div>

            <div>
              <Button primary>Đặng nhập</Button>
            </div>
          </div>
        </div>
      </div>
    </Spin>
  );
}

Login.propTypes = propTypes;

export default withUser(Login);
