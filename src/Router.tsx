import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import Image from './pages/Image/Image';
import ImageDetails from './pages/Image/ImageDetails';
import User from './pages/User/User';
import UserDetails from './pages/User/UserDetails';
import Chat from './pages/Chat/Chat';
import ChatDetails from './pages/Chat/ChatDetails';
import LogIn from './pages/LogIn';
import Category from './pages/Category/Cateogry';
import PrivateRoute from './components/auth/PrivateRoute';
import CategorySetting from './pages/Category/CateogrySetting';
import CateogryList from './pages/Category/CateogryList';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            errorElement: <NotFoundPage />,
            children: [
                {
                    path: '/',
                    element: <HomePage />,
                },
                {
                    path: '/login',
                    element: <LogIn />,
                },
                {
                    path: 'image',
                    element: <PrivateRoute element={<Image />} />,
                },
                {
                    path: '/image/:id',
                    element: <PrivateRoute element={<ImageDetails />} />,
                },
                {
                    path: 'user',
                    element: <PrivateRoute element={<User />} />,
                },
                {
                    path: '/user/:id',
                    element: <PrivateRoute element={<UserDetails />} />,
                },
                {
                    path: 'category',
                    element: <PrivateRoute element={<Category />} />,
                    children: [
                        {
                            path: '',
                            element: (
                                <PrivateRoute element={<CateogryList />} />
                            ),
                        },
                        {
                            path: 'setting',
                            element: (
                                <PrivateRoute element={<CategorySetting />} />
                            ),
                        },
                    ],
                },
                {
                    path: 'chat',
                    element: <PrivateRoute element={<Chat />} />,
                },
                {
                    path: '/chat/:id',
                    element: <PrivateRoute element={<ChatDetails />} />,
                },
            ],
        },
    ],
    {
        basename: '/admin', // basename 설정
    }
);

export default router;
