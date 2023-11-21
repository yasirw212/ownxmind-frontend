import React from "react";

import hatIMG from '../assets/brand/mock.png'

// Olive X Black
import greencover from '../assets/brand/greencoverphoto.png'
import olivexblack1 from '../assets/brand/olivexblack4.jpeg'
import olivexblack2 from '../assets/brand/olivexblack2.jpeg'
import olivexblack3 from '../assets/brand/olivexblack3.jpeg'
import olivexblack4 from '../assets/brand/olivexblackcover.jpeg'

// Brown X Creme
import browncover from '../assets/brand/browncoverphoto.png'
import brownxcreme1 from '../assets/brand/brownxcreme1.jpeg'
import brownxcreme2 from '../assets/brand/brownxcreme2.jpeg'
import brownxcreme3 from '../assets/brand/brownxcreme3.jpeg'
import brownxcreme4 from '../assets/brand/brownxcreme4.jpeg'

// Black X Red
import blackcover from '../assets/brand/blackcoverphoto.png'
import blackxred1 from '../assets/brand/blackxred1.jpeg'
import blackxred2 from '../assets/brand/blackxred2.jpeg'
import blackxred3 from '../assets/brand/blackxred3.jpeg'
import blackxred4 from '../assets/brand/blackxred4.jpeg'

// Red X White
import redcover from '../assets/brand/redcoverphoto.png'
import redxwhite1 from '../assets/brand/redxwhite1.jpeg'
import redxwhite2 from '../assets/brand/redxwhite2.jpeg'
import redxwhite3 from '../assets/brand/redxwhite3.jpeg'
import redxwhite4 from '../assets/brand/redxwhite4.jpeg'

// Blue X White
import bluecover from '../assets/brand/bluecoverphoto.png'
import bluexwhite1 from '../assets/brand/bluexwhite1.jpeg'
import bluexwhite2 from '../assets/brand/bluexwhite2.jpeg'
import bluexwhite3 from '../assets/brand/bluexwhite3.jpeg'
import bluexwhite4 from '../assets/brand/bluexwhite4.jpeg'

// Pink X White
import pinkcover from '../assets/brand/pinkcoverphoto.png'
import pinkxwhite1 from '../assets/brand/pinkxwhite1.jpeg'
import pinkxwhite2 from '../assets/brand/pinkxwhite2.jpeg'
import pinkxwhite3 from '../assets/brand/pinkxwhite3.jpeg'
import pinkxwhite4 from '../assets/brand/pinkxwhite4.jpeg'

// Purple X White
import purplecover from '../assets/brand/whitecoverphoto.png'
import purplexwhite1 from '../assets/brand/whitexpurple1.jpeg'
import purplexwhite2 from '../assets/brand/whitexpurple2.jpeg'
import purplexwhite3 from '../assets/brand/whitexpurple3.jpeg'
import purplexwhite4 from '../assets/brand/whitexpurple4.jpeg'

let products = [
    {
        id: 1,
        name: '"Brown x Creme"',
        price: 24.99,  
        quantityInCart: 0,
        src: hatIMG,
        productCode: "price_1MuPeJKu1s29bXsebI0lNhsF",
        photos: [brownxcreme1, brownxcreme2, brownxcreme3, brownxcreme4],
        coverPhoto: browncover,
        quantity: 10,
        type: 'hat'
    },

    {
        id: 2,
        name: '"Olive x Black"',
        price: 24.99,
        coverPhoto: greencover,
        src: hatIMG, 
        quantityInCart: 0,
        productCode: "price_1MuPdVKu1s29bXsef5KXt27e",
        photos: [olivexblack1, olivexblack2, olivexblack3, olivexblack4],
        quantity: 10
    },

    {
        id: 3,
        name: '"Black x Red"',
        price: 24.99, 
        src: hatIMG, 
        quantityInCart: 0,
        productCode: "price_1MuPazKu1s29bXsesa6tkL3H",
        coverPhoto: blackcover,
        photos: [blackxred1, blackxred2, blackxred3, blackxred4],
        quantity: 10
    },
    
    {
        id: 4,
        name: '"Red x White"',
        price: 24.99, 
        src: hatIMG, 
        quantityInCart: 0,
        productCode: "price_1MuPbMKu1s29bXsedxFlfgEp",
        coverPhoto: redcover,
        photos: [redxwhite1, redxwhite2, redxwhite3, redxwhite4],
        quantity: 10
    },

    {
        id: 5,
        name: '"Blue x White"',
        price: 24.99, 
        src: hatIMG, 
        quantityInCart: 0,
        productCode: "price_1MuPcuKu1s29bXseJJKs7bq9",
        coverPhoto: bluecover,
        photos: [bluexwhite1, bluexwhite2, bluexwhite3, bluexwhite4],
        quantity: 10
    },

    {
        id: 6,
        name: '"Pink x White"',
        price: 24.99, 
        src: hatIMG, 
        quantityInCart: 0,
        productCode: "price_1MuPbtKu1s29bXse7c1GrJpV",
        coverPhoto: pinkcover,
        photos: [pinkxwhite1, pinkxwhite2, pinkxwhite3, pinkxwhite4],
        quantity: 10
    },

    {
        id: 7,
        name: '"Purple x White"',
        price: 24.99, 
        src: hatIMG, 
        quantityInCart: 0,
        productCode: "price_1MuPdtKu1s29bXsehzfo6urO",
        coverPhoto: purplecover,
        photos: [purplexwhite1, purplexwhite2, purplexwhite3, purplexwhite4],
        quantity: 10
    }

]

export default products