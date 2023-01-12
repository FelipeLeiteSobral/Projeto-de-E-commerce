import React from 'react'

const Features = () => {
  return (
<div className='w-screen flex-col items-center justify-center bg-rwhitelight'>
                                                              {/* Ofertas em destaque */}
  <h1 className='text-3xl font-graduate font-semibold pt-14 text-center text-rorange'>ofertas em destaque</h1>
                                                                {/* Produtos */}
  <div className='w-full flex items-center justify-center container justify-center lg:justify-evenly lg:space-x-10 lg:flex-nowrap flex-wrap py-6'>
      {/* Produto 1 */}
      <div className="bg-white my-2 border-2 border-rorange lg:w-1/3 md:w-2/5 w-full rounded-2xl hover:border-rblue hover:-translate-y-3 hover:drop-shadow-md transition ease-in-out duration-700 relative text-rblue hover:text-rorange px-3 mx-2">
        <div className='absolute top-2 left-3 -space-y-2'>
          <i className='rounded-lg bg-white pr-2'>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
          </i>
          <p className='text-rblack'>(315)</p>
        </div>
        <i className='absolute right-3 top-2 text-xl text-red-700'><ion-icon name="heart-outline"></ion-icon></i>
        <a href="">
          <img src="https://images.kabum.com.br/produtos/fotos/381278/smart-tv-multilaser-32-hd-hdmi-usb-wifi-e-android-integrado-google-assistente-tl042_1663084561_gg.jpg" alt="teclado" className='mt-3 object-cover max-h-96 lg:max-h-64 w-full'/>
          <div className='bg-white pt-28'></div>
        </a>
        <h3 className='text-center absolute bottom-20 font-gemunu text-rblackdark font-semibold text-lg pr-3'>Smart TV Multi 32 Polegadas HD, HDMI e Android Integrado</h3>
        <div className='flex w-full items-end'>
          <div className='absolute left-4 bottom-3 -space-y-2'>
            <p className='text-rblack font text-md'><s>R$ 2789,90</s></p>
            <p className='text-rorange font-bold text-2xl'>R$ 2199,90</p>
          </div>
          <a href="" className='flex items-center absolute bottom-3 right-4 px-2 bg-rblue rounded-md text-md lg:text-lg text-rwhitelight font-bold font-gemunu tracking-wide'>
            <i className='mr-2 text-xl mt-1 text-rorange'>
            <ion-icon name="cart"></ion-icon>
            </i>
            | &nbsp; COMPRAR
          </a>
        </div>
      </div>
      {/* End Produto 1 */}
      {/* Produto 2 */}
      <div className="items-center bg-white my-2 border-2 border-rorange lg:w-1/3 md:w-2/5 w-full rounded-2xl hover:border-rblue hover:-translate-y-3 hover:drop-shadow-md transition ease-in-out duration-700 relative text-rblue hover:text-rorange px-3 mx-2">
        <div className='absolute top-2 left-3 -space-y-2'>
          <i className='rounded-lg bg-white pr-2'>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
          </i>
          <p className='text-rblack'>(84)</p>
        </div>
        <i className='absolute right-3 top-2 text-xl text-red-700'><ion-icon name="heart-outline"></ion-icon></i>
        <a href="">
          <img src="https://images.kabum.com.br/produtos/fotos/357660/placa-de-video-msi-nvidia-geforce-rtx-2060-ventus-gp-oc-6gb-gddr6-ray-tracing-geforce-rtx-2060-ventus-gp-oc_1656354647_gg.jpg" alt="Headset" className='mt-3 object-cover max-h-96 w-full lg:max-h-64'/>
          <div className='bg-white pt-28'></div>
        </a>
        <h3 className='text-center absolute bottom-20 font-gemunu text-rblackdark font-semibold text-lg pr-3'>Placa de Vídeo RTX 2060 Ventus GP OC MSI 6GB GDDR6</h3>
        <div>
          <div className='absolute left-4 bottom-3 -space-y-2'>
            <p className='text-rblack font text-md'><s>R$ 2049,90</s></p>
            <p className='text-rorange font-bold text-2xl'>R$ 1499,90</p>
          </div>
          <a href="" className='flex items-center absolute bottom-3 right-4 px-2 bg-rblue rounded-md text-md lg:text-lg text-rwhitelight font-bold font-gemunu tracking-wide'>
            <i className='mr-2 text-xl mt-1 text-rorange'>
            <ion-icon name="cart"></ion-icon>
            </i>
            | &nbsp; COMPRAR
          </a>
        </div>
      </div>
      {/* End Produto 2 */}
      {/* Produto 3 */}
      <div className="bg-white my-2 border-2 border-rorange lg:w-1/3 md:w-2/5 w-full rounded-2xl hover:border-rblue hover:-translate-y-3 hover:drop-shadow-md transition ease-in-out duration-700 relative text-rblue hover:text-rorange px-3 mx-2">
        <div className='absolute top-2 left-3 -space-y-2'>
          <i className='rounded-lg bg-white pr-2'>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-half-outline"></ion-icon>
          </i>
          <p className='text-rblack'>(235)</p>
        </div>
        <i className='absolute right-3 top-2 text-xl text-red-700'><ion-icon name="heart-outline"></ion-icon></i>
        <a href="">
          <img src="https://images.kabum.com.br/produtos/fotos/62396/teclado-multilaser-slim-laser-resistente-a-agua-abnt2-tc193_1661978012_gg.jpg" alt="teclado" className='mt-3 object-cover max-h-96 w-full lg:max-h-64'/>
          <div className='bg-white pt-28'></div>
        </a>
        <h3 className='text-center absolute bottom-20 font-gemunu text-rblackdark font-semibold text-lg pr-3'>Teclado Multi Slim Laser Resistente à Água ABNT2 - TC193</h3>
        <div>
          <div className='absolute left-4 bottom-3 -space-y-2'>
            <p className='text-rblack font text-md'><s>R$ 68,90</s></p>
            <p className='text-rorange font-bold text-2xl'>R$ 21,90</p>
          </div>
          <a href="" className='flex items-center absolute bottom-3 right-4 px-2 bg-rblue rounded-md text-md lg:text-lg text-rwhitelight font-bold font-gemunu tracking-wide'>
            <i className='mr-2 text-xl mt-1 text-rorange'>
            <ion-icon name="cart"></ion-icon>
            </i>
            | &nbsp; COMPRAR
          </a>
        </div>
      </div>
      {/* End Produto 3 */}
  </div>
  
                                                              {/* Mais vendidos */}
  <h1 className='text-3xl font-graduate font-semibold pt-14 text-center text-rorange'>mais vendidos</h1>
                                                                {/* Produtos */}
  <div className='w-full flex items-center justify-center container justify-center lg:justify-evenly lg:space-x-10 lg:flex-nowrap flex-wrap py-6'>
      {/* Produto 1 */}
      <div className="items-center bg-white my-2 border-2 border-rorange lg:w-1/3 md:w-2/5 w-full rounded-2xl hover:border-rblue hover:-translate-y-3 hover:drop-shadow-md transition ease-in-out duration-700 relative text-rblue hover:text-rorange px-3 mx-2">
        <div className='absolute top-2 left-3 -space-y-2'>
          <i className='rounded-lg bg-white pr-2'>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
          </i>
          <p className='text-rblack'>(990)</p>
        </div>
        <i className='absolute right-3 top-2 text-xl text-red-700'><ion-icon name="heart-outline"></ion-icon></i>
        <a href="">
          <img src="https://images.kabum.com.br/produtos/fotos/109815/mouse-razer-deathadder-v2-20-000-dpi-rz01-03210100-r3u1_1580480290_gg.jpg" alt="teclado" className='mt-3 object-cover max-h-96 lg:max-h-64 w-full'/>
          <div className='bg-white pt-28'></div>
        </a>
        <h3 className='text-center absolute bottom-20 font-gemunu text-rblackdark font-semibold text-lg pr-3'>Mouse Gamer Razer Deathadder V2 Chroma</h3>
        <div>
          <div className='absolute left-4 bottom-3 -space-y-2'>
            <p className='text-rblack font text-md'><s>R$ 139,90</s></p>
            <p className='text-rorange font-bold text-2xl'>R$ 99,90</p>
          </div>
          <a href="" className='flex items-center absolute bottom-3 right-4 px-2 bg-rblue rounded-md text-md lg:text-lg text-rwhitelight font-bold font-gemunu tracking-wide'>
            <i className='mr-2 text-xl mt-1 text-rorange'>
            <ion-icon name="cart"></ion-icon>
            </i>
            | &nbsp; COMPRAR
          </a>
        </div>
      </div>
      {/* End Produto 1 */}
      {/* Produto 2 */}
      <div className="bg-white my-2 border-2 border-rorange lg:w-1/3 md:w-2/5 w-full rounded-2xl hover:border-rblue hover:-translate-y-3 hover:drop-shadow-md transition ease-in-out duration-700 relative text-rblue hover:text-rorange px-3 mx-2">
        <div className='absolute top-2 left-3 -space-y-2'>
          <i className='rounded-lg bg-white pr-2'>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
          </i>
          <p className='text-rblack'>(832)</p>
        </div>
        <i className='absolute right-3 top-2 text-xl text-red-700'><ion-icon name="heart-outline"></ion-icon></i>
        <a href="">
          <img src="https://images.kabum.com.br/produtos/fotos/353745/barra-de-led-para-monitor-pcyes-plmlcb01-447x85mm-regulagem-touch-usb-preto-111552_1654801292_gg.jpg" alt="Headset" className='mt-3 object-cover max-h-96 w-full lg:max-h-64'/>
          <div className='bg-white pt-28'></div>
        </a>
        <h3 className='text-center absolute bottom-20 font-gemunu text-rblackdark font-semibold text-lg pr-3'>Barra de LED para Monitor Pcyes PLMLCB01, 447x85mm, Regulagem Touch, USB, Preto</h3>
        <div>
          <div className='absolute left-4 bottom-3 -space-y-2'>
            <p className='text-rblack font text-md'><s>R$ 349,90</s></p>
            <p className='text-rorange font-bold text-2xl'>R$ 199,90</p>
          </div>
          <a href="" className='flex items-center absolute bottom-3 right-4 px-2 bg-rblue rounded-md text-md lg:text-lg text-rwhitelight font-bold font-gemunu tracking-wide'>
            <i className='mr-2 text-xl mt-1 text-rorange'>
            <ion-icon name="cart"></ion-icon>
            </i>
            | &nbsp; COMPRAR
          </a>
        </div>
      </div>
      {/* End Produto 2 */}
      {/* Produto 3 */}
      <div className="bg-white my-2 border-2 border-rorange lg:w-1/3 md:w-2/5 w-full rounded-2xl hover:border-rblue hover:-translate-y-3 hover:drop-shadow-md transition ease-in-out duration-700 relative text-rblue hover:text-rorange px-3 mx-2">
        <div className='absolute top-2 left-3 -space-y-2'>
          <i className='rounded-lg bg-white pr-2'>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
          </i>
          <p className='text-rblack'>(571)</p>
        </div>
        <i className='absolute right-3 top-2 text-xl text-red-700'><ion-icon name="heart-outline"></ion-icon></i>
        <a href="">
          <img src="https://images.kabum.com.br/produtos/fotos/334039/notebook-asus-amd-ryzen-5-3500u-8gb-ram-ssd-256gb-15-6-radeon-vega-8-windows-11-home-cinza-m515da-br1213w_1651244602_gg.jpg" alt="teclado" className='mt-3 object-cover max-h-96 w-full lg:max-h-64'/>
          <div className='bg-white pt-28'></div>
        </a>
        <h3 className='text-center absolute bottom-20 font-gemunu text-rblackdark font-semibold text-lg pr-3'>Notebook Asus AMD Ryzen 5-3500U, 8GB RAM, SSD 256GB, 15,6', Radeon Vega 8</h3>
        <div>
          <div className='absolute left-4 bottom-3 -space-y-2'>
            <p className='text-rblack font text-md'><s>R$ 3149,90</s></p>
            <p className='text-rorange font-bold text-2xl'>R$ 2349,90</p>
          </div>
          <a href="" className='flex items-center absolute bottom-3 right-4 px-2 bg-rblue rounded-md text-md lg:text-lg text-rwhitelight font-bold font-gemunu tracking-wide'>
            <i className='mr-2 text-xl mt-1 text-rorange'>
            <ion-icon name="cart"></ion-icon>
            </i>
            | &nbsp; COMPRAR
          </a>
        </div>
      </div>
      {/* End Produto 3 */}
  </div>
</div>
  )
}

export default Features