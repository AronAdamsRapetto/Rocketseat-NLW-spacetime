import Image from 'next/image'
import nwlLogo from '../assets/nwl-spacetime-logo.svg'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nwlLogo} alt="" />

      <div className="max-w-[420px] space-y-4">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <a
        href=""
        className="hover:bg-green inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black"
      >
        CADASTRAR LEMBRAÇA
      </a>
    </div>
  )
}
