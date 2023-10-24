import Banner from './components/Banner'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[69px]">
        <Banner />
      </main>
    </>
  )
}
