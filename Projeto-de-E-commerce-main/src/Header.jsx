import React from 'react'

const Header = () => {
  return (
    <header className='w-screen'>
                                                            {/* Header */}
        <div className="bg-rorange shadow-sm w-full">
          <div className="container h-30 flex w-full items-center p-3 lg:space-x-6 font-gemunu">
                                                            {/* Logo */}
            <a href="#" className='min-w-[60px]'>
              <img src="https://i.ibb.co/L5ySk2H/RoboBN.png" alt="logo " className='w-[110px] drop-shadow-sm' />
            </a>
                                                            {/* End Logo */}
                                                            {/* Header container */}
            <div className="flex-col w-full">
              <div className='flex self-center w-full space-x-2 text-rblack'>
                                                            {/* Menu */}
                <a href='#' className='items-center flex text-3xl drop-shadow-md pl-[11px]'>
                  <ion-icon name="reorder-four"></ion-icon>
                                                            {/* End Menu */}
                </a>
                                                            {/* Search bar */}
                <div className='flex w-full items-start drop-shadow-md'>
                  <input type="text" placeholder="Busque produtos, marcas e muito mais..." className='pl-3 rounded-l-full py-1 w-full text-sm focus:outline-none h-8'/>
                  <button className='rounded-r-full bg-rwhite justify-center items-center flex h-8 px-2 text-2xl hover:bg-rwhitelight transition ease-in duration-350'>
                    <ion-icon name="search"></ion-icon>
                  </button>
                </div>
                                                            {/* End Search bar */}
                                                            {/* Icons */}
                  <ul className='flex items-center space-x-2 text-3xl'>
                    <li>
                      <a href='#' className='flex items-center relative drop-shadow-md'>
                        <ion-icon name="heart"></ion-icon>
                        <span className='absolute right-0 -bottom-1 w-[14px] h-[14px] rounded-full flex items-center justify-center bg-rblue text-rwhite text-xs'>2</span>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='flex items-center relative drop-shadow-md'>
                        <ion-icon name="bag-handle"></ion-icon>
                        <span className='absolute right-0 -bottom-1 w-[14px] h-[14px] rounded-full flex items-center justify-center bg-rblue text-rwhite text-xs'>3</span>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='flex items-center relative drop-shadow-md'>
                        <ion-icon name="chatbubble-ellipses"></ion-icon>
                        <span className='absolute right-0 -bottom-1 w-[14px] h-[14px] rounded-full flex items-center justify-center bg-rblue text-rwhite text-xs'>7</span>
                      </a>
                    </li>
                  </ul>            
                                                            {/* End Icons */}
              </div>
                                                            {/* Categorias, Cadastro e Location */}
                <div className=' text-lg text-rblack w-full justify-end flex pt-3 space-x-2 leading-5 items-center'>
                  
                  <a className=' flex items-center md:text-4xl text-3xl text-rwhitelight'>
                    <ion-icon name="location"></ion-icon>
                  </a>
                  <a href="#" className='py-2 rounded-md text-rblackdark font-medium items-center md:text-xl sm:text-lg text-sm leading-[12px] whitespace-nowrap'>
                  Procure por ofertas <br /> <span className='font-bold hover:underline'> próximas a você! </span>
                  </a>
                  <div className='w-full'></div>
                  <a href="#" className='md:text-5xl text-4xl flex items-center text-rwhitelight'>
                    <ion-icon name="person-circle-outline"></ion-icon>
                  </a>
                  <p href="#" className='font-bold md:text-xl sm:text-lg text-sm leading-[12px] text-rblackdark whitespace-nowrap'>
                    <a href="" className='hover:underline text-rblackdark'>Login</a><span className='font-medium hover:uderline-none'> ou <br /> crie seu </span> <a href="#" className='hover:underline text-rblackdark'>Cadastro</a>
                  </p>    
                </div>
                                                            {/* End Cadastro e Location */}
            </div>
                                                            {/* End Header container */}
          </div>
        </div>
                                                            {/* Navigation */}
      <div className='w-full bg-rblue flex justify-center md:hidden items-center'>
        <a href="#" className='text-rwhite text-xs drop-shadow-md'>
          <ion-icon name="caret-down-outline"></ion-icon>
        </a>
      </div>
      <div className='py-1 bg-rblue font-gemunu font-bold text-rwhite hidden md:flex border-2 border-rwhite'>
        <nav className='container flex items-center'>
          <ul className='flex w-full space-x-2 justify-around'>
            <p> ||</p>
            <li className='hover:text-rblue drop-shadow-md hover:bg-rbluelight w-full flex justify-center rounded'><a href="#">DEPARTAMENTOS</a></li>
            <p> ||</p>
            <li className='hover:text-rblue drop-shadow-md hover:bg-rbluelight w-full flex justify-center rounded'><a href="#">LANÇAMENTOS</a></li>
            <p> ||</p>
            <li className='hover:text-rblue drop-shadow-md hover:bg-rbluelight w-full flex justify-center rounded'><a href="#">PC GAMER</a></li>
            <p> ||</p>
            <li className='hover:text-rblue drop-shadow-md hover:bg-rbluelight w-full flex justify-center rounded'><a href="#">ELETRÔNICOS</a></li>
            <p> ||</p>
            <li className='hover:text-rblue drop-shadow-md hover:bg-rbluelight w-full flex justify-center rounded'><a href="#">OFERTA DO DIA</a></li>
            <p> ||</p>
          </ul>
        </nav>
      </div>
                                                            {/* End Navigation */}
                                                            {/* End Header */}
    </header>
  )
}

export default Header