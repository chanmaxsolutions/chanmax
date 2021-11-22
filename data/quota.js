/** @format */
import Apple from '../public/images/icons/apple';
import Android from '../public/images/icons/android';
import Web from '../public/images/icons/web';
import Desktop from '../public/images/icons/desktop';
import Database from '../public/images/icons/database';
import PaymentGateway from './../public/images/icons/payment-gateway';
import LogoBranding from '../public/images/icons/logo-branding';
import UXDesign from '../public/images/icons/uxdesign';
import AdminPanel from '../public/images/icons/admin-panel';
import API from '../public/images/icons/API';
import Backend from '../public/images/icons/backend';
import Other from '../public/images/icons/other';
import Dollar from '../public/images/icons/dollar';
import Google from '../public/images/icons/google';
import Facebook from '../public/images/icons/facebook';
import LinkedIn from '../public/images/icons/linkedin';
import Email from './../public/images/icons/email';
import Event from '../public/images/icons/event';

export const estimateData = [
	{
		'iOS APP': {
			status: false,
			icon: <Apple />,
		},
		'Android App': {
			status: false,
			icon: <Android />,
		},
		'Web App': { status: false, icon: <Web /> },
		'Desktop App': { status: false, icon: <Desktop /> },
		Database: { status: false, icon: <Database /> },
		Backend: { status: false, icon: <Backend /> },
		'Admin Panel': { status: false, icon: <AdminPanel /> },
		'API Integration': { status: false, icon: <API /> },
		'Payment Gateway': { status: false, icon: <PaymentGateway /> },
		'Logo & Branding': { status: false, icon: <LogoBranding /> },
		'UX Design': { status: false, icon: <UXDesign /> },
		'Other / No idea': { status: false, icon: <Other /> },
	},
	{
		'< $1000': { status: false, icon: <Dollar /> },
		'$1000 - $3000': { status: false, icon: <Dollar /> },
		'$3000 - $6000': { status: false, icon: <Dollar /> },
		'$6000 - $10, 000': { status: false, icon: <Dollar /> },
		'$10, 000 +': { status: false, icon: <Dollar /> },
		'Other / No idea': { status: false, icon: <Dollar /> },
	},
	{
		Google: { status: false, icon: <Google /> },
		LinkedIn: { status: false, icon: <LinkedIn /> },
		Facebook: { status: false, icon: <Facebook /> },
		Email: { status: false, icon: <Email /> },
		Event: { status: false, icon: <Event /> },
		'Other / No idea': { status: false, icon: <Other /> },
	},
];
