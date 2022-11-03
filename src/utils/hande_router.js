import { Navigate, Outlet } from 'react-router-dom';
import { withUser } from '~/hocs';

export const PrivateRoutes = withUser(({ user }) => {
  const { success } = user;
  return success ? <Outlet /> : <Navigate to="/login" />;
});
