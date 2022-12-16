import { AppTypography } from "../../components/typography/app-typography.component";
import useDarkMode from "../../hooks/darkMode";

const HomePage = () => {
    const [_,toggleDarkMode] = useDarkMode();
    return (
    <div>
      <AppTypography intent="h2">This is my text</AppTypography>
      <button onClick={()=>toggleDarkMode()}>
        <AppTypography intent="p">Click here to change color</AppTypography>
      </button>
    </div>
  );
};

export default HomePage;
