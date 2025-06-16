# SENG8120 Modern Automated Testing 

## Purpose

This repository houses the code we require for examples and assignments.

## Repository Usage

This repository will contain branches of code.

Please refer to your instructor's directions on how to use this repository.

## Branch Usage

**Installing The Dependencies**

You will need to install dependencies by using:

```bash
npm install
```

**Running The Project**

To run the project, you must first build the project:

```bash
npm run build
```

followed by:

```bash
npm start
```

Note:  if you make a change in the production code, you must `build` & `start`.
Otherwise, your changes will not be reflected.

**Running The Tests**

To run the tests, you can use

```bash
npm run test
```

To keep the tests running, you can use

```bash
npm run test -- --watch
```

To run a specific test, you can use

```bash
npm run test [my test name]
```

## Test-Driven Development (TDD) Approach

This project follows a **Test-Driven Development** methodology

### Example Functions

- `calculateCanvasSize(length, width)`
  - Returns the canvas area.
  - Validates numeric input.
- `calculatePaintRequired(area)`
  - Calculates required paint based on area.
  - Includes error handling for invalid input.

## Implemented Features

- ✅ Canvas area calculator  
- ✅ Paint requirement estimator  
- ✅ Input validation and error handling  
 

 ## Author(s)

Further developed by **Gideon Nyamuame**

Github: https://github.com/gideonny/SENG8120-Modern-Automated-Testing-evaluating-for-test-coverage

Link to original code: https://github.com/conestogac-acsit/SENG8120-Modern-Automated-Testing/tree/evaluating-for-test-coverage