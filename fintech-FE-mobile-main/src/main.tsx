import { createRoot } from 'react-dom/client';
import CustomRouterProvider from '@/router/RouterProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <CustomRouterProvider />
  </QueryClientProvider>
);
