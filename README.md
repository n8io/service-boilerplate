# service-boilerplate
A barebones nodejs repository with all the standard stuffs

## A Boilerplate

### ... must have:
1. A well defined test structure
	1. Where are test files located in relation to their implementations? `./tests/` or alongside?
	2. What testing framework should be used?
2. Code coverage
	1. What are the minimum acceptable levels? Statements, functions, branches, lines
	1. Ideally monitored by a third party service
2. Linting
	1. Ideally this is a one of the first shared libraries of a code base
3. Local dev mode that watches for changes

### ... would be nice to have:
4. Buildable docker image
	1. Doubles as the containerized dev environment too
5. Environment variable validation/checking
	1. Ideally no config files (except local dev)
3. Stale or insecure or dependency checking as a service (greenkeeper.io)
