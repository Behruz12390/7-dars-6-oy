const s = document.querySelector('.s')

const getusers = async () => {
    const url = 'https://jsonplaceholder.typicode.com/comments'
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        return await response.json()

    }catch (err){
        return err.message
    }
}
const drawui = async () => {
    const users = await getusers()
    const usersSlice = users.slice(0, 20)
    for (const user of usersSlice) {
        s.innerHTML += `<div class="j">
        <h1>${user.id}</h1>
        <p>${user.name}</p>
        <p>${user.email}</p>
        <p>${user.body}</p>
    </div>`
    }
}
drawui()