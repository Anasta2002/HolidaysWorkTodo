import React, { useState } from 'react'
import NavBarHome from '../components/NavBarHome/NavBarHome'

export default function Home() {
    const [tasks, setTask] = useState([])
    const add_task = new_task => setTask([...tasks, new_task])

    return (
        <div>
            <NavBarHome add_task={add_task} />
        </div>
    )
}
