// 'use client'	//mohem. baraye esterfade az createTheme va styled dar client bayad az in estefade konim. hatta yedoone paiintar bashe error mide.
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'	//agar /Button ro nazarim error mide
import { Container } from '@mui/system'
import Image from 'next/image'
import logo from './images/logo.PNG'
// import astro from './images/astronat.PNG'
import Link from 'next/link'
import './header.css'	//harchi toosh hast khodkar be elementha eemal mishe, ama baraye module.css bayad tak tak be class haye elementha ezafe konim vali daghightare va gahi 'bayad' injori estefade konim.
import hstyle from './header.module.css'
import { createTheme, styled } from '@mui/system'
import { useEffect, useRef } from 'react'
import Grid from '@mui/system/Unstable_Grid'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Header() {
	// var AOS = require('aos')
	useEffect(() => {
		//agar in dakhele useEffect() nabashe, faghat yek bar onam vaghti code haro taghir bedim karmikone, ya innam ke data-aos-duration='2000' ro baraye element bezarim. 
		AOS.init({
			// mirror: true,
			duration: 800,
			// once: true
		});

	});

	/* var theme = createTheme({
		display: 'flex'
	}); */

	var FirstDiv = styled('div')({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

	})


	var scroll = () => {
		console.log('hihi')
		// {console.log(window.scrollTo({top: '500'}))}
		// {console.log(window.scrollTo({behavior: 'smooth'}))}
		// {console.log(window.scrollY)}
		// {console.log(window.scrollY = 500)}
		// {console.log(document.body.scrollTop = 500)}
		/* if (window.scroll()) {
			console.log('scrolled')
		} */
		// console.log(window.pageYOffset)

		/* var prev = window!.pageYOffset;
		window!.onscroll = function (e: any) {
			// console.log(e.currentTarget.scrollY)
			if(typeof window !== "undefined") {
				var cur = window!.pageYOffset;
			// document.getElementById('nav').style.backgroundColor = 'red';
			if (prev > cur) {
				// document.getElementById('nav').style.backgroundColor = 'red';
				document!.getElementById('nav')!.style!.top = '0';
			} else {
				// document.getElementById('nav').style.backgroundColor = 'blue';
				document!.getElementById('nav')!.style!.top = '-65px';
			}
			prev = cur;
			}
		} */
	}
	scroll();		//deghat hatman bayad hatta yek bar call beshe ta amal kone, ama baraye taghirate baadi scroll dige call niyaz nist!


	/* 	var sc = useRef(0)
	useEffect(() => {
		sc.current = window.scrollY
		console.log(sc.current)
		
	}, [sc]); */

	// console.log(window)

	var togg = () => {
		console.log('ssss')
		var togvar = document!.getElementById('togglemenu')!.style!.left!.valueOf()			//avvalin bar khali yani hichi return nemikone, nemidoonam chera
		console.log(typeof togvar)
		if (togvar == '-112%' || ' ') {
			document!.getElementById('togglemenu')!.style!.left = '0%'
			// document.querySelector('header').style.filter = 'brightness(70%)'
			document!.getElementById('modal')!.style!.opacity = '1';
			document!.getElementById('modal')!.style!.visibility = 'visible';
		} else {
			document!.getElementById('togglemenu')!.style!.left = '-112%'

			console.log('aaa')
		}
	}


	return (
		<header>
			<nav id='nav'>
				<Box display='flex'>
					{/* <Button><i className=''></i></Button> */}
					<Button onClick={togg} sx={{ mr: '1rem', color: 'black' }} >menu</Button>
					<Image src={logo} alt="pic" />
					<div id='modal' style={{
						top: '0',
						left: '0',
						position: 'fixed',
						width: '100%',
						height: '100%',
						backdropFilter: 'brightness(70%)',
						opacity: 0,
						visibility: 'hidden',
						transition: 'all 0.7s ease',
					}}>
						<Box sx={{
							backgroundColor: '#eee',
							position: 'absolute',
							left: '0%',
							maxWidth: '40%',
							transition: 'left 0.7s ease',
							p: '1.5rem',
							height: '100%',
							overflow: 'auto'
						}} id='togglemenu'>
							<Button onClick={() => {
								document!.getElementById('togglemenu')!.style!.left = '-112%';
								document!.getElementById('modal')!.style!.opacity = '0';
								document!.getElementById('modal')!.style!.visibility = 'hidden';
							}} sx={{ display: 'block', marginRight: '0', marginLeft: 'auto' }}>close</Button>
							<h3 style={{color: 'black'}}>LANDING PAGES</h3>
							<Grid container my='1rem'>	{/*agar ba display='flex' estefade konim va dakhelesh masalan <Grid sm estefade nakonim, dar halate mobile sakhte az @media estefade konim */}
								<Grid xs={12} md={6} sx={{'& ul li a': {color: 'black'}}}>
									<ul style={{ listStyleType: 'none'}}>
										<li id='li'><a href=''>Advertisement</a></li>
										<li id='li'><a href=''>Marketing</a></li>
										<li id='li'><a href=''>Course</a></li>
										<li id='li'><a href=''>Design Agency</a></li>
										<li id='li'><a href=''>Application</a></li>
										<li id='li'><a href=''>Travel</a></li>
									</ul>
								</Grid>
								<Grid xs={12} md={6} sx={{'& ul li a': {color: 'black'}}}>	{/*khodkar ye faseleii beyne do column ijad mikone */}
									<ul style={{ listStyleType: 'none'}}>
										<li id='li'><a href=''>Payment App</a></li>
										<li id='li'><a href=''>Software Company</a></li>
										<li id='li'><a href=''>Crypto Currency</a></li>
										<li id='li'><a href=''>Consulting</a></li>
										<li id='li'><a href=''>Domain Hosting</a></li>
										<li id='li'><a href=''>Event</a></li>
									</ul>
								</Grid>
							</Grid>
							<h3 style={{color: 'black'}}>SUPPORTING PAGES</h3>
							<Grid container my='1rem'>
								<Grid xs={12} md={6} sx={{'& ul li a': {color: 'black'}}}>
									<ul style={{ listStyleType: 'none'}}>
										<li id='li'><a href=''>About</a></li>
										<li id='li'><a href=''>Contact</a></li>
										<li id='li'><a href=''>Customers</a></li>
										<li id='li'><a href=''>Comming Soon</a></li>
									</ul>
								</Grid>
								<Grid xs={12} md={6} sx={{'& ul li a': {color: 'black'}}}>
									<ul style={{ listStyleType: 'none'}}>
										<li id='li'><a href=''>Services</a></li>
										<li id='li'><a href=''>Pricing</a></li>
										<li id='li'><a href=''>Hire Us</a></li>
										<li id='li'><a href=''>Privacy Policy</a></li>
									</ul>
								</Grid>
							</Grid>
							<h3 style={{color: 'black'}}>Auth Page</h3>
							<Grid container my='1rem' sx={{'& ul li a': {color: 'black'}}}>
								<ul style={{ listStyleType: 'none'}}>
									<li id='li'><a href=''>Login</a></li>
									<li id='li'><a href=''>Sign Up</a></li>
									<li id='li'><a href=''>Forget Password</a></li>
								</ul>
							</Grid>
							<Button variant='outlined' color='success' fullWidth>Documentation</Button>
							<Button variant='contained' color='success' fullWidth sx={{ mt: '0.5rem' }}>Purchase now</Button>
						</Box>
					</div>
				</Box>
				<Box>
					<ul className='headRight'>
						<li><Link href="/" style={{color: 'black'}}>Home</Link></li>
						<li><Link href="/" style={{color: 'black'}}>Document</Link></li>
					</ul>
				</Box>
			</nav>
			<Container maxWidth='xl' sx={{ py: 8, backgroundColor: '#f8f9fd', pt: '15%' }}>	{/*agar dar sx backgroundColor: '#fff' bashe, box-shadow navbar mallom nemishe, nemidoonam chera?  */}
				{/* <FirstDiv> */}
				<Grid container justifyContent='space-between' rowSpacing={3}>
					<Grid md={6}>
						<div data-aos='fade-right'>
							{/* <Box sx={{ maxWidth: '50%' }}> */}
							<Box>
								<h1 style={{ fontSize: '4rem', color: 'black' }}>Turn your ideas into a <span style={{ color: 'green' }}>success.</span></h1>
								<h3 style={{ fontSize: '1.3rem', color: '#777', marginTop: '.75rem', marginBottom: '.75rem' }}>Webbee will make your product look modern and professional while saving you precious time.</h3>
								<Button sx={{ p: 2, backgroundColor: 'green', color: 'white', mr: 2, ':hover': { backgroundColor: '#06520a' } }}>Purchase now</Button>
								<Button sx={{ p: 2, border: '1px solid green', color: 'green', ':hover': { color: 'green' } }}>View documentation</Button>
							</Box>
						</div>
					</Grid>
					<Grid md={6} xs={12}>
						{/* <Image src={astro} style={{ height: 'auto', width: '50%' }} alt="astro" /> */}
						<Image src='/project20-hamoontheme2/images/astronat.PNG' width='200' height='200' style={{ height: 'auto', width: '90%', marginRight: '0', marginLeft: 'auto' }} alt="astro" />
					</Grid>
				</Grid>
				{/* </FirstDiv> */}
			</Container>
		</header >
	);
}