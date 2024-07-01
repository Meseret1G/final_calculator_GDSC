# GDSC_CALCULATOR

Calculator Project
## Description
The calculator application utilizes Node.js and JavaScript to provide interactive input and computation functionalities. It employs a readline interface to accept user expressions and execute calculations based on predefined arithmetic operations and trigonometric functions (sin, cos, tan, asin, acos, atan). Expressions involving unit conversions (meters to feet, feet to meters, etc.) are parsed and processed using regex replacement and evaluation. Additionally, a specialized feature handles road construction calculations, computing required materials (gravel and asphalt) based on user-provided dimensions of length, width, and depth.

## Unique Feature
The unique feature of this calculator is its ability to perform road construction calculations. Upon recognizing input starting with 'road construction', it parses dimensions and computes necessary materials (gravel and asphalt) in cubic meters and tons, respectively.

## Challenges Faced
A key challenge was error handling and input validation, especially when parsing user-defined expressions and dimensions for road construction. Additionally, managing unit conversion precision and ensuring consistent handling of trigonometric functions posed challenges, addressed through thorough testing and refinement of function logic and using others code from stack and github.

## Author
- Meseret Ghebiresilassie
