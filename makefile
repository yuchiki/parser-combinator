.PHONY: test-all lint test build

test-all: lint test build

lint:
	npm run lint

test:
	npm test

build:
	npm build
