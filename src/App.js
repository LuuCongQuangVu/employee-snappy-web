import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { publicRoutes } from '~/routes';
import store from '~/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    document.title = publicRoutes.find((item) => document.location.href?.includes(item.path)).title;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [document.location.href]);

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
