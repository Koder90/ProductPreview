import Image from 'next/image'
import imageProduct from '../public/image-product-desktop.jpg';

export default function Home() {
    return (
        <div className='container'>
            <div className='image-wrapper'>
                <Image src={imageProduct}
                    width={600}
                    height
                    ={1050}/></div>

            <div className='content'>
                <p className='small-title'>PERFUME</p>
                <p className='title'>Gabrielle Eessence Eau De Parfum</p>
                <p className='description'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of Chanel</p>
                <div className='price-container'>
                    <p style={{fontSize:"25px", marginBottom:"10px", marginTop:"13px", color:"rgb(80, 146, 80)", fontFamily:"trebuchet, sans-serif"}} className='price'>$149.99</p>
                    <p style={{textDecoration: "line-through"}}>$169.99</p>
                </div>
                <button className='button'>Add to Cart</button>
            </div>
        </div>
    )
}
