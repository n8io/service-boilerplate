# service-boilerplate
A barebones nodejs repository with all the standard stuffs

## A Boilerplate

### ... must have:
1. A well defined test structure
	1. Where are test files located in relation to their implementations? Under `tests/` or modularly next to logic? (modular)
	2. What testing framework should be used? (AVA)
2. Code coverage
	1. What are the minimum acceptable levels? Statements, functions, lines, branches (95, 95, 95, 75)
	1. Ideally monitored by a third party service (codecov)
2. Linting
	1. Ideally this is a one of the first shared libraries of a code base (eslint)
3. Local dev mode that watches for changes
	4. Watch code base and restart/lint (gulp w/nodemon)
	5. Watch tests and re-run (ava --watch)

### ... would be nice to have:
4. Buildable docker image
	1. Doubles as the containerized dev environment too
5. Environment variable validation/checking
	1. Ideally no config files (except local dev)
3. Stale or insecure or dependency checking as a service (greenkeeper.io)
4. Repo report card (bithound.io)
