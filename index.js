import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import users from "./src/routes/users.js";
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 5000;

const URI = 'mongodb+srv://huy:123456@environmentgreen.o5stu1v.mongodb.net/?retryWrites=true&w=majority';

app.use(bodyParser.json({ limit: "30mb" }))
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.get('/users', users);

mongoose.connect(URI, { useNewUrlParser: true, useUnifedTopology: true })
    .then(() => {
        console.log('Connect to DB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }).catch((err) => {
        console.log('err', err);
    })
