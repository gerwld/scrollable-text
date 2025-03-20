import React, { FC } from 'react'
import style from '@/app/style.module.scss';

const Paragraph: FC<{ value: string }> = ({
  value
}) => {
  return (
    <>
      <div style={{ height: '100vh' }} />
      <p className={style.paragraph}>{value}</p>
      <div style={{ height: '100vh' }} />
    </>
  )
}

export default Paragraph