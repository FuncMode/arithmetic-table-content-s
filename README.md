# Arithmetic Table Content Generator

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-brightgreen?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

A lightweight web application for generating and displaying interactive arithmetic multiplication tables. Built with vanilla JavaScript, HTML, and CSS, it uses Web Workers for efficient background computation—perfect for educational tools, quick reference, or practicing math facts without freezing the UI.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Files](#files)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Overview
This project creates dynamic multiplication tables (e.g., 1–12 times tables) on the fly. Users can input a starting number, ending number, and optional styling preferences. It's designed for simplicity and performance, leveraging Web Workers to handle table generation in the background. Ideal for teachers, students, or anyone needing customizable arithmetic content.

Key concepts demonstrated:
- DOM manipulation for dynamic UI
- Web Workers for asynchronous processing
- Event handling for user interactions
- Responsive CSS styling

## Features
- **Customizable Tables**: Generate tables for any range (e.g., 2–5 or 1–12).
- **Background Processing**: Web Workers ensure smooth UI even for large tables.
- **Interactive UI**: Input fields for quick adjustments; copy-to-clipboard functionality.
- **Responsive Design**: Works on desktop and mobile browsers.
- **No Dependencies**: Pure vanilla JS—no frameworks or libraries needed.

## Getting Started
### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge).
- No server required—runs entirely client-side.

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/FuncMode/arithmetic-table-content-s.git
   ```
2. Navigate to the project directory:
   ```
   cd arithmetic-table-content-s
   ```
3. Open `index.html` in your browser:
   ```
   open index.html  # On macOS
   # Or drag the file into your browser
   ```

## Usage
1. Open `index.html` in a browser.
2. Enter the starting multiplier (e.g., 1) and ending multiplier (e.g., 12).
3. Click "Generate Table" to create the multiplication table.
4. The table displays in a styled grid; use the "Copy Table" button to copy content to your clipboard.
5. For large ranges, the Web Worker handles computation without lag.

Pro tip: Edit `style.css` for custom themes or fonts.

## Files
| File Name     | Description                          |
|---------------|--------------------------------------|
| `index.html` | Main entry point with HTML structure and user interface. |
| `script.js`  | Core JavaScript logic for DOM events, input validation, and table rendering. |
| `style.css`  | Styles for a clean, responsive layout with table formatting. |
| `worker.js`  | Web Worker script for generating table data asynchronously. |

## Examples

### Basic Multiplication Table (1–5)
Input: Start = 1, End = 5  
Output:
| × | 1  | 2  | 3  | 4  | 5  |
|---|----|----|----|----|----|
| **1** | 1  | 2  | 3  | 4  | 5  |
| **2** | 2  | 4  | 6  | 8  | 10 |
| **3** | 3  | 6  | 9  | 12 | 15 |
| **4** | 4  | 8  | 12 | 16 | 20 |
| **5** | 5  | 10 | 15 | 20 | 25 |

### Extended Table (2–10)
Input: Start = 2, End = 10  
Generates a larger grid highlighting multiples from 2×2 to 10×10, with color-coded rows for easy reading.

## Contributing
Contributions are welcome! Help expand it with features like addition/subdivision tables, PDF export, or dark mode:
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/NewFeature`).
3. Commit your changes (`git commit -m 'Add NewFeature'`).
4. Push to the branch (`git push origin feature/NewFeature`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details (or add one if not present).

---

*Built with ❤️ by FuncMode*  
[Star this repo](https://github.com/FuncMode/arithmetic-table-content-s) if it helps you! 🚀
