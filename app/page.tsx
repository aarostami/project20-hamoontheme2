'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Button from '@mui/material/Button'
import Header from './Header'
import Middle from './Middle'
import Footer from './Footer'
import { Box, Container } from '@mui/system'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

//"scripts": {
    //"dev": "concurrently \"cross-end NODE_OPTIONS=--max_old_space_size=2048 next dev\"",
//}


//export async function getStaticProps() {
	/* var data = 'hellos';

//	return {
		props: data
	} */
//}


	var theme = createTheme({
		colorSchemes: {
			dark: false
		}
	});

export default function Home({ data,err }: any, error: any) {			//deghat Home({ data: any }) dorost nemishe
	// var a = 'hid';
	// console.log(a)
	// console.log(props)
	console.log(data)
	console.log(error)
	console.log(err)


	return (
		// <main className={styles.main}>
		<>
		<ThemeProvider theme={theme}>
			{/* <CssBaseline /> */}
			<Header />
			<Middle />
			<Footer />
			{console.error()}
			{/* {data} */}
		</ThemeProvider>
		</>















		/* <main className={styles.main}>
			<div className={styles.description}>
				<div>
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						By{' '}
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							className={styles.vercelLogo}
							width={100}
							height={24}
							priority
						/>
					</a>
				</div>
			</div>

			<div className={styles.grid}>
				<a
					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2>
						Docs <span>-&gt;</span>
					</h2>
					<p>Find in-depth information about Next.js features and API.</p>
				</a>
			</div>
		</main> */
	)
}

/* export async function getServerSideProps(context: any) {

	return {
		props: { data: 'ssssssss' }
	}
} */