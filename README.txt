Jangan lupa install semua yang ada disini agar react dapat berjalan dengan lancar

01. EXEC npm install prop-types
02. EXEC npm install react-router-dom
03. EXEC npm install react-icons
04. EXEC npm install --save-dev eslint < NAMA ESLINT NYA >
05. EXEC npm install @reduxjs/toolkit
06. EXEC npm install react-redux
07. EXEC npm install react-redux-loading-bar
NOTE:
- No. 03 :
  + Bersifat tentative
- No. 04 :
  + Pada dalam kurung berarti value variable, tapi biasanya udah otomatis terinstall kalau pakai vite

< OPTIONAL (testing purposes) >
01. npm install vitest --save-dev
02. npm install jsdom --save-dev
03. npm install @testing-library/react@14 @testing-library/user-event@14 @testing-library/jest-dom@5 --save-dev
04. npm install cypress --save-dev
05. npm install eslint-plugin-cypress --save-dev
06. npn cypress open [ untuk config pertama kali proyek ]
07. npm install start-server-and-test --save-dev

NOTE:
- No. 01 :
  + Jangan lupa untuk menambah {"type": "module"} di config
  + Jangan lupa menambah script {"test": "vitest"} agar bisa npm run test
- No. 02 :
  + Pada vite.config.js tambahkan:
    test: {
      environment: 'jsdom',
    },
- No. 04 :
  + Jangan lupa menambah script {"e2e": "cypress run"} agar bisa npm run e2e
- No. 05 :
  + Jangan lupa menambah pluginCypress.configs.recommended
