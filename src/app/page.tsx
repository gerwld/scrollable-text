import React from 'react'
import Character from '@/components/Character';

const paragraph = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';
const page = () => {

  return (
    <main>
      <div style={{ height: '100vh' }} />
      <Character value={paragraph}/>
      <div style={{ height: '100vh' }} />
    </main>
  )
}

export default page