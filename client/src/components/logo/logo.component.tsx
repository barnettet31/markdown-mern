import logo from '../../assets/graphics/logo.svg';
interface IProps {
    classes?:string;
}
export const Logo = ({classes}:IProps)=> <img className={"hover:opacity-70 ease-in-out " + classes} src={logo} alt="Markdown"/>