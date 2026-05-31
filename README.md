# kr-dict

A Korean-to-English dictionary combined with its CSV-to-JSON converter.

## Project Status

*WIP* (Work in Progress) — The converter is fully functional and ready, while the dictionary data is currently a minimal Proof of Concept (PoC).

## System Requirements

* POSIX environment
* Perl 5.36+
* Carton (Perl module dependency manager)

## Installation

```shell
$ cd path/to/kr-dict
$ carton install
```

## Usage

```shell
$ ./convert > dict.json
```

## Acknowledgments

Special thanks to the **National Institute of Korean Language (국립국어원)** for providing the original vocabulary list (*한국어 학습용 어휘 목록*).

## License

Copyright (c) 2026 BytBard. Licensed under the MIT License.

*Language is human knowledge; it neither owns copyright nor belongs to anyone.*
