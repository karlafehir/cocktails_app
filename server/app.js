import express from 'express'
import cors from 'cors'
// import bodyparser from 'body-parser'

// const express = require('express')
// const bodyparser = require('body-parser')
// const cors = require('cors')



const app = express()

app.use(express.json())
app.use(cors())
// app.use(bodyparser.json()) - zbog ovog ne radi

app.listen(8080, () => {
    console.log("Server running on port 8080");
})

import { getCocktails, getCocktail, createCocktail, getCocktailByTaste, getCocktailsCollection, getCocktailFromCollection, deleteCocktail, registerUser, loginUser} from './database.js'







app.post('/register', async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const userId = await registerUser(name, email, password);
      res.status(201).json({ userId });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'Registration failed' });
    }
  });


  app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const { userId, token } = await loginUser(email, password);
      res.json({ userId, token });
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Authentication failed' });
    }
  });
  








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

app.delete("/MyCocktailCollection/:id" , async (req, res) => {
    const id = req.params.id
    const cocktail = await deleteCocktail(id)
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


