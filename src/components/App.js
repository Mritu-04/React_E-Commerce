import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '././pages/Login.jsx';
import Register from './pages/Register.jsx';
// Other imports...

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* Other routes... */}
      </Switch>
      <Routes>
                <Route path="/" element={<GoogleAuth />} />
                <Route path="/home" element={<Home />} />
        </Routes>
    </Router>
  );
};

export default App;
