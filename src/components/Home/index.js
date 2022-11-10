import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'

function Home() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            setUsers(res.data)
            setIsLoading(false)
        })
    }, [])

    function deleteUser(id) {
        setUsers(users => users.filter(user => user.id !== id))
    }

    return (
        <div className={styles.Home}>
            {isLoading ? <span>Loading ...</span> :
                <table>
                    {users?.map((user, index) => <tr key={index}>
                        <td>{user?.id}</td>
                        <td>{user?.name}</td>
                        <td>{user?.email}</td>
                        <td><button onClick={() => deleteUser(user.id)}>delete</button></td>
                    </tr>)}
                </table>}

        </div>
    )
}

export default Home