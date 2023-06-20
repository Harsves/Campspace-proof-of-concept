// Importeer express uit de node_modules map
import * as path from 'path'
import * as dotenv from "dotenv"

import express from 'express'

dotenv.config()

const app = express()

// Serveer client-side bestanden
app.use(express.static(path.resolve('public')))

// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', function (req, res) {
    const url = `${process.env.API_URL}/spaces`
    fetchJson(url).then((data) => {
      res.render('index', data)
    })
  })

// Stel het poortnummer in waar express op gaat luisteren
app.set("port", process.env.PORT || 1301);

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get("port"), function () {
  console.log(`Application started on http://localhost:${app.get("port")}`);
});

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
 async function fetchJson(url) {
    return await fetch(url)
      .then((response) => response.json())
      .catch((error) => error)
  }
