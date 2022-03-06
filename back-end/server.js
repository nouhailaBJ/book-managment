// require the env config
require('dotenv').config()

// connect to  mongoose db
require('./config/db')

// import the routers
const userRouter = require('./routes/user.routes')
const contactRouter = require('./routes/contact.routes')
const faqRouter = require('./routes/faq.routes')
const restaurantRouter = require('./routes/restaurant.routes')
const cityRouter = require('./routes/cities.routes')
const { checkUser, requireAuth } = require('./middleware/auth.middleware')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// config of express
const express = require('express')
const app = express()

// parse request
app.use(express.json())
app.use(express.urlencoded({
    extended: true    
}))

// let’s you use the cookieParser in our app
app.use(cookieParser());
const corsOptions = {
    origin: process.env.CLIENT_API_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}
app.use(cors(corsOptions))

// jwt : check all route with middleware user
app.get('*', checkUser)
app.get('/api/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
});

app.use('/api/user', userRouter)
app.use('/api/contact', contactRouter)
app.use('/api/faqs', faqRouter)
app.use('/api/restaurants', restaurantRouter)
app.use('/api/city', cityRouter)

// listining in the port
app.listen(process.env.PORT || 5000, () => {
    console.log(`Listening on ${process.env.PORT}`)
})