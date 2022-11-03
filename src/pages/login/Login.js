import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { toast } from 'react-toastify';
import validator from 'validator';

import styles from './Login.module.scss';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Spin from '~/components/Spin';
import { withUser } from '~/hocs';
import { isEmpty } from '~/utils/handle_variable';

const clsx = classNames.bind(styles);

const propTypes = {
  login: PropTypes.func,
  user: PropTypes.object,
};
function Login({ login, user }) {
  // props
  const { requesting, information = {} } = user;
  // hooks
  const [inputLogin, setInputLogin] = useState({ email: '', password: '' });
  const { email, password } = inputLogin;

  console.log(user);

  // handle
  const handleOnChangeInput = (event) =>
    setInputLogin((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  const handleIsValid = () => {
    if (!validator.isEmail(String(email))) return !toast.error('Email không đúng định dạng :(');
    if (isEmpty(inputLogin)) return !toast.error('Bạn chưa nhập email hoặc mật khẩu');
    return true;
  };

  const handleOnLogin = () => {
    if (handleIsValid()) login(inputLogin);
  };

  return (
    <Spin spinning={requesting}>
      <div className={clsx('wrapper')}>
        <div className={clsx('dark-overlay')}>
          <div className={clsx('inner')}>
            <h1>Đăng nhập</h1>
            <p>Vui lòng điền thông tin tài khoản mật khẩu vể đi vào thiệt lập nhân viên</p>
            <div className="mb-12 mt-16">
              <label htmlFor="email">Email:</label>
              <div>
                <Input
                  type="email"
                  placeholder="Nhập email của bạn"
                  name="email"
                  value={email}
                  id="email"
                  onChange={handleOnChangeInput}
                />
              </div>
            </div>
            <div className="mb-12">
              <label htmlFor="password">Mật khẩu</label>
              <div>
                <Input
                  type="password"
                  placeholder="Nhập mật khẩu của bạn"
                  name="password"
                  value={password}
                  onChange={handleOnChangeInput}
                  id="password"
                />
              </div>
            </div>

            <div>
              <Button primary onClick={handleOnLogin}>
                Đặng nhập
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Spin>
  );
}

Login.propTypes = propTypes;

export default withUser(Login);
