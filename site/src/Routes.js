import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GameApp from './game'

export default function Routess() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<GameApp/>} />
            </Routes>
        </BrowserRouter>
    )
}