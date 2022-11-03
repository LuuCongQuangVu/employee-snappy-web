import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { publicRoutes, privateRoutes } from '~/routes';
import { PrivateRoutes } from '~/utils/hande_router';
import { loadUser } from '~/store/actions';

function App({ actions }) {
  useEffect(() => {
    actions?.loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.title = publicRoutes.find((item) => document.location.href?.includes(item.path)).title;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [document.location.href]);

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const { path, component: Component, layout: Layout = null } = route;
            if (Layout === null) return <Route key={index} path={path} element={<Component />} />;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Layout>
                    <Component />
                  </Layout>
                }
              />
            );
          })}
          <Route path="/" element={<PrivateRoutes />}>
            {privateRoutes.map((route, index) => {
              const { path, component: Component, layout: Layout = null } = route;
              if (Layout === null) return <Route key={index} path={path} element={<Component />} />;
              return (
                <Route
                  key={index}
                  path={path}
                  element={
                    <Layout>
                      <Component />
                    </Layout>
                  }
                />
              );
            })}
          </Route>
          <Route path="*" element={<div>Oh No! Đường dẫn có vẻ không đung</div>} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </Router>
  );
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ loadUser }, dispatch),
});

export default connect(null, mapDispatchToProps)(App);
