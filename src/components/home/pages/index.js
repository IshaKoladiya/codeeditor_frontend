import { lazy } from "react";

const Home = lazy(() => import("../components/Home"));
const CodePen = lazy(() => import("../components/CodePen"));
const Editor = lazy(() => import("../components/Editor"));

export { Home ,CodePen,Editor};
