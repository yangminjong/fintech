import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import Login from '@/pages/Login';
import SignUp from '@/pages/Login/SignUp';
import Register from '@/pages/Register';
import Main from '@/pages/Main';
import QrScan from '@/pages/QrScan';
import UsageHistory from '@/pages/UsageHistory';
import Filter from '@/pages/UsageHistory/Filter';
import Payment from '@/pages/Payment';
import EnterPassword from '@/pages/Payment/EnterPassword';
import Success from '@/pages/Payment/Success';
import Fail from '@/pages/Payment/Fail/Index';
import My from '@/pages/My';

const CustomRouterProvider = () => {
  const browserRouter = createBrowserRouter([
    {
      path: '',
      element: (
        <ProtectedRoute>
          <Outlet />
        </ProtectedRoute>
      ),
      children: [
        { path: '', element: <Main /> },
        {
          path: 'register',
          element: <Register />,
        },
        {
          path: 'qr',
          element: <QrScan />,
        },
        {
          path: 'history',
          element: <UsageHistory />,
        },
        {
          path: 'history/filter',
          element: <Filter />,
        },
        {
          path: 'payment',
          element: <Payment />,
        },
        {
          path: 'payment/password',
          element: <EnterPassword />,
        },
        {
          path: 'payment/success',
          element: <Success />,
        },
        {
          path: 'payment/fail',
          element: <Fail />,
        },
        {
          path: 'my',
          element: <My />,
        },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'signup',
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={browserRouter} future={{ v7_startTransition: true }} />;
};

export default CustomRouterProvider;
