/* eslint-disable no-undef */
import { ReactNode } from 'react';
import Navbar from './Main/Navbar';
import Footer from './Main/Footer';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
    return (
    <>
        <Navbar />
            {children}
        <Footer />
    </>
    );
}