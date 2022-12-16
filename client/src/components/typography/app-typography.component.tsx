import React from 'react';

interface IAppTypography {
    intent:'h2'| 'h3' | 'p';
    children:React.ReactNode
}
export const AppTypography =({intent, children}:IAppTypography)=>{
    const Component = intent || 'h2';
    const getClasses = function (intent:string):string{
        switch(intent){
            case 'h2':
                return 'font-default text-base font-medium text-secondary-gray dark:text-secondary-white'
            case 'h3':
                return 'font-default text-sm font-medium text-secondary-gray dark:text-secondary-white'
            case 'p':
                return 'font-default text-xs font-normal text-secondary-gray dark:text-secondary-white'
            default:
                return '';
            }
    }
    return <Component className={getClasses(intent)}>{children}</Component>
}