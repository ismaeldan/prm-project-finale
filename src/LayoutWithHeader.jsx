import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export function LayoutWithHeader() {
  return (
    <>
      <Header />

      <main style={{ padding: '20px 0' }}>
        <Outlet />
      </main>
      
      <Footer />
    </>
  );
}