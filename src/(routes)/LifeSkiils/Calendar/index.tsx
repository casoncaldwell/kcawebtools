import { useTheme } from '../../../_hooks/useTheme'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const Calendar = () => {
  const navigate = useNavigate()
  const { color } = useTheme()
  return (
    <div className="w-full mt-14 flex flex-col gap-10 justify-center items-center py-10 px-6">
      <div className="flex gap-6 w-full justify-center">
        <button
          onClick={() => navigate('/')}
          className="bg-black text-white text-medium rounded-full px-2 py-1 shadow-sm hover:opacity-80"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => navigate('/life-skills/personal-info')}
          className="bg-black text-white text-medium rounded-full px-4 py-1 shadow-sm hover:opacity-80"
        >
          Personal Info
        </button>
        <button className="bg-black text-white text-medium rounded-full px-4 py-1 shadow-sm hover:opacity-80">
          Calendar
        </button>
      </div>

      <div className="w-full bg-white border-2 border-black rounded-md overflow-hidden">
        <div className="flex items-center w-full border-b-2 border-black h-20 px-4">
          <input placeholder="Month" className={`text-3xl outline-none font-bold ${color}`} />
        </div>
        <div className={`w-full grid grid-cols-7 ${color}`}>
          <input
            placeholder="Day of the Week"
            className="font-medium text-xl px-4 border-b-2 border-r-2 border-black h-10 w-full outline-none"
          />
          <input
            placeholder="Day of the Week"
            className="font-medium text-xl px-4 border-b-2 border-r-2 border-black h-10 w-full outline-none"
          />
          <input
            placeholder="Day of the Week"
            className="font-medium text-xl px-4 border-b-2 border-r-2 border-black h-10 w-full outline-none"
          />
          <input
            placeholder="Day of the Week"
            className="font-medium text-xl px-4 border-b-2 border-r-2 border-black h-10 w-full outline-none"
          />
          <input
            placeholder="Day of the Week"
            className="font-medium text-xl px-4 border-b-2 border-r-2 border-black h-10 w-full outline-none"
          />
          <input
            placeholder="Day of the Week"
            className="font-medium text-xl px-4 border-b-2 border-r-2 border-black h-10 w-full outline-none"
          />
          <input
            placeholder="Day of the Week"
            className="font-medium text-xl px-4 border-b-2 border-black h-10 w-full outline-none"
          />
        </div>
        <div className={`grid grid-cols-7 text-5xl font-bold ${color}`}>
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-b-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-r-2 border-black text-center outline-none"
          />
          <input
            placeholder="#"
            className="px-4 h-[10vw] border-r-2 border-black text-center outline-none"
          />
          <input placeholder="#" className="px-4 h-[10vw] border-black text-center outline-none" />
        </div>
      </div>
    </div>
  )
}

export default Calendar
