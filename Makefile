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

dict:
	mkdir -p $(OUT_DIR)
	./convert > $(OUT_DIR)/dict.json

clean:
	$(RMDIR) $(OUT_DIR)