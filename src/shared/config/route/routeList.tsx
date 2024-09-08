import { RouteObject } from "react-router-dom";
import { About } from "../../../pages/PageAbout/ui/About";
import { Home } from "../../../pages/PageHome/ui/Home";
import { PrivacyPolicy } from "../../../pages/PagePrivacyPolicy/ui/PrivacyPolicy";
import { Configuration } from "../../../pages/configuration/Configuration";
import { Partners } from "../../../pages/PagePartners/ui/Partners";

export const routeList: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/about/privacy_policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/configuration",
    element: <Configuration />,
  },
  {
    path: "/partners",
    element: <Partners />,
  },
  {
    path: "/*",
    element: (() => {
      return (
        <div>
          <p>404 - страница не найдена</p>
          <a href='/'>&larr; вернуться на главную</a>
        </div>
      );
    })(),
  },
];
