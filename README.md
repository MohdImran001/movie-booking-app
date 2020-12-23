# svelte movie booking app

Movie seat booking app made with Svelte.js. It consists of three components (movies, seats-booking, e-ticket). All the movies and their details are stored in svelte.js readable store. Movies component fetches the movies from svelte store. When a movie is clicked the id of that movie is passed to the seats-booking component. The user choose the desired seats and when seat is selected or deselected, the total amount also changes simultaneously. On clicking the checkout button the e-ticket component is mounted which show the ticket with all information and also generates the pdf using html2pdf (https://www.npmjs.com/package/html2pdf.js/v/0.9.0).

While working on this project, I learned about svelte modules, hooks (onMount and onDestroy), transitions, reactive values, local storage, stores etc.

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

## Get started

Clone the app and Install the dependencies...

```bash
npm install
```

...then start webpack:

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see the app running.
