import React from 'react'

const Footer = () => {
  return (
    <div className='w-screen'>
        <footer className='w-full p-10 bg-rblue md:flex'>
            {/*col-1*/}
            <div className='w-full container px-2'>            
                {/*Newsletter*/}
                <div className="w-full md:pr-4">
                    <label htmlFor="Newsletter" className='font-gemunu tracking-wide font-semibold text-lg text-white flex start'>Newsletter</label>
                    <div className='items-center flex pt-2'>
                        <input type="email" id="Newsletter" placeholder='exemplo@gmail.com' className='outline-none rounded-l-lg h-8 px-1 w-full md:w-auto' />
                        <button className='bg-rblack rounded-r-lg px-2 font-gemunu gemunu tracking-wide text-white font-semibold h-8 hover:bg-rorange hover:text- transition ease-in duration-350'>OK</button>
                    </div>
                </div>
                {/* End Newsletter */}
                {/* Mídias Sociais */}
                <div className='w-full md:pr-4 pt-6'>
                    <h4 className='font-gemunu tracking-wide font-semibold text-lg text-white flex start'>Mídias Sociais</h4>
                    <div className='text-3xl space-x-2 pt-2'>
                        <a href='#' className='text-[#fff]'>
                            <ion-icon  on-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a href='#' className='text-[#fff]'>
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                        <a href='#' className='text-[#fff]'>
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                        <a href='#' className='text-[#fff]'>
                            <ion-icon name="logo-tiktok"></ion-icon>
                        </a>
                        <a href='#' className='text-[#fff]'>
                            <ion-icon name="logo-youtube"></ion-icon>
                        </a>
                    </div>
                </div>
                {/* End Mídias Sociais */}
            </div>
                {/* End col-1 */}
                {/* col-2 */}
            <div className='w-full container px-2'>
                <h4 className='font-gemunu tracking-wide font-semibold text-lg text-white pb-3'>Novidades e Promoções</h4>
                <ul className='space-y-[16px] leading-[0px]'>
                    <li><a href="#" className='font-poppins text-xs text-rblackdark hover:text-rwhite '>Black Friday</a></li>
                    <li><a href="#" className='font-poppins text-xs text-rblackdark hover:text-rwhite '>Openbox</a></li>
                    <li><a href="#" className='font-poppins text-xs text-rblackdark hover:text-rwhite '>Copa do Mundo</a></li>
                    <li><a href="#" className='font-poppins text-xs text-rblackdark hover:text-rwhite '>Tecnologia 5g</a></li>
                    <li><a href="#" className='font-poppins text-xs text-rblackdark hover:text-rwhite '>Pix</a></li>
                    <li><a href="#" className='font-poppins text-xs text-rblackdark hover:text-rwhite '>Oferta do dia</a></li>
                </ul>
            </div>
                {/* end col-2 */}
                {/* col-3 */}
            <div className='w-full container px-2'>
                <h4 className='font-gemunu tracking-wide font-semibold text-lg text-white pb-3'>Institucional</h4>
                <ul className='space-y-[16px] leading-[0px]'>
                    <li><a href="#" className='font-poppins text-xs text-rblackdark hover:text-rwhite '>Sobre a Bem Nerd</a></li>
                    <li><a href="#" className='font-poppins text-xs text-rblackdark hover:text-rwhite '>Políticas do Site e Marketplace</a></li>
                    <li><a href="#" className='font-poppins text-xs text-rblackdark hover:text-rwhite '>Políticas de Cookies</a></li>
                    <li><a href="#" className='font-poppins text-xs text-rblackdark hover:text-rwhite '>Políticas de Privacidade</a></li>
                    <li><a href="#" className='font-poppins text-xs text-rblackdark hover:text-rwhite '>Trabalhe Conosco</a></li>
                    <li><a href="#" className='font-poppins text-xs text-rblackdark hover:text-rwhite '>Código de Defesa do Consumidor</a></li>
                </ul>
            </div>
                {/* end col-3 */}
                {/* col-4 */}
            <div className='w-full container px-2'>
                <h4 className='font-gemunu tracking-wide font-semibold text-lg text-white pb-3'>Atendimento</h4>
                <ul className='space-y-[16px] leading-[0px]'>
                    <li><a href="#" className='font-poppins text-xs text-rblackdark hover:text-rwhite '>Horário de atendimento: 08:00 às 20:00 - Segunda a sábado (Horário de Brasília)</a></li>
                    <li><a href="#" className='font-poppins text-xs text-rblackdark hover:text-rwhite '>Endereço: Rua Aparapapa, 1234, Centro Aracaju/SE, CEP:49999-999</a></li>
                    <li><a href="#" className='font-poppins text-xs text-rblackdark hover:text-rwhite '>Central SAC: (79) 99999-9999</a></li>
                    <li><a href="#" className='font-poppins text-xs text-rblackdark hover:text-rwhite '>E-mail: <br />faleconosco@bemnerd.com.br </a></li>
                </ul>
            </div>
                {/* end col-4 */}
        </footer>
    </div>
  )
}

export default Footer