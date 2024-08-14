import { ReactNode } from "react"

interface ContainerProp {
    children: ReactNode;
}

export const Container = ({children} : ContainerProp) => {
    return (
        <div>
            {children}
        </div>
    )
}