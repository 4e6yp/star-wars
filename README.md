
# Star Wars SPA with React and TypeScript
This project aims to build a single-page application (SPA) using React and TypeScript, utilizing the Star Wars API (https://swapi.dev/) as the data source. The application will consist of two main pages:

## Homepage:

* Display a list of Star Wars characters using cards or a list view.
* Implement pagination to navigate through the extensive character list.
* Integrate a search feature that utilizes the API to filter characters based on user input.

## Character Detail Page:

* Upon selecting a character from the homepage, display a detailed page with comprehensive information about the chosen character.
* Enable editing capabilities for the character information, allowing users to modify and save the details locally.
  * Note that changes will not be persisted to the Star Wars API and are stored locally within the application.

## Technology Stack:
* Frontend:
* React
* TypeScript
* https://swapi.dev/ (Star Wars API)
* UI Framework - Mantine.dev

# Scripts

- `pnpm dev` - start a development server with hot reload.
- `pnpm build` - build for production. The generated files will be on the `dist` folder.
- `pnpm preview` - locally preview the production build.
- `pnpm test` - run unit and integration tests related to changed files based on git.
- `pnpm test:ci` - run all unit and integration tests in CI mode.
- `pnpm format` - format all files with Prettier.
- `pnpm lint` - runs TypeScript, ESLint and Stylelint.
- `pnpm validate` - runs `lint`, `test:ci` and `test:e2e:ci`.
