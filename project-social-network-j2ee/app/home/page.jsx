import Image from 'next/image'
import styles from '@/styles/home.module.css'
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to VTMK</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link href='https://fonts.googleapis.com/css?family=MuseoModerno' rel='stylesheet'>
        </link>
        <link href='https://fonts.googleapis.com/css?family=Saira Stencil One' rel='stylesheet'>
        </link>
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
        </link>
        <link href='https://fonts.googleapis.com/css?family=Mali' rel='stylesheet'>
        </link>
      </Head>
      
    </div>
  )
}
export default Home;