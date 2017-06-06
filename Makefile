SHELL := /bin/bash

lint:
	./node_modules/.bin/eslint src

clean:
	rm -rf ./build

dev: clean lint
	npm run dev

build: clean lint
	npm run prod

pack:
	mkdir -p ./dist
	pushd ./build && \
	zip -r app-`date -u +"%Y-%m-%dT%H:%M:%SZ"`.zip * && \
	cp app-*.zip ../dist && \
	rm app-*.zip && \
	popd

custom-pack: 
	mkdir -p ./dist
	pushd ./build && \
	zip -r $(app)-`date -u +"%Y-%m-%dT%H:%M:%SZ"`.zip * && \
	cp $(app)-*.zip ../dist && \
	rm $(app)-*.zip && \
	popd

dist: clean build pack

dist-custom: clean build custom-pack

dev-pack:
	rm -rf ./dist
	mkdir -p ./dist
	zip -r app-local-build-`date -u +"%Y-%m-%dT%H:%M:%SZ"`.zip . -x node_modules/\*  -x dist/\* -x .DS_Store -x .git/\* . && \
	cp app-*.zip ./dist && \
	rm app-*.zip

dev-pack-custom:
	rm -rf ./dist
	mkdir -p ./dist
	zip -r $(app)-local-build-`date -u +"%Y-%m-%dT%H:%M:%SZ"`.zip . -x node_modules/\* -x dist/\* -x .DS_Store -x .git/\* . && \
	cp $(app)-*.zip ./dist && \
	rm $(app)-*.zip

dev-dist: clean lint dev-pack

dev-dist-custom: clean lint dev-pack-custom

