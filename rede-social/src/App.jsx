import { Header } from './components/Header'
import {Post} from './Post'

import './global.css'

export function App() {

  return (
    <div>
      <Header />

      <Post 
        author="Leandro" 
        content="Na informática, o jogo online é um tipo de jogo eletrônico jogados via Internet."
      />
    </div>
  )
}

