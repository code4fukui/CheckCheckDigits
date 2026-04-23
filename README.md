# CheckCheckDigits

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A tool to check various check digit algorithms.

## Features
- Supports the following check digit algorithms:
  - [Damm](https://github.com/code4fukui/Damm)
  - [Verhoeff](https://github.com/code4fukui/Verhoeff)
  - [Luhn](https://github.com/code4fukui/Luhn)
  - [Modulus10](https://github.com/code4fukui/Modulus10)
  - [Modulus11](https://github.com/code4fukui/Modulus11)
  - [Modulus9](https://github.com/code4fukui/Modulus9)
- Visually indicates which algorithm's check digit is valid for the input code

## Requirements
No specific requirements beyond a modern web browser.

## Usage
1. Enter a code in the input field.
2. The tool will display which check digit algorithms the code is valid for.

## Data / API
The project uses external JavaScript modules for each algorithm:
- [Damm](https://github.com/code4fukui/Damm)
- [Verhoeff](https://github.com/code4fukui/Verhoeff)
- [Luhn](https://github.com/code4fukui/Luhn)
- [Modulus10](https://github.com/code4fukui/Modulus10)
- [Modulus11](https://github.com/code4fukui/Modulus11)
- [Modulus9](https://github.com/code4fukui/Modulus9)

## License
MIT License — see [LICENSE](LICENSE).