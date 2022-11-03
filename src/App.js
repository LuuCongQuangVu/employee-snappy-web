import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from '~/routes';

function App() {
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
