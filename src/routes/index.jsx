import React, {Suspense} from "react";


import {Navigate, useRoutes} from "react-router-dom";

const Zksync = React.lazy(() => import("@pages/Zksync"));
const ZksyncTasks = React.lazy(() => import("@pages/ZksyncTasks"))
const ZkRank = React.lazy(() => import("@pages/ZkRank"));
const App = React.lazy(() => import("@/App"));
const MainPage = React.lazy(() => import("@pages/MainPage"));
const Stark = React.lazy(() => import("@pages/Stark"));
const StarkTasks = React.lazy(() => import("@pages/StarkTasks"));
const Layer = React.lazy(() => import("@pages/Layer"));
const Mirror = React.lazy(() => import("@pages/Mirror"));
const Coffee = React.lazy(() => import("@pages/Coffee"));
const Deposit = React.lazy(() => import("@pages/Deposit"));
const router = [
    {
        path: '/', element: <MainPage/>,
        children: [
            // {
            //     path: '/',
            //     element: < App/>,
            // },
            {
                path: '/zksync',
                element: <Zksync/>,
            },
            {
                path: '/zksyncTasks',
                element: <ZksyncTasks/>,
            },
            {
                path: '/zkRank',
                element: <ZkRank/>,
            },
            {
                path: '/stark',
                element: <Stark/>,
            },
            {
                path: '/starkTasks',
                element: <StarkTasks/>,
            },
            {
                path: '/Layer',
                element: <Layer/>,
            },
            {
                path: '/mirror',
                element: <Mirror/>,
            },
            // {
            //     path: '/coffee',
            //     element: <Coffee/>,
            // },
            {
                path: '/deposit',
                element: <Deposit/>,
            }
        ]
    },
    {path: "*", element: <Navigate to="/"/>},

];

const WrapperRouter = () => {
    let result = useRoutes(router);
    return (
        <Suspense>
            {result}
        </Suspense>
    );
};

export default WrapperRouter;
