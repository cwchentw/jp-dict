# jp-dict

A Japanese-to-English dictionary combined with its CSV-to-JSON converter.

## Project Status

*WIP* (Work in Progress) — The converter is fully functional and ready, while the dictionary data is currently a minimal Proof of Concept (PoC).

## System Requirements

- **Make** (for running build and test tasks)
- **Perl 5.36+** (for running tool scripts)
- **Carton** (for managing tool script dependencies)

## Installation

```shell
$ cd path/to/jp-dict
$ carton install
```

## Usage

### Library

Run `make` and locate the compiled artifact in the dist/ directory.

### Quiz

To compile the dictionary, run:

```shell
$ make
```

Then start the interactive flashcard‑style quiz:

```shell
$ ./bin/jp2en
```

or:

```shell
$ ./bin/en2jp
```

## 🤝 Contributing

We keep our dictionary in `data/jp-en.csv`. At the moment it’s intentionally minimal, serving as a proof of concept. Contributors are warmly invited to expand the lexicon—especially with entries drawn from beginner‑level Japanese learning materials.

👉 **No coding required**: If you can read and edit a CSV file, you’re already able to contribute.

## License

Copyright (c) 2026 BytBard. Licensed under the MIT License.

*Language is human knowledge; it neither owns copyright nor belongs to anyone.*
