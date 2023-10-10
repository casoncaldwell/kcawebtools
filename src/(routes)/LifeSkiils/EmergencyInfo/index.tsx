import { useTheme } from '../../../_hooks/useTheme'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

function EmergencyInfo() {
  const { color } = useTheme()

  const mobile = window.innerWidth < 768

  const navigate = useNavigate()
  return (
    <div className="w-full mt-14 flex flex-col gap-10 justify-center items-center py-10">
      <div className="flex gap-6 w-full justify-center">
        <button
          onClick={() => navigate('/')}
          className="bg-black text-white text-medium rounded-full px-2 py-1 shadow-sm hover:opacity-80"
        >
          <IoIosArrowBack />
        </button>
        <button className="bg-black text-white text-medium rounded-full px-4 py-1 shadow-sm hover:opacity-80">
          Personal Info
        </button>
        <button
          onClick={() => navigate('/life-skills/calendar')}
          className="bg-black text-white text-medium rounded-full px-4 py-1 shadow-sm hover:opacity-80"
        >
          Calendar
        </button>
      </div>

      <form className="flex flex-col gap-10 items-center">
        <div className={`flex ${mobile ? 'flex-col gap-10' : 'gap-8'}`}>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-2xl">First Name</label>
            <input
              placeholder="Enter your first name"
              className={`bg-white px-4 py-2 text-2xl rounded-sm border-[1px] border-gray-300 shadow-sm font-semibold ${color}`}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-2xl">Last Name</label>
            <input
              placeholder="Enter your last name"
              className={`bg-white px-4 py-2 text-2xl rounded-sm border-[1px] border-gray-300 shadow-sm font-semibold ${color}`}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-2xl">Address</label>
          <input
            placeholder="Enter address"
            className={`bg-white px-4 py-2 text-2xl rounded-sm border-[1px] border-gray-300 shadow-sm font-semibold ${color}`}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-2xl">Phone Number</label>
          <input
            placeholder="Enter phone number"
            className={`bg-white px-4 py-2 text-2xl rounded-sm border-[1px] border-gray-300 shadow-sm font-semibold ${color}`}
          />
        </div>

        <div className={`flex ${mobile ? 'flex-col gap-10' : 'gap-8'}`}>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-2xl">Mom's First Name</label>
            <input
              placeholder="Enter mom's first name"
              className={`bg-white px-4 py-2 text-2xl rounded-sm border-[1px] border-gray-300 shadow-sm font-semibold ${color}`}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-2xl">Mom's Last Name</label>
            <input
              placeholder="Enter mom's last name"
              className={`bg-white px-4 py-2 text-2xl rounded-sm border-[1px] border-gray-300 shadow-sm font-semibold ${color}`}
            />
          </div>
        </div>

        <div className={`flex ${mobile ? 'flex-col gap-10' : 'gap-8'}`}>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-2xl">Dad's First Name</label>
            <input
              placeholder="Enter dad's first name"
              className={`bg-white px-4 py-2 text-2xl rounded-sm border-[1px] border-gray-300 shadow-sm font-semibold ${color}`}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-2xl">Dad's Last Name</label>
            <input
              placeholder="Enter dad's last name"
              className={`bg-white px-4 py-2 text-2xl rounded-sm border-[1px] border-gray-300 shadow-sm font-semibold ${color}`}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-2xl">School Name</label>
          <input
            placeholder="Enter school name"
            className={`bg-white px-4 py-2 text-2xl rounded-sm border-[1px] border-gray-300 shadow-sm font-semibold ${color}`}
          />
        </div>
      </form>
    </div>
  )
}

export default EmergencyInfo
