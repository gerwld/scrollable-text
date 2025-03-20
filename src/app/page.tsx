import Paragraph from '@/components/Paragraph'
import React from 'react'
import style from '@/app/style.module.scss';
import Word from '@/components/Word';

const paragraph = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';
const page = () => {

  return (
    <main>
      <div style={{ height: '100vh' }} />
      <Word value={paragraph}/>
      <div style={{ height: '100vh' }} />
    </main>
  )
}

export default page