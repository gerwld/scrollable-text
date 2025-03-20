"use client"
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import React, { FC, useRef } from 'react'
import style from '@/app/style.module.scss';

const Paragraph: FC<{ value: string }> = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", 'start 0.25']
  })

  const words = value?.split(" ")

  return (
    <p
      className={style.paragraph}
      ref={element}>{words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return <Char range={[start, end]} progress={scrollYProgress} key={i}>{word}</Char>
      })}</p>
  )
}

const Char: FC<{ children: string, range: number[], progress: MotionValue<number> }> = ({ children, progress,range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{opacity}} className={style.word}>{children}</motion.span>
}

export default Paragraph