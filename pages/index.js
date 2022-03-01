import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';

const items = [
  { icon: 'fab fa-instagram', link: 'https://instagram.com/turkerpw' },
  { icon: 'fab fa-github', link: 'https://github.com/turkerpw' },
  { icon: 'fab fa-discord', link: 'https://discord.com/users/852798440680456212' },
]
const navItems = [
  { icon: 'fal fa-home', active: 'fa fa-home', label: 'Topluluk Yöneticisi', href: '/' },
  { icon: 'fal fa-compass', active: 'fa fa-compass', label: 'Projeler', href: '/projects' },
]
export default function Home() {
  const { data: _profile } = swr('https://linkcord.swoth.xyz/api/v1/user/852798440680456212');
  const profile = _profile ? _profile.data : null;

  const { data: _repositories } = swr('/api/repos');
  const repositories = _repositories ? _repositories : null;

  const { data: _technologies } = swr('/api/techs');
  const technologies = _technologies ? _technologies : null;

  return (
    <>
      <div className="bg-neutral-800/10 shadow-xl rounded-lg w-full h-auto mt-6">
        {_profile ? (
          profile ? (
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
              <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                <div className="flex items-center">
           
                <p className="flex items-center text-blue text-4xl font-semibold">
                  Türker
                </p>
              
             
                </div>
                <p className="text-blue/50 text-md mt-3">
                <span class="ml-2 bg-black/20 px-2 py-1 font-normal rounded-md text-sm">
                Topluluk Yöneticisi</span> <span class="ml-2 bg-black/20 px-2 py-1 font-normal rounded-md text-sm">Geliştirici</span>
                </p>
              </div>
              <div className="order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full">
                <img alt="Türker" src={`https://cdn.discordapp.com/avatars/${profile.user.id}/${profile.user.avatar}`} width="160" height="160" className="bg-neutral-700 w-[160px] h-[160px] rounded-full" />
                <div className={`${profile.user.status !== "offline" ? 'bg-green-700' : 'bg-neutral-700'} absolute bottom-0 right-4 border-[5px] border-neutral-800/20 w-[32px] h-[32px] rounded-full`} />
              </div>
              
            </div>
            
            <span style={{ zIndex: '-1' }} className="text-purple-500/5 absolute top-5 left-5 text-xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold">Türker</span>
          </div>
          
          ) : (
            <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
              <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                <div className="bg-neutral-700/30 animate-pulse w-1/2 h-[24px] rounded-md" />
                <div className="mt-2 bg-neutral-700 animate-pulse w-[95%] h-[96px] rounded-md" />
              </div>
              <div className="order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full">
                <div className="bg-neutral-700/30 animate-pulse w-[160px] h-[160px] rounded-full" />
                <div className="absolute bottom-1 right-5 bg-neutral-700 border-4 border-neutral-800 animate-pulse w-[32px] h-[32px] rounded-full" />
              </div>
            </div>
          )
        ) : (
          <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
            <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
              <div className="bg-neutral-700/30 animate-pulse w-1/2 h-[24px] rounded-md" />
              <div className="mt-2 bg-neutral-700/30 animate-pulse w-[95%] h-[96px] rounded-md" />
            </div>
            <div className="order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full">
              <div className="bg-neutral-700/30 animate-pulse w-[160px] h-[160px] rounded-full" />
              <div className="absolute bottom-1 right-5 bg-neutral-700 border-4 border-neutral-800 animate-pulse w-[32px] h-[32px] rounded-full" />
            </div>
          </div>
        )}
      </div>
      <div className="py-20">
        <p className="text-3xl text-blue font-semibold">Github'daki Projelerim</p>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 items-center mt-2">
          {_repositories ? (
            repositories ? (
              repositories.sort((a, b) => b.stargazers_count - a.stargazers_count).map((_, __) => (
                <a key={__} href={`https://github.com/${_.full_name}`} target="_blank" rel="noreferrer" className="bg-neutral-800/10 p-4 hover:bg-neutral-800/20 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full">
                  <p className="text-md text-red-500">{_.full_name}</p>

                  <div className="flex justify-between w-full mt-2">
                    <p className="font-medium">Yıldız Sayısı</p>
                    <p>{_.stargazers_count}</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="font-medium">Fork Sayısı</p>
                    <p>{_.forks}</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="font-medium">Kullanılan Dil</p>
                    <p>{_.language}</p>
                  </div>
                </a>
              ))
            ) : (
              Array.from({ length: 3 }).map((_, __) => (
                <div key={__} className="bg-neutral-800/10 p-4 rounded-lg w-full">
                  <div className="bg-neutral-700/30 animate-pulse w-full h-[28px] rounded-md" />
                  <div className="flex justify-between w-full mt-2 space-x-4">
                    <div className="bg-neutral-700/30 animate-pulse w-24 h-[24px] rounded-md" />
                    <div className="bg-neutral-700/30 animate-pulse w-12 h-[24px] rounded-md" />
                  </div>
                  <div className="flex justify-between w-full mt-2 space-x-4">
                    <div className="bg-neutral-700/30 animate-pulse w-24 h-[24px] rounded-md" />
                    <div className="bg-neutral-700/30 animate-pulse w-12 h-[24px] rounded-md" />
                  </div>
                  <div className="flex justify-between w-full mt-2 space-x-4">
                    <div className="bg-neutral-700/30 animate-pulse w-24 h-[24px] rounded-md" />
                    <div className="bg-neutral-700/30 animate-pulse w-12 h-[24px] rounded-md" />
                  </div>
                </div>
              ))
            )
          ) : (
            Array.from({ length: 3 }).map((_, __) => (
              <div key={__} className="bg-neutral-800/10 p-4 rounded-lg w-full">
                <div className="bg-neutral-700/30 animate-pulse w-full h-[28px] rounded-md" />
                <div className="flex justify-between w-full mt-2 space-x-4">
                  <div className="bg-neutral-700/30 animate-pulse w-24 h-[24px] rounded-md" />
                  <div className="bg-neutral-700/30 animate-pulse w-12 h-[24px] rounded-md" />
                </div>
                <div className="flex justify-between w-full mt-2 space-x-4">
                  <div className="bg-neutral-700/30 animate-pulse w-24 h-[24px] rounded-md" />
                  <div className="bg-neutral-700/30 animate-pulse w-12 h-[24px] rounded-md" />
                </div>
                <div className="flex justify-between w-full mt-2 space-x-4">
                  <div className="bg-neutral-700/30 animate-pulse w-24 h-[24px] rounded-md" />
                  <div className="bg-neutral-700/30 animate-pulse w-12 h-[24px] rounded-md" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="py-20">
        <p className="text-3xl text-blue font-semibold">Kullandığım Diller</p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 items-center mt-2">
          {_technologies ? (
            technologies ? (
              technologies.map((_, __) => (
                <div key={__} className="bg-neutral-800/10 p-2 px-4 hover:bg-neutral-800/20 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex justify-center items-center h-[26px]">
                      <img alt="Türker" src={_.src} className="rounded-md" width="24" height="24" style={{ fill: '#fff!important;' }} />
                    </div>
                    <p className="text-md font-semibold">{_.name}</p>
                  </div>
                </div>
              ))
            ) : (
              Array.from({ length: 3 }).map((_, __) => (
                <div key={__} className="bg-neutral-800/10 p-4 hover:bg-neutral-800/20 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex-shrink-0 w-[36px] h-[36px]">
                      <div className="bg-neutral-700/30 w-[36px] h-[36px] rounded-md animate-pulse" />
                    </div>
                    <div className="bg-neutral-700/30 w-44 h-[36px] rounded-md animate-pulse" />
                  </div>
                </div>
              ))
            )
          ) : (
            Array.from({ length: 3 }).map((_, __) => (
              <div key={__} className="bg-neutral-800/10 p-4 hover:bg-neutral-800/20 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="flex-shrink-0 w-[36px] h-[36px]">
                    <div className="bg-neutral-700/30 w-[36px] h-[36px] rounded-md animate-pulse" />
                  </div>
                  <div className="bg-neutral-700/30 w-44 h-[36px] rounded-md animate-pulse" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}
