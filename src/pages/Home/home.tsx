import React from 'react'

import Logo from '../../assets/Logo.png'

interface HomeProps {
  startGameFunction: () => void
}

const home: React.FC<HomeProps> = ({ startGameFunction }) => {
  return(
    <main className="absolute inset-0 flex flex-col items-center">
      <figure>
        <img src={Logo} alt="Logo marca da impacto, uma ponte com cores azuis escura, com o slogan unindo causas, transformando vidas!" />
        <p className="text-xl text-center text-dark-blue font-semibold uppercase">Unindo causas, transformando vidas!</p>
      </figure>

      <section className="mt-10">
        <button 
          className="py-4 w-[400px] text-3xl uppercase shadow bg-orange transition-all hover:bg-orange/80 border-4 border-dark-blue rounded-lg"
          onClick={startGameFunction}
          >
          <p className="text-shadow text-zinc-50 font-black tracking-widest">Iniciar</p>
        </button>
      </section>
    </main>
  )
}

export default home;