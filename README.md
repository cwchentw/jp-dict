# jp-dict

A Japanese-to-English dictionary combined with its CSV-to-JSON converter.

## Project Status

*WIP* (Work in Progress) — The converter is fully functional and ready, while the dictionary data is currently a minimal Proof of Concept (PoC).

## System Requirements

### Production

* Any modern browser or edge runtime with ES6 support

### Development

- **Bun** (for dependency management and tooling)
- **Make** (for running build and test tasks)
- **Perl 5.36+** (for running tool scripts)
- **Carton** (for managing tool script dependencies)

## Installation

```shell
$ cd path/to/jp-dict
$ carton install
```

## Usage

Run `make` and locate the compiled artifact in the dist/ directory.

## Acknowledgments

This project was developed with reference to JLPT vocabulary lists.

## License

Copyright (c) 2026 BytBard. Licensed under the MIT License.

*Language is human knowledge; it neither owns copyright nor belongs to anyone.*
