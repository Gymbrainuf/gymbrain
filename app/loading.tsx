// app/loading.jsx
import Image from 'next/image'

export default function Loading() {
  return (
    <div className='bg-slate-300' style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'white',
      zIndex: 9999
    }}>
    <div className=" flex h-screen items-center justify-center">
      <Image
        src="/1369039-200.png"
        alt="Loading"
        width={100}
        height={100}
        className="animate-spin"
      />
    </div>
    </div>
  )
}