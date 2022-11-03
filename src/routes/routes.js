import Employee from '~/pages/employee';
import Login from '~/pages/login';
import Register from '~/pages/register';
import Home from '~/pages/home';
import config from '~/config';

const publicRoutes = [
  {
    path: config.routes.login,
    component: Login,
    title: 'Đăng nhập | Quản lý nhân viên',
  },
  {
    path: config.routes.register,
    component: Register,
    title: 'Đăng ký | Quản lý nhân viên',
  },
  {
    path: config.routes.home,
    component: Home,
    title: 'Đăng ký | Quản lý nhân viên',
  },
];

const privateRoutes = [
  {
    path: config.routes.employee,
    component: Employee,
    title: 'Quản lý nhân viên',
  },
];

export { publicRoutes, privateRoutes };
