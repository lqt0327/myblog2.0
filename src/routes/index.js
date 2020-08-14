import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import BlankLayout from '../layouts/BlankLayout';
import HomeLayout from '../layouts/HomeLayout';
const HomeComponent = lazy(() => import("../application/Home"))
const ArticleComponent = lazy(() => import("../application/Article"))
const ArchiveComponent = lazy(() => import("../application/Archive"))
const CateComponent = lazy(() => import("../application/Categories"))
const TagsComponent = lazy(() => import("../application/Tags"))
const AboutComponent = lazy(() => import("../application/Abouts"))
const AdminComponent = lazy(() => import("../application/Admin"));
const CateListComponent = lazy(() => import("../application/CateList"))


const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={<React.Fragment />}>
            <Component {...props}></Component>
        </Suspense>
    )
}

export default [{
    component: BlankLayout,
    routes: [
        {
            path: "/llscw/lqt0327/admin",
            component: SuspenseComponent(AdminComponent)
        },
        {
            path: "/",
            component: HomeLayout,
            routes: [
                {
                    path: "/",
                    exact: true,
                    render: () => <Redirect to={"/home"} />
                },
                {
                    path: "/home",
                    component: SuspenseComponent(HomeComponent)
                },
                {
                    path: "/post/:id",
                    component: SuspenseComponent(ArticleComponent)
                },
                {
                    path: "/archives",
                    component: SuspenseComponent(ArchiveComponent)
                },
                {
                    path: "/categories",
                    component: SuspenseComponent(CateComponent)
                },
                {
                    path:'/catelist/:id',
                    component: SuspenseComponent(CateListComponent)
                },
                {
                    path: "/tags",
                    component: SuspenseComponent(TagsComponent)
                },
                {
                    path: "/about",
                    component: SuspenseComponent(AboutComponent)
                }
            ]
        }
    ]
}]