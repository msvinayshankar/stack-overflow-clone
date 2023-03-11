import express from "express"
import mongoose from "mongoose"
import cors from "cors"

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'

const app = express();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/',(req, res) => {
    res.send("This is a stack overflow clone API")
})
app.use('/user', userRoutes)
app.use('/questions', questionRoutes)

const PORT = process.env.PORT || 5000

const DATABASE_URL = "mongodb+srv://msvinayshankar:Qwertyuiop12@stack-overflow-clone.mcey0pc.mongodb.net/?retryWrites=true&w=majority"
mongoose.set("strictQuery", true);

mongoose.connect( DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err))

