import { Container } from "@mui/system";
import Image from "next/image";
import footlogo from './images/logo.PNG'
import Link from 'next/link'
import Button from "@mui/material/Button";
import style from './middle.module.css'

export default function Footer() {

	return (
		<footer style={{ borderTop: '1px solid #999', paddingBottom: '1rem' }}>
			<Container sx={{ display: 'flex', justifyContent: 'space-between', py: '1rem' }}>
				<Image src={footlogo} style={{ width: '5%', height: '10%' }} alt='foo' />
				<ul style={{ listStyleType: 'none' }}>
					<li className={style.footerlist}><Link href='./page.tsx' style={{backgroundColor: 'black'}}>Home</Link></li>
					<li className={style.footerlist}><Link href='#' style={{backgroundColor: 'black'}}>Documentation</Link></li>
					<li className={style.footerlist}><Button variant="outlined" color="success">Purchase now</Button></li>
				</ul>
			</Container>
			<p style={{ textAlign: 'center', backgroundColor: 'black' }}>© Webbee. 2021, Maccarian. All rights reserved</p>
		</footer>
	);
}