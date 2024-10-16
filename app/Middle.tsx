import { Container, Box } from '@mui/system'
import Image from 'next/image';
import option1 from './images/option1.PNG'
import option2 from './images/option2.PNG'
import option3 from './images/option3.PNG'
import feature from './images/feature.PNG'
import style from './middle.module.css'
import Button from '@mui/material/Button';
import fe1 from './images/fe1.PNG'
import fe2 from './images/fe2.PNG'
import fe3 from './images/fe3.PNG'
import fe4 from './images/fe4.PNG'
import fe5 from './images/fe5.PNG'
import fe6 from './images/fe6.PNG'
import Grid from '@mui/system/Unstable_Grid'


export default function Middle() {

	return (
		<main className='main'>
			<Container sx={{ display: 'flex', my: '3rem', backgroundColor: '#f7f9fc' }}>
				{/* <div data-aos='fade-up'> */}	 {/* be jaye inke kolle box ha dar yek aos bashe, baryae responsive boodan bayad tak tak dakhele aos bezarim ta khoob beshe */}
				<Grid container rowSpacing={2}>
					<Grid xs={12} sm={6} md={4}>
						<div data-aos='fade-up'>
							<Box textAlign='center'>
								{/* <Image src={option1} width='30' height='30' alt='op1' /> */}
								<Image src={option1} style={{ width: '25%', height: '35%' }} alt='op1' />
								<h3 className={style.ophead} style={{color: 'black'}}>Built for developers</h3>
								<p style={{color: 'black'}}>Webbee is built to make your life easier. Variables, build tooling, documentation, and reusable components.</p>
							</Box>
						</div>
					</Grid>
					<Grid xs={12} sm={6} md={4}>
						<div data-aos='fade-up'>
							<Box textAlign='center'>
								<Image src={option2} style={{ width: '25%', height: '35%' }} alt='op1' />
								<h3 className={style.ophead} style={{color: 'black'}}>Designed to be modern</h3>
								<p style={{color: 'black'}}>Designed with the latest design trends in mind. Webbee feels modern, minimal, and beautiful.</p>
							</Box>
						</div>
					</Grid>
					<Grid xs={12} sm={6} md={4}>
						<div data-aos='fade-up'>
							<Box textAlign='center'>
								<Image src={option3} style={{ width: '25%', height: '35%' }} alt='op1' />
								<h3 className={style.ophead} style={{color: 'black'}}>Documentation for everything</h3>
								<p style={{color: 'black'}}>We've written extensive documentation for components and tools, so you never have to reverse engineer anything.</p>
							</Box>
						</div>
					</Grid>
				</Grid>
			</Container>
			<Container sx={{ textAlign: "center", my: '5rem', backgroundColor: '#f7f9fc' }} maxWidth='md'>
				<p style={{color: 'black'}}>FEATURES</p>
				<h1 className={style.feature} style={{ color: '#333' }}>The powerful and flexible theme for all kinds of businesses</h1>
				<h4 className={style.feature} style={{ color: '#888' }}>Build a beautiful, modern website with flexible, fully customizable, atomic Material-UI components. An experience you'd expect from a design system.</h4>
				<Button variant='contained' color='success'>Purchase now</Button>
				<Image src={feature} style={{ width: '80%', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '1.5rem' }} alt='feature' />
			</Container>
			<Container sx={{ display: 'flex', flexWrap: 'wrap', py: '1rem', backgroundColor: '#f7f9fc' }}>	{/*ham taraz nist nemidoonam chera? ama agar az <Grid> estefade mikonim faghat, taraz mishe. */}
				{/* <div data-aos='fade-up'> */}	{/* be jaye inke kolle box ha dar yek aos bashe, baryae responsive boodan bayad tak tak dakhele aos bezarim ta khoob beshe */}
				<Grid container justifyContent='space-between' columnSpacing={3} mb='2rem' rowSpacing={2}>
					<Grid xs={12} sm={6} md={4}>
						<div data-aos='fade-up'>
							<Box style={{bgColor: '#fafafa'}} borderRadius='8px' boxShadow='1px 1px 5px #ddd' padding='1rem'>
								<Image src={fe1} style={{ width: '20%', height: '50%' }} alt='fe1' />
								<h3 className={style.feature_head} style={{color: 'black'}}>Themeable</h3>
								<p style={{ color: '#333' }}>Customize any part of our components to match your design needs.</p>
							</Box>
						</div>
					</Grid>
					<Grid xs={12} sm={6} md={4}>
						<div data-aos='fade-up'>
							<Box style={{bgColor: '#fafafa'}} borderRadius='8px' boxShadow='1px 1px 5px #ddd' padding='1rem'>
								<Image src={fe2} style={{ width: '20%', height: '50%' }} alt='fe1' />
								<h3 className={style.feature_head} style={{color: 'black'}}>Light and Dark UI</h3>
								<p style={{ color: '#333' }}>Optimized for multiple color modes. Use light or dark, your choice.</p>
							</Box>
						</div>
					</Grid>
					<Grid xs={12} sm={6} md={4}>
						<div data-aos='fade-up'>
							<Box style={{bgColor: '#fafafa'}} borderRadius='8px' boxShadow='1px 1px 5px #ddd' padding='1rem'>
								<Image src={fe3} style={{ width: '20%', height: '50%' }} alt='fe1' />
								<h3 className={style.feature_head} style={{color: 'black'}}>Composable</h3>
								<p style={{ color: '#333' }}>Designed with composition in mind. Compose new components with ease.</p>
							</Box>
						</div>
					</Grid>
					{/* </Grid> */}
					{/* </div> */}
					{/* <div data-aos='fade-up'> */}
					{/* <Grid container justifyContent='space-between' columnSpacing={3} mb='2rem' rowSpacing={2}> */}
					<Grid xs={12} sm={6} md={4}>
						<div data-aos='fade-up'>
							<Box style={{bgColor: '#fafafa'}} borderRadius='8px' boxShadow='1px 1px 5px #ddd' padding='1rem'>
								<Image src={fe4} style={{ width: '20%', height: '50%' }} alt='fe1' />
								<h3 className={style.feature_head} style={{color: 'black'}}>Developer Experience</h3>
								<p style={{ color: '#333' }}>Guaranteed to boost your productivity when building your app or website.</p>
							</Box>
						</div>
					</Grid>
					<Grid xs={12} sm={6} md={4}>
						<div data-aos='fade-up'>
							<Box style={{bgColor: '#fafafa'}} borderRadius='8px' boxShadow='1px 1px 5px #ddd' padding='1rem'>
								<Image src={fe5} style={{ width: '20%', height: '50%' }} alt='fe1' />
								<h3 className={style.feature_head} style={{color: 'black'}}>Continuous Updates</h3>
								<p style={{ color: '#333' }}>We continually deploy improvements and new updates to Webbee.</p>
							</Box>
						</div>
					</Grid>
					<Grid xs={12} sm={6} md={4}>
						<div data-aos='fade-up'>
							<Box style={{bgColor: '#fafafa'}} borderRadius='8px' boxShadow='1px 1px 5px #ddd' padding='1rem'>
								<Image src={fe6} style={{ width: '20%', height: '50%' }} alt='fe1' />
								<h3 className={style.feature_head} style={{color: 'black'}}>Free support</h3>
								<p style={{ color: '#333' }}>6 months of free technical support to help you build your website faster.</p>
							</Box>
						</div>
					</Grid>
				</Grid>
				{/* </div> */}
			</Container>
			<Container maxWidth='xl' sx={{ textAlign: 'center', py: '2rem', backgroundColor: '#f7f9fc' }}>
				<p>DEMO PAGES</p>
				<h1 className={style.actionpart}>Webbee in action</h1>
				<h3 className={style.actionpart}>All examples you find below are included in the download package.</h3>
				<Box>
					<Button variant='contained' color='success' sx={{ borderRadius: '3px', mr: '10px' }}>Purchase now</Button>
					<Button variant='outlined' color='success' sx={{ borderRadius: '3px' }}>View documentation</Button>
				</Box>
				<h2 style={{ textAlign: 'start', marginTop: '2rem' }}>Landing Pages</h2>
				{/* <Container sx={{py: '2rem'}} maxWidth='md'> */}
				<Grid container textAlign='start' pt='2rem'>
					<Grid xs={12} sm={6} md={4}>
						<Box border='1px solid #aaa' padding='2rem'>
							<p className={style.Landingpage_head}>Advertisement</p>
							<p className={style.Landingpage}>Advertisment page</p>
							<a href='' className={style.Landingpage_link}>View demo</a>
						</Box>
					</Grid>
					<Grid xs={12} sm={6} md={4}>
						<Box border='1px solid #aaa' padding='2rem'>
							<p className={style.Landingpage_head}>Payment App</p>
							<p className={style.Landingpage}>Payment App page</p>
							<a href='' className={style.Landingpage_link}>View demo</a>
						</Box>
					</Grid>
					<Grid xs={12} sm={6} md={4}>
						<Box border='1px solid #aaa' padding='2rem'>
							<p className={style.Landingpage_head}>Marketing</p>
							<p className={style.Landingpage}>Marketing page</p>
							<a href='' className={style.Landingpage_link}>View demo</a>
						</Box>
					</Grid>
					{/* </Grid> */}
					{/* <Grid container textAlign='start'> */}
					<Grid xs={12} sm={6} md={4}>
						<Box border='1px solid #aaa' padding='2rem'>
							<p className={style.Landingpage_head}>Software Company</p>
							<p className={style.Landingpage}>Software Company page</p>
							<a href='' className={style.Landingpage_link}>View demo</a>
						</Box>
					</Grid>
					<Grid xs={12} sm={6} md={4}>
						<Box border='1px solid #aaa' padding='2rem'>
							<p className={style.Landingpage_head}>Course App</p>
							<p className={style.Landingpage}>Course page</p>
							<a href='' className={style.Landingpage_link}>View demo</a>
						</Box>
					</Grid>
					<Grid xs={12} sm={6} md={4}>
						<Box border='1px solid #aaa' padding='2rem'>
							<p className={style.Landingpage_head}>Crypto Currency</p>
							<p className={style.Landingpage}>Crypto Currency page</p>
							<a href='' className={style.Landingpage_link}>View demo</a>
						</Box>
					</Grid>
					{/* </Grid> */}
					{/* <Grid container textAlign='start'> */}
					<Grid xs={12} sm={6} md={4}>
						<Box border='1px solid #aaa' padding='2rem'>
							<p className={style.Landingpage_head}>Design Agency</p>
							<p className={style.Landingpage}>Design Agency page</p>
							<a href='' className={style.Landingpage_link}>View demo</a>
						</Box>
					</Grid>
					<Grid xs={12} sm={6} md={4}>
						<Box border='1px solid #aaa' padding='2rem'>
							<p className={style.Landingpage_head}>Consulting</p>
							<p className={style.Landingpage}>Consulting page</p>
							<a href='' className={style.Landingpage_link}>View demo</a>
						</Box>
					</Grid>
					<Grid xs={12} sm={6} md={4}>
						<Box border='1px solid #aaa' padding='2rem'>
							<p className={style.Landingpage_head}>Application</p>
							<p className={style.Landingpage}>Application page</p>
							<a href='' className={style.Landingpage_link}>View demo</a>
						</Box>
					</Grid>
				</Grid>
				{/* </Container> */}
				{/* --------------------------------------------------------------------- */}
				<h2 style={{ textAlign: 'start', marginTop: '2rem' }}>Supporting Pages</h2>
				{/* <Container sx={{py: '2rem'}} maxWidth='md'> */}
				<Grid container textAlign='start' pt='2rem'>
					<Grid xs={12} sm={6} md={4}>
						<Box border='1px solid #aaa' padding='2rem'>
							<p className={style.Landingpage_head}>About</p>
							<p className={style.Landingpage}>About page</p>
							<a href='' className={style.Landingpage_link}>View demo</a>
						</Box>
					</Grid>
					<Grid xs={12} sm={6} md={4}>
						<Box border='1px solid #aaa' padding='2rem'>
							<p className={style.Landingpage_head}>Services</p>
							<p className={style.Landingpage}>Services page</p>
							<a href='' className={style.Landingpage_link}>View demo</a>
						</Box>
					</Grid>
					<Grid xs={12} sm={6} md={4}>
						<Box border='1px solid #aaa' padding='2rem'>
							<p className={style.Landingpage_head}>Contact</p>
							<p className={style.Landingpage}>Contact page</p>
							<a href='' className={style.Landingpage_link}>View demo</a>
						</Box>
					</Grid>
					{/* <Grid container textAlign='start'> */}
					<Grid xs={12} sm={6} md={4}>
						<Box border='1px solid #aaa' padding='2rem'>
							<p className={style.Landingpage_head}>Pricing</p>
							<p className={style.Landingpage}>Pricing page</p>
							<a href='' className={style.Landingpage_link}>View demo</a>
						</Box>
					</Grid>
					<Grid xs={12} sm={6} md={4}>
						<Box border='1px solid #aaa' padding='2rem'>
							<p className={style.Landingpage_head}>Customers</p>
							<p className={style.Landingpage}>Customers page</p>
							<a href='' className={style.Landingpage_link}>View demo</a>
						</Box>
					</Grid>
					<Grid xs={12} sm={6} md={4}>
						<Box border='1px solid #aaa' padding='2rem'>
							<p className={style.Landingpage_head}>Hire Us</p>
							<p className={style.Landingpage}>Hire Us page</p>
							<a href='' className={style.Landingpage_link}>View demo</a>
						</Box>
					</Grid>
				</Grid>
				{/* </Container> */}
				{/* --------------------------------------------------------------------- */}
				<h2 style={{ textAlign: 'start', marginTop: '2rem' }}>Auth Pages</h2>
				{/* <Container sx={{py: '2rem'}} maxWidth='md'> */}
				<Grid container textAlign='start' pt='2rem'>
					<Grid xs={12} sm={6} md={4}>
						<Box border='1px solid #aaa' padding='2rem'>
							<p className={style.Landingpage_head}>Login</p>
							<p className={style.Landingpage}>Login page</p>
							<a href='' className={style.Landingpage_link}>View demo</a>
						</Box>
					</Grid>
					<Grid xs={12} sm={6} md={4}>
						<Box border='1px solid #aaa' padding='2rem'>
							<p className={style.Landingpage_head}>Sign Up</p>
							<p className={style.Landingpage}>Sign Up page</p>
							<a href='' className={style.Landingpage_link}>View demo</a>
						</Box>
					</Grid>
					<Grid xs={12} sm={6} md={4}>
						<Box border='1px solid #aaa' padding='2rem'>
							<p className={style.Landingpage_head}>Forget Password</p>
							<p className={style.Landingpage}>Forget Password page</p>
							<a href='' className={style.Landingpage_link}>View demo</a>
						</Box>
					</Grid>
				</Grid>
				{/* </Container> */}
			</Container>
			<Container maxWidth='md' sx={{ textAlign: 'center', py: '2rem' }}>
				<p>GET STARTED</p>
				<h1 className={style.actionpart}>Get started with Webbee today</h1>
				<h3 className={style.actionpart}>Build a beautiful, modern website with flexible, fully customizable, atomic Material-UI components.</h3>
				<Button variant='contained' color='success' sx={{ borderRadius: '3px', mr: '10px' }}>Purchase now</Button>
			</Container>
		</main >
	);
}