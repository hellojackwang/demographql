# demographql
This is a simple example of GraghQL

1. npm init -y
2. npm intsall loadash
3. Add "dev": "node app.js" to package.json.
4. npm run dev
5. Navigate to http://localhost:2020/graphql, and input query below in the left box then click "Play" button. You should see the response in the right box.

{
  country(id: 1) {
    name
    capital
  }
}
