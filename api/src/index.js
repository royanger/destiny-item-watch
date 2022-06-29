import express from 'express';
import https from 'https';
import fs from 'fs';
import dotenv from 'dotenv';
import session from 'express-session';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import { PrismaClient } from '@prisma/client';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import cors from 'cors';

dotenv.config();

const SECRET = process.env.SECRET;
const PORT = process.env.PORT || 3000;
const URL = process.env.URL;

const app = express();

app.use(cookieParser(SECRET));
app.use(
	session({
		cookie: {
			maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
		},
		secret: SECRET,
		resave: true,
		saveUninitialized: true,
		domain: 'localhost',
		store: new PrismaSessionStore(new PrismaClient(), {
			checkPeriod: 2 * 60 * 1000,
			dbRecordIdIsSessionId: true,
			dbRecordIdFunction: undefined,
		}),
	})
);

app.use(
	cors({
		origin: process.env.APP_URL,
		credentials: true,
	})
);

app.enable('trust proxy');

app.use(passport.initialize());
app.use(passport.session());

import { passportSerialize } from './lib/auth/serialize.js';
import { passportDeserialize } from './lib/auth/deserialize.js';
passportSerialize(passport);
passportDeserialize(passport);

import { passportBungie } from './lib/auth/BungieStrategy.js';
passportBungie(passport);

// import { passportGitHub } from './lib/auth/GitHubStrategy.js';
// passportGitHub(passport);

app.get('/hello-there', (req, res) => {
	res.json({ who: 'Obi-Wan Kenobi' });
});

app.get('/auth/bungie', passport.authenticate('bungie'));
// app.get('/auth/github', passport.authenticate('github'));

app.get(
	'/auth/callback/bungie',
	passport.authenticate('bungie', { failureRedirect: '/failed' }),
	function (req, res) {
		res.redirect(`${process.env.APP_URL}/dashboard`);
	}
);

// app.get(
//    '/auth/callback/github',
//    passport.authenticate('github', { failureRedirect: '/failed' }),
//    function (req, res) {
//       res.redirect(`${process.env.APP_URL}/dashboard`);
//    }
// );

import { authCheck, authLogout } from './routes/auth.js';
app.get('/auth/check', authCheck);
app.get('/auth/logout', authLogout);

console.log('env', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
	https
		.createServer(
			{
				key: fs.readFileSync('./src/certs/key.pem'),
				cert: fs.readFileSync('./src/certs/cert.pem'),
				passphrase: process.env.CERT_PASSPHRASE,
			},
			app
		)
		.listen(PORT, URL, () => {
			console.log(`EXPRESS: Started on https://${URL}:${PORT}`);
		});
} else {
	app.listen(PORT, () => {
		console.log(`EXPRESS (prod): Start on http://localhost:${PORT}`);
	});
}
