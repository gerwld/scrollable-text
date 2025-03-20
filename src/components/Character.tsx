"use client"
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import React, { FC, useRef } from 'react'
import style from '@/app/style.module.scss';

const Character: FC<{ value: string }> = ({ value }) => {
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
        return <Wrd range={[start, end]} progress={scrollYProgress} key={i}>{word}</Wrd>
      })}</p>
  )
}

const Wrd: FC<{ children: string, range: number[], progress: MotionValue<number> }> = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  const characters = children.split('');
  return (
    <span className={style.word}>
      {
        characters.map((char, i) => {
          const start = range[0] + (step * i);
          const end = range[0] + (step * (i + 1));
          return <Char key={i} range={[start, end]} progress={progress}>{char}</Char>
        })
      }
    </span>
  )
}

const Char: FC<{ children: string, range: number[], progress: MotionValue<number> }> = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className={style.shadow}>{children}</span>
      <motion.span style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  )
}

export default Character