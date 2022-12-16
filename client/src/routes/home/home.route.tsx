import { AppTypography } from "../../components/typography/app-typography.component";

const HomePage = () => {
    return (
    <div className="flex flex-col gap-3">
      <AppTypography intent="h2" className="text-xl md:text-2xl lg:text-3xl">Welcome To Mark Down</AppTypography>
        <AppTypography intent="p" className="text-lg md:text-xl lg:text-2xl">This app is both the completion of the <a className="text-underline font-bold" href="https://www.frontendmentor.io/">Front End Mentor</a> challenge and one of my capstone projects for Promineo Tech Bootcamp.</AppTypography>

    </div>
  );
};

export default HomePage;
