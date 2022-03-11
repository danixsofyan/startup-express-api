# Installation

## Setup this repository first
Usage
```bash
git clone https://github.com/danixsofyan/startup-express-api
cd startup-express-api
```

## Setup Express Packages and Migrations

### Bash Usage

Install dependency
```bash
npm install
cp .env.example .env
```
setup your connection database
```bash
npx sequelize db:migrate
```
start server
```bash
npm run dev
run at http://localhost:3000/
```
