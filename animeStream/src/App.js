import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Video from './Pages/Video';
import Home from './Pages/Home';

const router = createBrowserRouter([
    {
        path: '/video/:id',
        element: <Video />,
    },
    {
        path: '/',
        element: <Home />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
