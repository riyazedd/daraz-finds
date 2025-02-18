import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import axios from 'axios'
import * as cheerio from 'cheerio';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
 const port=process.env.PORT || 3000

connectDB();

const app =express();
app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


app.get('/',(req,res)=>{
    res.send('Api is running');
})

app.use('/api/products', productRoutes);
app.use('/api/category', categoryRoutes);

// Endpoint to scrape product image
app.get('/scrape-image', async (req, res) => {
    const { url } = req.query; // Get the product URL from the query parameter

    if (!url) {
        return res.status(400).json({ error: 'Product URL is required' });
    }

    try {
        // Fetch the product page
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        // console.log(response.data);
        // Find the image URL (update the selector based on Daraz's structure)
        const imageUrl = $('img.pdp-mod-common-image').attr('src'); // Replace with the correct selector

        if (imageUrl) {
            res.json({ imageUrl });
        } else {
            res.status(404).json({ error: 'Image not found' });
        }
    } catch (error) {
        console.error('Error scraping image:', error);
        res.status(500).json({ error: 'Failed to scrape image' });
    }
});

app.listen(port ,(err)=>{
    if(err){
        console.error('Error starting server:'+err.message)
    }else{
        console.log('Server running on port:'+port)
    }
})