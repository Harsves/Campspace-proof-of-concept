// Importeer express uit de node_modules map
import * as path from 'path'
import * as dotenv from "dotenv"

import express from 'express'

dotenv.config()

// Serveer client-side bestanden
app.use(express.static(path.resolve('public')))

// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', function (req, res) {
    res.render('index')
  })