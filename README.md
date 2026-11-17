# Shopping Assistant

A small Next.js demo that shows how a React page requests product suggestions from an API. Select **Get Recommendations** to display three sample items: Laptop, Smartphone, and Headphones.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## How it works

[The home page](pages/index.js) sends a POST request to `/api/recommend`. [The API handler](pages/api/recommend.js) returns a fixed list of products. The page displays the response beneath the button.
