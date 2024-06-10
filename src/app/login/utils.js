let ngrokurl = 'http://localhost:8000'
export const fetchUser = async (address) => {

    return await fetch(`${ngrokurl}/api/user-login?encrypt_id=${address}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },

    }).then(res => res.json())
}

export const fetchChild = async (address) => {
    return await fetch(`${ngrokurl}/api/child-login?encrypt_id=${address}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },

    }).then(res => res.json())

}


export const isLoggedIn = () => {
    if (window) {
        let user = localStorage.getItem('user');
        if (user) {
            return {
                status: true,
                user: JSON.parse(user)
            }
        } else {
            return {
                status: false,
                user: null
            }
        }
    }
}