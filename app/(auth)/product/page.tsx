import Image from "next/image"
import ImageBg from '@/public/product/bgproduct.webp'

export default function product() {
    return (


        <section className="">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
  <div className="pt-32 pb-12 md:pt-40 md:pb-20 relative">
    <div className="hero" style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Image 
        src={ImageBg} 
        alt="Hero Image" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          objectPosition: 'center', 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          zIndex: -1 
        }} 
      />
      <div style={{ position: 'absolute', top: '20px', left: '20px', color: 'black', zIndex: 1 }}>
        blablablabla
      </div>
    </div>
  </div>
</div>

        <div style={{ display: 'grid-item', flexWrap: 'wrap', justifyContent: 'space-around', padding: '80px 0' }}>
            <h1 className="font-bold text-4xl" style={{ width: '100%', textAlign: 'center' }}>Our Products</h1>
            <p style={{ width: '100%', textAlign: 'center' }}>Here are some of our best products</p>
            
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                <div style={{ width: '45%', margin: '2.5%', border: '0 px', borderRadius: '10px', padding: '10px', display: 'grid', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3) '}}>
                    <img className='rounded-xl' src="/images-product/Learning-Services-Square.jpg" alt="Product 1" style={{ marginRight: '5px' }} />
                    <div>
                        <h2 className="text-center font-sans font-semibold mt-2 mb-2 ">EXPERT Q&A</h2>
                        <p className="font-sans text-justify">Understand assignments with expert help. Ask your tough questions to a subject expert. </p>
                    </div>
                </div>
                <div style={{ width: '45%', margin: '2.5%', border: '0 px', borderRadius: '10px', padding: '10px', display: 'grid', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)'}}>
                    <img className='rounded-xl' src="/images-product/textbook.png" alt="Product 2" style={{ marginLeft: '5px' }} />
                    <div>
                        <h2 className="text-center font-sans font-semibold mt-2 mb-2 ">TEXTBOOK SOLUTIONS</h2>
                        <p className="font-sans text-justify">With Textbook Solutions, you can understand step by step how to solve tough problems.</p>
                    </div>
                </div>
                <div style={{ width: '45%', margin: '2.5%', border: '0 px', borderRadius: '10px', padding: '10px', display: 'grid', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)' }}>
                    <img className='rounded-xl' src="/images-product/math-solver.png" alt="Product 3" style={{ marginRight: '10px' }} />
                    <div>
                        <h2 className="text-center font-sans font-semibold mt-2 mb-2 ">MATH SOLVER</h2>
                        <p className="font-sans text-justify">Our solver does what a calculator won’t: breaking down key steps into smaller sub-steps to show you every part of the solution.</p>
                    </div>
                </div>
                <div style={{ width: '45%', margin: '2.5%', border: '0 px', borderRadius: '10px', padding: '10px', display: 'grid', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)' }}>
                    <img className='rounded-xl' src="/images-product/img-work-cited.png" alt="Product 4" style={{ marginLeft: '10px' }} />
                    <div>
                        <h2 className="text-center font-sans font-semibold mt-2 mb-2 ">CITATIONS</h2>
                        <p className="font-sans text-justify">Create citations for your assignments from STEM to Art—with thousands of free styles including APA, MLA, Chicago, and Harvard.</p>
                    </div>
                    
                </div>
            </div>
        </div>
        </section>

    )
}