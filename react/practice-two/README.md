# Practice One ReactJS

### Overview

- This document provides information about practice-two ReactJS
- Create a website products management following this design: [design](<https://www.figma.com/file/sl1LCYYdr3IA0IPEIrDvw5/Table-UI-3.0-%7C-Variants-Update-(Community)?node-id=0-1&t=g1Okt3QfjOMDRcLA-0>)
- Plan: [plan](https://docs.google.com/document/d/1KKlErwZB6m8S8wv01re003T2ni5m2c0454AYpoL_2TU/edit#)

### Targets

- Using React hooks

### Requirements

- [Practice two of ReactJS](https://docs.google.com/document/d/13VDmajtXccKR0im4q76tqtVmeEiByFmfZ_V8F9Q6bnw/edit)

### Information

- Timeline
  - Estimate day:
  - Actual day:
- Techniques Stack:
  - HTML5/CSS3
  - JavaScript
  - [TypeScript](https://www.typescriptlang.org/)
  - [ReactJS](https://reactjs.org/)
  - [Storybook](https://storybook.js.org/)
- Development Tools:
  - [Vite](https://vitejs.dev/)
  - [Eslint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
- Editor: Visual Studio Code.

### Main App Features:

- Filter:
  - By name
  - By status
  - By type
  - By quantity
  - By brand
  - By price
- Edit
- Delete

### Development Environment

- Node v16.16
- pnpm v7.19.0
- ReactJS v18.2.0
- Storybook ReactJS v6.5.16
- Vite v4.1.0
- Eslint v8.35.0
- Prettier v2.8.3
- TypeScript v4.9.3

### Getting Started

- Step 1: Clone repository
  - With HTTPS :
    - `$ git clone https://github.com/GraphicDThanh/huong-le-nguyen-lan-internship.git`
  - With SSH:
    - `$ git clone git@github.com:GraphicDThanh/huong-le-nguyen-lan-internship.git`
- Step 2: `cd huong-le-nguyen-lan-internship`
- Step 3: Move to branch feat/practice-two
  - `git checkout feat/practice-two`
- Step 4: `cd  react/practice-two`
- Step 5: Now you need to install packages
  - `$ pnpm i`
- Step 6: After installing the packages
  - `$ pnpm start-db`
- Step 7: Open another terminal
  - Website: `$ pnpm run start`
  - Storybook: `$ pnpm run storybook`
- Step 8:
  - http://127.0.0.1:5173/ to see the website
  - http://localhost:6006 to see Storybook

### Note

- If you get errors about using pnpm to run Storybook
- Try to add `node-linker=hoisted` to `.npmrc` file. After that remove all the storybook in project or clone and run project again
