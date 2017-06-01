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

dev-packer:
	mkdir -p ./dist
	zip -r app_`date -u +"%Y-%m-%dT%H:%M:%SZ"`.zip * . && \
	cp app_*.zip ./dist && \
	rm app_*.zip

dev-packer-custom:
	mkdir -p ./dist
	zip -r $(app)_`date -u +"%Y-%m-%dT%H:%M:%SZ"`.zip * . && \
	cp $(app)_*.zip ./dist && \
	rm $(app)_*.zip

dev-dist: clean lint dev-packer

dev-dist-custom: clean lint dev-packer-custom

