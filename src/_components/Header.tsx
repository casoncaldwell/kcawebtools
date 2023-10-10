import { useTheme } from '../_hooks/useTheme'

const Header: React.FC = () => {
  const { color, setColor } = useTheme()

  const mobile = window.innerWidth < 768

  return (
    <div className="z-30 fixed top-0 inset-x-0 flex items-center justify-between h-14 bg-white shadow-sm border-b-[1px] border-gray-300 py-2 px-3">
      <p className="text-yellow-400 font-bold text-xl">
        <span className="text-orange-600">KC</span>Academy
        {!mobile ? <span className="text-black text-base"> / Web Tools</span> : null}
      </p>
      <div className="h-full flex items-center gap-2">
        {!mobile ? <p className="font-medium">Choose your color:</p> : null}
        <button
          onClick={() => setColor('text-blue-500')}
          className={`h-6 w-6 bg-blue-500 rounded-full ${
            color === 'text-blue-500' && 'border-2 border-white ring-2 ring-black'
          }`}
        ></button>
        <button
          onClick={() => setColor('text-pink-500')}
          className={`h-6 w-6 bg-pink-500 rounded-full ${
            color === 'text-pink-500' && 'border-2 border-white ring-2 ring-black'
          }`}
        ></button>
      </div>
    </div>
  )
}

export default Header
