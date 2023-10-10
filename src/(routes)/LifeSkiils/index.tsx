import { useNavigate } from 'react-router-dom'

const LifeSkills = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full mt-14 flex flex-col py-10">
      <div className="flex gap-6 w-full justify-center">
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
    </div>
  )
}

export default LifeSkills
