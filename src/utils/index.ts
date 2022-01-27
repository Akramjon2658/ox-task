export const getTokenWithBearer = () => {
    return 'Bearer ' + getToken()
}
export const  getToken = () => {
    return localStorage.getItem('token');
}

export const setTokenToLocalStorage = (token: string) => {
    localStorage.setItem('token', token)
}

export const hasToken = () => {
    return !!getToken()
}