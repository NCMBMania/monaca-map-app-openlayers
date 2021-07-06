const routes = [
  {
    path: '/',
    url: './index.html',
  },
  // 一覧画面
  {
    path: '/map',
    name: 'Map',
    componentUrl: './pages/map.html'
  },
  // データ投入画面
  {
    path: '/import',
    name: 'Import',
    componentUrl: './pages/import.html'
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
