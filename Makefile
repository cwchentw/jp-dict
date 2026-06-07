ifeq ($(OS),Windows_NT)
	RMDIR := rmdir /s /q
else
	RMDIR := rm -rf
endif

OUT_DIR := dist
TEST_DIR := test
ENTRY := src/jp-dict.js
ESBUILD := bunx esbuild

.PHONY: test release dict clean

test: release
	bun $(TEST_DIR)/jp-dict.demo.js

release: dict
	$(ESBUILD) $(ENTRY) --outdir=$(OUT_DIR) --format=esm --minify

dict:
	mkdir -p $(OUT_DIR)
	./convert > $(OUT_DIR)/dict.json

clean:
	$(RMDIR) $(OUT_DIR)