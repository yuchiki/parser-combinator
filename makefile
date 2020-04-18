.PHONY: all-test lint test build

all-test: lint test build

lint:
	npm run lint

test:
	npm test

build:
	npm build
