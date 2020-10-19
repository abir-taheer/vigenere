PROJECT = "vigenere"
all: help

help:
	$(info ***** INSTRUCTIONS *****)
	@echo "To encode text"
	@echo "make run ARGS=\"encode <message> <key>\""
	@echo ""
	@echo "To decode text with unknown key"
	@echo "make run ARGS=\"decode <encoded message>\""
	@echo ""
	@echo "To decode text with known key"
	@echo "make run ARGS=\"decode <encoded message> <key>\""


run:
	npm run start $(ARGS)

.PHONY: run
