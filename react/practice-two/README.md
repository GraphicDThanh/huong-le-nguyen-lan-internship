# Practice Two ReactJS

- This document provides information about practice-two ReactJS
- Create a website products management following this design: [design](<https://www.figma.com/file/sl1LCYYdr3IA0IPEIrDvw5/Table-UI-3.0-%7C-Variants-Update-(Community)?node-id=0-1&t=g1Okt3QfjOMDRcLA-0>)
- Plan: [plan](https://docs.google.com/document/d/1KKlErwZB6m8S8wv01re003T2ni5m2c0454AYpoL_2TU/edit#)

### Targets

- Using React hooks

### Requirements

- [Practice two of ReactJS](https://docs.google.com/document/d/13VDmajtXccKR0im4q76tqtVmeEiByFmfZ_V8F9Q6bnw/edit)

### Information

- Timeline
  - Estimate day: 9 days
  - Actual day: 16 days
- Techniques Stack:
  - [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)/[CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - [JavaScript](https://www.w3schools.com/js/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [ReactJS](https://reactjs.org/)
  - [Storybook](https://storybook.js.org/)
- Development Tools:
  - [Vite](https://vitejs.dev/)
  - [Eslint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
- Editor: Visual Studio Code.

### Main App Features:

- User can view products
- Filter products:
  - By name
  - By status
  - By type
  - By quantity
  - By brand
  - By price
- Edit products
- Delete products

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
  - `$ git checkout feat/practice-two-react`
- Step 4: `cd  react/practice-two`
- Step 5: Now you need to install packages
  - `$ pnpm i`
- Step 6:
  - To see website run: `$ pnpm run dev`
  - To see Storybook run: `$ pnpm run storybook`
- Step 7:
  - http://127.0.0.1:5173/ to see the website
  - http://localhost:6006 to see Storybook

### Note

- If you get errors about using pnpm to run Storybook
- Try to add `node-linker=hoisted` to `.npmrc` file. After that remove all the storybook in project or clone and run project again

### Secrets

- Create file .env has the same level as .env.example. After that, please contact me to get the key
