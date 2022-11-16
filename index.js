import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import users from "./src/routes/users.js";
import category from "./src/routes/category.js";
import product from "./src/routes/product.js";
import roles from "./src/routes/roles.js";
import telecom from "./src/routes/telecom.js";
import userProduct from "./src/routes/userProduct";
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 5000;

const URI = 'mongodb+srv://huy:123456@environmentgreen.o5stu1v.mongodb.net/?retryWrites=true&w=majority';

app.use(bodyParser.json({ limit: "30mb" }))
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.get('/users', users);
app.get('/category', category);
app.get('/product', product);
app.get('/rolrs', roles);
app.get('/telecom', telecom);
app.get('/userProduct', userProduct);

mongoose.connect(URI, { useNewUrlParser: true, useUnifedTopology: true })
    .then(() => {
        console.log('Connect to DB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }).catch((err) => {
        console.log('err', err);
    })
