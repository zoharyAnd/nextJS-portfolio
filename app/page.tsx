import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Timeline from './components/Timeline'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[69px]">
        <Banner />
        <Skills />
        <Timeline />
      </main>
    </>
  )
}
