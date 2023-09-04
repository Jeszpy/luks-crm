import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
    const [greetings, setGreetings] = useState<string>('')

    useEffect(() => {
        axios.get('/api').then(({data}) => {
            setGreetings(data)
        }).catch(e => {
            console.log(e)
        })
    }, []);


    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>{greetings}</h1>
        </>
    )
}

export default App
