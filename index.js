const express = require('express');
const { connectToMongoDB} = require('./connect');
const urlRoute = require('./Routes/url');
const URL = require('./models/url');

connectToMongoDB("mongodb://localhost:27017/short-url").then(() => console.log("mongoDB connected"));

const app = express();
const PORT = 8001;

app.get('/:shortId', (req,res) =>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId
        },
        {   $push :{
                visitHistory : {
                    timestamp : Dtae.now(),
                },
            },
        }
    );
    res.redirect(entry.redirectURL);
})
app.use(exress.json());

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));

