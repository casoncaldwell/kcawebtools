import { useState } from 'react'

function App() {
  const [color, setColor] = useState('')

  const mobile = window.innerWidth < 768
  return (
    <div className="w-full flex flex-col justify-center items-center my-10">
      <p className="mb-4 text-lg font-semibold">Choose your color!</p>
      <div className="flex gap-8 mb-10">
        <button
          onClick={() => setColor('text-blue-500')}
          className={`w-[100px] h-[30px] bg-blue-500 rounded-full ${
            color === 'text-blue-500' && 'border-2 border-white ring-2 ring-black'
          }`}
        ></button>
        <button
          onClick={() => setColor('text-pink-500')}
          className={`w-[100px] h-[30px] bg-pink-500 rounded-full ${
            color === 'text-pink-500' && 'border-2 border-white ring-2 ring-black'
          }`}
        ></button>
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

export default App
