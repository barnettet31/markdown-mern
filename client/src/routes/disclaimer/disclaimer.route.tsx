import { AppTypography } from "../../components/typography/app-typography.component";

 const Disclaimer =()=>{
    return(
        <div className="flex flex-col gap-4">
    <AppTypography intent="h2">Demo Application</AppTypography>
    <AppTypography intent="p">If it isn't already obvious, this application is for demo purposes only</AppTypography>
    <AppTypography intent="p">I will typically maintain users as long as I can but I will remove them if the cost of this app exceeds what I'm willing to pay.</AppTypography>
    <AppTypography intent="p">I do this because it's free to use at the moment, mostly because this was built with a design provided by FrontEndMentor and implemented obviously with my own code</AppTypography></div>
    )
}

export default Disclaimer;