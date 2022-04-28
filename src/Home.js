import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
          <img 
          className='home_image'
          src="https://tse4.mm.bing.net/th?id=OIP.KKFwwCJSPkVw40ArlYt-ZQHaD4&pid=Api&P=0&w=274&h=143"
          alt=""
        />
        <div className='home_row'>
           <Product 
           id="12345"
           title='Paddy'
           price={19.9}
           image='https://tse3.mm.bing.net/th?id=OIP.sVPEL7J40T8QA8poHmNCWAHaHa&pid=Api&P=0&w=148&h=148'
            rating={5}/>

           <Product 
           id="6789"
           title ='Wheat'
           price={20}
           image='https://gumlet.assettype.com/freepressjournal/2021-03/740ee5c5-5079-4938-80f9-3c0d8b32ddd1/Bhopal_wheat.jpg?format=webp&w=400&dpr=2.6'
           rating={4}
           />
        </div>
        <div className='home_row'>
           <Product
           id = "4201"
           title ='Pulses'
           price ={100}
           image='https://5.imimg.com/data5/EP/GW/KC/SELLER-3277670/pulses-500x500.jpg'
           rating={5}
           />
           <Product
           id ="1234"
           title='Green Vegetables'
           price={50}
           rating={4}
           image ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQR5jnrIOCUtl46FYrLop20fh2mD-0xj1rg&usqp=CAU'
           />
           <Product
           id ="4321"
           title ='Vegetables'
           price={45}
           rating={4}
           image='https://cdn.mos.cms.futurecdn.net/XM8scaSf7gWsiN9jjowikf-320-80.jpg'
           />
        </div>
        <div className='home_row'>
            <Product
            id = "56785"
            title = 'Fruits'
            price = {60}
            rating={4}
            image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg'
            />
        </div>
      </div>
    </div>
    );
};

export default Home;