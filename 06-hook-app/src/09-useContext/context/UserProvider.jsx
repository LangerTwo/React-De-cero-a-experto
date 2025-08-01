import { UserContext } from "./UserContext"

const user = {
    id: 123,
    name: 'Leo Nava',
    email: 'test@test.com'
}


export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ hola: 'Mundo', user }}>
            { children }
        </UserContext.Provider>
    )
}