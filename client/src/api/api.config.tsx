import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});
interface IClientProps {
  children?: React.ReactNode;
}
export const ApiClientProvider = ({ children }: IClientProps) => (
  <QueryClientProvider client={queryClient} contextSharing={true}>

      {children}

  </QueryClientProvider>
);
