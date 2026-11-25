# FixFlow — Maintenance & Repairs Ticket System

A Node.js web application for reporting and tracking community maintenance and repair
issues — leaking pipes, broken heaters, electrical faults, elevator outages — in one
place instead of scattered phone calls, messages, and paper notes.

Built for **601316 Modern Programming Language**. The current release is **Phase 1**: a
fully routed, server-rendered Express app backed by temporary in-file sample data.
MongoDB + Mongoose arrive in Phase 3.

## Features (Phase 1)

- Express server with EJS view engine and template inheritance
- Home, About, Services, Ticket Detail, and Contact pages plus a custom 404
- Reusable header, navigation, and footer partials
- Bootstrap 5 layout with a custom teal theme
- Sample ticket data served from an in-file array
- Static contact form (not yet connected to a server)

## Tech stack

| Layer | Technology |
| --- | --- |
| Runtime | Node.js |
| Server | Express 4 |
| Templates | EJS |
| Styling | Bootstrap 5 (CDN) + custom CSS |
| Database | MongoDB + Mongoose (planned for Phase 3) |

## Requirements

- Node.js 18 or newer (tested on Node 26)
- npm
- Git

## Installation

```bash
git clone https://github.com/yousef-abualsoud/FixFlow.git
cd FixFlow
npm install
```

## Running the app

```bash
npm run dev     # nodemon — restarts on file changes
```

or:

```bash
npm start       # plain node — no auto-restart
```

Open [http://localhost:3000](http://localhost:3000). To use another port:

```bash
PORT=3001 npm start
```

> Changes to files in `routes/` are only picked up after a restart unless you are
> running `npm run dev`.

## Pages and routes

| Route | Page |
| --- | --- |
| `GET /` | Home |
| `GET /about` | About the project and team |
| `GET /services` | Maintenance service categories |
| `GET /tickets/:id` | Sample ticket detail (IDs 1–4) |
| `GET /contact` | Static contact form |
| any other URL | Custom 404 page |

## Project structure

```
FixFlow/
├── app.js                 # Express setup: middleware, view engine, router mounting, 404
├── routes/                # Route modules
│   ├── index.js           # GET / and GET /about
│   ├── services.js        # GET /services
│   ├── tickets.js         # GET /tickets/:id + sample data
│   └── contact.js         # GET /contact
├── views/                 # EJS pages
│   └── partials/          # header, nav, footer
├── public/
│   ├── css/style.css      # Custom theme
│   └── images/logo.svg    # Brand logo
├── models/                # Empty until Phase 3 (Mongoose schemas)
└── package.json
```

## Phase 1 notes

- No database yet: sample tickets live in `routes/tickets.js` and will move to a
  Mongoose model in Phase 3.
- The contact form is display-only in Phase 1.
- `models/` is intentionally empty and reserved for Phase 3.

## Team

| Name | Student ID |
| --- | --- |
| Yousef Samer Baseem Abu-Al Soud | 202310168 |
| Yousef Abdullah Mohammed Al-Husseini | 202310661 |
| Yousef Osama Yousef Salameh | 202320192 |
| Thanaa Samer Osama Mansour | 202410612 |

Course: 601316 — Modern Programming Language
