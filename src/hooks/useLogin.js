const login = (username) => {
    console.log('got in uselogin')

    if(username) {
        localStorage.setItem('username', username)
        console.log(username)
    } else {
        console.log('no username')
    }
}

export default login