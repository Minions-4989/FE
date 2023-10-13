import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import MainPage from '../pages/home/MainPage';
import ProductDetailPage from '../pages/detail/ProductDetailPage';
import CartPage from '../pages/cart/CartPage';
import LoginPage from '../pages/login/LoginPage';
import SignUpPage from '../pages/signup/SignUpPage';
import MyPage from '../pages/my';
import SettingPage from '../pages/my/sub/SettingPage';
import UserInfoPage from '../pages/my/sub/UserInfoPage';
import SubPage from '../pages/home/SubPage';
import PurchaseListPage from '../pages/my/sub/PurchaseListPage';
import OrderPage from '../pages/order/OrderPage';
import SellerPage from '../pages/sales/SellerPage';
import SellermodePage from '../pages/sales/seller/SellermodePage';
import MySalesPage from '../pages/sales/seller/MySalesPage';
import SalesProductInquiryPage from '../pages/sales/seller/SalesProductInquiry';
import EditSalesItem from '../pages/sales/seller/EditSalesItem';

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'product/:id',
        element: <ProductDetailPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignUpPage />,
      },
      {
        path: 'my',
        element: <MyPage />,
        children: [
          {
            index: true,
            element: <UserInfoPage />,
          },
          {
            path: 'settings',
            element: <SettingPage />,
          },
          {
            path: 'purchase',
            element: <PurchaseListPage />,
          },
        ],
      },
      {
        path: 'seller',
        element: <SellerPage />,
        children: [
          {
            index: true,
            element: <SellermodePage />,
          },
          {
            path: 'sales',
            element: <MySalesPage />,
          },
          {
            path: 'spi',
            element: <SalesProductInquiryPage />,
          },
          {
            path: 'esi',
            element: <EditSalesItem />,
          },
        ],
      },
      {
        path: 'subpage',
        element: <SubPage />,
      },
      {
        path: 'productdetailpage',
        element: <ProductDetailPage />,
      },
      {
        path: 'order',
        element: <OrderPage/>
      }
    ],
  },
]);

export default Routers;
