// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/weidian/Desktop/未命名文件夹/myblog4.0/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.tsx').default,
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": require('@/pages/404.tsx').default
      },
      {
        "path": "/Home",
        "exact": true,
        "component": require('@/pages/Home/index.tsx').default
      },
      {
        "path": "/Post/:id?",
        "exact": true,
        "component": require('@/pages/Post/[id$].tsx').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.tsx').default
      },
      {
        "component": require('@/pages/404.tsx').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
