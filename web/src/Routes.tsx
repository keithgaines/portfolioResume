import { Router, Route, Set } from '@redwoodjs/router';
import HomeLayout from './layouts/HomeLayout/HomeLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const Routes = () => {
  return (
    <Router>
      <Set wrap={HomeLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/portfolio" page={PortfolioPage} name="portfolio" />
        <Route path="/resume" page={ResumePage} name="resume" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  );
};

export default Routes;
