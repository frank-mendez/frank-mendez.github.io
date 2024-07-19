import { ReactElement } from 'react'

const AppLayout = ({ children }: {children: ReactElement}) => {
    return (
        <div>
            <h1>App Layout</h1>
            {children}
        </div>
    )
}

export default AppLayout;