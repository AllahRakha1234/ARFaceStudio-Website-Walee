
import './globals.css';
import Navbar from './../Components/Navbar';

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="flex justify-center items-center mt-[40vh]">
      <h2 className="text-3xl font-bold underline bg-red-400 p-3 rounded-md">Welcome to AR Face Studio</h2>
    </div>
    </>
  )
}