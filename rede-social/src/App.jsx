import { Header } from './components/Header'
import {Post} from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'
import { Link } from 'phosphor-react'

const posts = [ 
  { 
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/49030804?v=4',
      name: 'Rodrigo Gonçalves',
      role: 'Educador da Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.'},
      {type: 'link', content: jane.design/doctorcare}
    ],
    publishersAt: new Date('2022-05-03 20:00:00')
 },

 { 
  id: 2,
  author: {
    avatarUrl: 'https://avatars.githubusercontent.com/u/6643122?v=4',
    name: 'Mayk Brito',
    role: 'Educador da Rocketseat'
  },
  content: [
    {type: 'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.'},
    {type: 'link', content: jane.design/doctorcare}
  ],
  publishersAt: new Date('2022-05-13 20:00:00')
 },
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                piblishedAt={post.publishersAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

