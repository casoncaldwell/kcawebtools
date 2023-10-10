import LegoBrick from '../../../../public/images/Lego.png'
import { useNavigate } from 'react-router-dom'

type HomeCardProps = {
  title: string
  destination?: string
}

const HomeCard = ({ title, destination }: HomeCardProps) => {
  const navigate = useNavigate()

  const mobile = window.innerWidth < 768
  return (
    <button
      onClick={() => {
        destination ? navigate(destination) : null
      }}
      className="relative flex justify-center items-center h-[13vw] overflow-hidden hover:opacity-90 transition"
    >
      <p className={`text-white z-10 font-bold mt-6 ${mobile ? 'text-xs' : 'text-4xl'}`}>{title}</p>
      <img src={LegoBrick} className="absolute inset-0 h-full min-w-full" />
    </button>
  )
}

export default HomeCard
