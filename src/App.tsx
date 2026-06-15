import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminApp } from './AdminApp'
import { HomePage } from './features/home/pages/HomePage'
import { ShopPage } from './features/shop/pages/ShopPage'
import { CollectionsPage } from './features/collections/pages/CollectionsPage'
import { ProductDetailPage } from './features/product-detail/pages/ProductDetailPage'
import { AboutPage } from './features/about/pages/AboutPage'
import { CartPage } from './features/cart/pages/CartPage'
import { CheckoutPage } from './features/checkout/pages/CheckoutPage'
import { OrderConfirmationPage } from './features/checkout/pages/OrderConfirmationPage'
import { LoginPage } from './features/auth/pages/LoginPage'
import { RegisterPage } from './features/auth/pages/RegisterPage'
import { AccountPage } from './features/auth/pages/AccountPage'
import { OrderHistoryPage } from './features/auth/pages/OrderHistoryPage'
import { RequireAuth } from './features/auth/components/RequireAuth'
import { AuthProvider } from './features/auth/context/AuthProvider'
import { CartProvider } from './features/cart/context/CartProvider'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/product" element={<ProductDetailPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route
              path="/checkout"
              element={
                <RequireAuth>
                  <CheckoutPage />
                </RequireAuth>
              }
            />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/account"
              element={
                <RequireAuth>
                  <AccountPage />
                </RequireAuth>
              }
            />
            <Route
              path="/orders"
              element={
                <RequireAuth>
                  <OrderHistoryPage />
                </RequireAuth>
              }
            />
            <Route path="/admin" element={<AdminApp />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
