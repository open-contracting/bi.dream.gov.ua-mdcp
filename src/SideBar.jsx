import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "components/Loader";
//import HomeFilters from "pages/Home/filters";

// const YearMonthFilters = lazy(() =>
//   import("pages/FiltersSidebar/YearMonthFilters")
// );

const HomeFilters = lazy(() => import("pages/Home/filters"));
// const ProjectsFilters = lazy(() => import("pages/Projects/filters"));

const HomeFiltersPopups = lazy(() => import("pages/Home/filterspopups"));
// const ProjectsFiltersPopups = lazy(() => import("pages/Projects/filterspopups"));

export default function SideBar() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="p-2">

      <Switch>
          <Route exact path="/">
            <HomeFiltersPopups />
          </Route>
{/*           <Route path="/projects">
            <HomeFiltersPopups /> 
          </Route> */}
        </Switch>    

        {/* <YearMonthFilters /> */}
        
        <Switch>
          <Route exact path="/">
            <HomeFilters />
          </Route>
{/*           <Route path="/projects">
            <HomeFilters /> 
          </Route> */}
        </Switch>
      </div>
    </Suspense>
  );
}
