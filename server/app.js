import express from 'express'
import cors from 'cors'
// import bodyparser from 'body-parser'

// const express = require('express')
// const bodyparser = require('body-parser')
// const cors = require('cors')



const app = express()

app.use(express.json())
app.use(cors())
// app.use(bodyparser.json())

import { getCocktails, getCocktail, createCocktail, getCocktailByTaste, getCocktailsCollection, getCocktailFromCollection} from './database.js'

app.get("/cocktails" , async (req, res) => {
    const cocktails = await getCocktails()
    res.send(cocktails)
})

app.get("/MyCocktailCollection" , async (req, res) => {
    const cocktailCollection = await getCocktailsCollection()
    res.send(cocktailCollection)
})

app.get("/cocktails/:id" , async (req, res) => {
    const id = req.params.id
    const cocktail = await getCocktail(id)
    res.send(cocktail)
})

app.get("/MyCocktailCollection/:id" , async (req, res) => {
    const id = req.params.id
    const cocktail = await getCocktailFromCollection(id)
    res.send(cocktail)
})

app.get("/cocktails/:taste", async (req, res) => {
    const requestedTaste = req.params.taste.toLowerCase(); // Convert the taste parameter to lowercase for case-insensitive comparison
    const cocktailsWithRequestedTaste = await getCocktailsByTaste(requestedTaste);
    res.send(cocktailsWithRequestedTaste);
});

app.post("/MyCocktailCollection", async (req,res) => {
    const { title, taste, description, instructions } = req.body
    const cocktails = await createCocktail(title, taste, description, instructions)
    res.status(201).send(cocktails)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.header("Access-Control-Allow-Origin", "localhost:4200"); 
    res.status(500).send('Something broke!')
})


app.listen(8080, () => {
    console.log("Server running on port 8080");
})