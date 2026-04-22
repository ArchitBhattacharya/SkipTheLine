import React from 'react';
import { RouterProvider } from 'react-router';
import { AppProvider } from './context/AppContext';
import { ThemeProvider } from './context/ThemeProvider';
import { router } from './routes';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        {/* 1. The Toaster MUST be inside the Providers to work correctly */}
        <Toaster position="top-center" richColors closeButton />
        
        {/* 2. The RouterProvider handles all your routes from routes.tsx */}
        <RouterProvider router={router} />
      </AppProvider>
    </ThemeProvider>
  );
}