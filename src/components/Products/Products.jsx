import React from 'react';
import { Grid } from "@material-ui/core";

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: "Spikes",price:'$5',image:'https://rukminim1.flixcart.com/image/800/960/shoe/j/v/f/130-yellow-blue-at-130-nivia-43-original-imaee4ghaufayyxw.jpeg?q=50' },
    { id: 2, name: 'HP Pavillion', description: "I5 256GB SSD",price:'$10',image:'https://i1.wp.com/laptopmedia.com/wp-content/uploads/2021/04/hppavilion1414-dv0000featured.jpg?ssl=1' },
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;
