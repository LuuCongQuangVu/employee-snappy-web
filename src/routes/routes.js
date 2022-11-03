import Employee from '~/pages/employee';
import Login from '~/pages/login';
import config from '~/config';

const publicRoutes = [
  {
    path: config.routes.login,
    component: Login,
    title: 'Đăng nhập | Quản lý nhân viên',
  },
  {
    path: config.routes.employee,
    component: Employee,
    title: 'Quản lý nhân viên',
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
