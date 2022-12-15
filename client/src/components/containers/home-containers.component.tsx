import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
export const HomeContainer = ({ children }: IProps) => {
  return (
    <main className="dark:bg-primary-black dark:text-tertiary-gray w-full h-full">
      <div className="container mx-auto sm:px-6 lg:px-8">{children}</div>
    </main>
  );
};
