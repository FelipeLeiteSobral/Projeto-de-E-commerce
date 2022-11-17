import React from 'react'

const Banner = () => {
  return (
    
    <div className='w-screen'>
      {/* Carrossel com banners*/}
      {/* Trocar overflow por função mais correta */}
      <div className='overflow-x-auto flex'>
      <img type="image/.png" src="https://i.ibb.co/t47VKHv/Banner-Produtos.png" alt="Banner de produtos que você pode encontrar na nossa loja" className='hidden sm:flex w-full' />
      <img type="image/.png" src="https://i.ibb.co/r3hrTQn/Mobile-Banner-Produtos.png" alt="Banner de produtos que você pode encontrar na nossa loja" className='sm:hidden flex w-full' />
      <img type="image/.png" src="https://i.ibb.co/SQV9w0M/Banner-Frete-Gratis.png" alt="Banner de produtos que você pode encontrar na nossa loja" className='hidden sm:flex w-full' />
      <img type="image/.png" src="https://i.ibb.co/yNmyVVH/Mobile-Banner-Frete-Gratis.png" alt="Banner de produtos que você pode encontrar na nossa loja" className='sm:hidden flex w-full' />
      <img type="image/.png" src="https://i.ibb.co/3dQ66qd/Banner-Desconto.png" alt="Banner de produtos que você pode encontrar na nossa loja" className='hidden sm:flex w-full' />
      </div>
   </div>
  )
}

export default Banner