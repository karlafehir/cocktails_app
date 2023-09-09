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

import { getRecipe, getRecipes, createRecipe } from './database.js'

app.get("/recipes" , async (req, res) => {
    const recipes = await getRecipes()
    res.send(recipes)
})

app.get("/recipes/:id" , async (req, res) => {
    const id = req.params.id
    const recipe = await getRecipe(id)
    res.send(recipe)
})

app.post("/recipes", async (req,res) => {
    const { title, description, instructions, time } = req.body
    const recipe = await createRecipe(title, description, instructions, time)
    res.status(201).send(recipe)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.header("Access-Control-Allow-Origin", "localhost:4200"); 
    res.status(500).send('Something broke!')
})


app.listen(8080, () => {
    console.log("Server running on port 8080");
})