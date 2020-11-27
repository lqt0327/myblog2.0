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
const ListComponent = lazy(() => import("../application/Admin/List"));
const AddComponent = lazy(() => import("../application/Admin/Add"));
const UpdateComponent = lazy(() => import("../application/Admin/Update"));
const ErrorsComponent = lazy(() => import("../application/Errors"));

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
            component: SuspenseComponent(AdminComponent),
            routes: [
                {
                    path: "/llscw/lqt0327/admin",
                    exact: true,
                    render: () => <Redirect to={"/llscw/lqt0327/admin/list"} />
                },
                {
                    path:'/llscw/lqt0327/admin/list',
                    component: SuspenseComponent(ListComponent)
                },
                {
                    path:'/llscw/lqt0327/admin/add',
                    component: SuspenseComponent(AddComponent)
                },
                {
                    path:'/llscw/lqt0327/admin/update/:id',
                    component: SuspenseComponent(UpdateComponent)
                }
            ]
        },
        {
            path: "/",
            component: SuspenseComponent(HomeLayout),
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
                },
                {
                    component: SuspenseComponent(ErrorsComponent)  
                }
            ]
        }
    ]
}]