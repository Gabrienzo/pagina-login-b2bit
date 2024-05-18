import Login from "../../routes/login";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const storageData = localStorage.getItem('dataUser');

    if (!storageData) {
        return <Login />;
    }
    return children;
};