import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';


export default function Home() {
  const { data: _projects } = swr('/api/projects');
  const projects = _projects ? _projects : null;

  return (
    <>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold text-center">İletişim</p>
        <div className=" flex justify-center flex-col items-center">
            <div className="max-w-lg w-full">
                <a target="_blank" rel="norefferer" href="https://instagram.com/turkerpw">
                    <div className="flex justify-between bg-[#191932]/20 hover:bg-[#191932]/30 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-instagram fa-2x" />
                        <p className="font-semibold text-xl">@turkerpw</p>
                    </div>
                </a>
                <a target="_blank" rel="norefferer" href="https://discord.com/users/852798440680456212">
                    <div className="mt-2 flex justify-between bg-[#191932]/20 hover:bg-[#191932]/30 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-discord fa-2x" />
                        <p className="font-semibold text-xl">Türker 🍁#8126</p>
                    </div>
                </a>
                <a href="mailto:turker@botscamp.xyz">
                    <div className="mt-2 flex justify-between bg-[#191932]/20 hover:bg-[#191932]/30 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fa fa-envelope fa-2x" />
                        <p className="font-semibold text-xl">turker@botscamp.xyz</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </>
  )
}
