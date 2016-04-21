
BIN := ./node_modules/.bin

lib: node_modules
	$(BIN)/babel --out-dir $@ src --source-maps inline
	$(BIN)/postcss --use autoprefixer --dir $@ src/index.css

build:
	mkdir -p build
	cp site/* build
	cp src/index.css build
	${BIN}/browserify site/index.js -o build/index.js -t [ babelify --presets [ es2015 ] ]

test: node_modules
	$(BIN)/mochify \
		--transform babelify \
		--phantomjs $(BIN)/phantomjs \
		--reporter spec

node_modules: package.json
	npm install
	touch $@

clean:
	rm -rf lib

distclean: clean
	rm -rf node_modules

.PHONY: clean distclean build
