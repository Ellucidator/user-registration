import {createContext } from "react"

export const RegistrationContext = createContext({})

export default function RegistrationContextProvider(props:{
    children: React.ReactNode
}) {
    const {children} = props
    

    return(
        <RegistrationContext.Provider value={{}}>
            {children}
        </RegistrationContext.Provider>
    )
}