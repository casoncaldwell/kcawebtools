import HomeCard from './_components/HomeCard'
import { useTheme } from '../../_hooks/useTheme'

const Home = () => {
  const { color } = useTheme()
  return (
    <div className="flex flex-col items-center gap-12 mt-14 p-10 w-full">
      <p className={`font-bold text-3xl ${color}`}>Building a strong foundation!</p>
      <div className="grid grid-cols-4 gap-4 w-full">
        <HomeCard title="Life Skills" destination="/life-skills/personal-info" />
        <HomeCard title="" />
        <HomeCard title="" />
        <HomeCard title="" />
        <HomeCard title="" />
        <HomeCard title="" />
        <HomeCard title="" />
      </div>
    </div>
  )
}

export default Home
