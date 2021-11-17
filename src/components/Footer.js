import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "black",
				textAlign: "center",
				marginTop: "-50px" }}>
		Wear  This -- One stop Clothing store
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Carrers</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Women</FooterLink>
			<FooterLink href="#">Men</FooterLink>
			<FooterLink href="#">Acessories</FooterLink>

		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">USA</FooterLink>
			<FooterLink href="#">Australia</FooterLink>
			<FooterLink href="#">Europe</FooterLink>

		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<FaFacebook/>
							

				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>

			</FooterLink>
			<FooterLink href="#">
			<FaInstagram/>
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>

			</FooterLink>
			<FooterLink href="#">
		<FaTwitter/>
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>

			</FooterLink>
			<FooterLink href="#">
			<FaYoutube/>
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>

			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
