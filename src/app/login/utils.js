export const fetchUser = async (address) => {
    let formData = new FormData();
    formData.append('encrypt_id', address);

    return await fetch(`${ngrokurl}/api/user-login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData,

    }).then(res => res.json())
}