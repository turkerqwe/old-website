import Head from "next/head";
import Image from "next/image";
import swr from "../lib/swr";
import Tippy from "@tippyjs/react";

const items = [
];

export default function Home() {
  const { data: _profile } = swr(
    "https://linkcord.js.org/api/v3/user/852798440680456212"
  );
  const profile = _profile ? _profile.data : null;

  const { data: _repositories } = swr("/api/repos");
  const repositories = _repositories ? _repositories : null;

  const { data: _technologies } = swr("/api/techs");
  const technologies = _technologies ? _technologies : null;
  const statuses = {
    dnd: {
      label: "Rahatsız Etmeyin",
    },
    idle: {
      label: "Boşta",
    },
    online: {
      label: "Çevrimiçi",
    },
    offline: {
      label: "Çevrimdışı",
    },
  };
  return (
    <>
      <div className="bg-[#191932]/20 shadow-xl rounded-lg w-full h-auto mt-6">
        {_profile ? (
          profile ? (
            <div className="relative">
              <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
                <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                  <div className="flex items-center">
                    <p className="flex items-center text-white text-4xl font-semibold">
                    Türker
                    </p>
                    {profile.presence.status !== "offline" && (
                      <Tippy
                        content={`${
                          statuses[profile.presence.status].label
                        } Modunda`}
                        animation="shift-away"
                        arrow={false}
                      >
                        <span
                          className={`ml-2 text-${profile.presence.status} px-2 py-1 font-normal rounded-md text-sm`}
                        >
                          <i
                            className={`fa fa-circle text-${profile.presence.status} mr-2`}
                          />
                          {statuses[profile.presence.status].label}
                        </span>
                      </Tippy>
                    )}
                  </div>
                </div>
                <div
                  className={`order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full `}
                >
                  <img
                    alt="Türker"
                    src={`https://cdn.discordapp.com/avatars/${profile.profile.id}/${profile.profile.avatar}`}
                    width="160"
                    height="160"
                    className={`bg-neutral-700 w-[160px] h-[160px] rounded-full`}
                  />
     
                </div>
              </div>

              <span
                style={{ zIndex: "-1" }}
                className="text-white/5 absolute bottom-3 left-7 text-xl sm:text-2xl md:text-4xl lg:text-3xl font-semibold"
              >
               Türker 🍁#8126
              </span>
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
        <p className="text-3xl text-white font-semibold">GitHub'daki Projelerim</p>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 items-center mt-2">
          {_repositories
            ? repositories
              ? repositories
                  .sort((a, b) => b.stargazers_count - a.stargazers_count)
                  .map((_, __) => (
                    <a
                      key={__}
                      href={`https://github.com/${_.full_name}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#191932]/20 p-4 hover:bg-[#191932]/30 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full"
                    >
                      <p className="text-md text-white">
                        <span className="text-sm text-white/50 bg-black/25 px-2 py-1 rounded-md mr-1">
                          {_.owner.login}
                        </span>
                        {_.name}
                      </p>
                      <div className="mt-5 flex justify-end w-full h-full items-center">
                        <div className="flex w-full justify-between items-center">
                          <Tippy
                            content={"Yıldız"}
                            arrow={false}
                            animation="shift-away"
                          >
                            <div className="flex items-center">
                              <p className="text-sm">
                                <i className="fal fa-star mr-2" />
                              </p>
                              <p>{_.stargazers_count}</p>
                            </div>
                          </Tippy>
                          <div className="text-sm text-white bg-black/25 px-2 py-1 rounded-md mr-1">
                            {_.language || "N/A"}
                          </div>
                          <Tippy
                            content={"Fork"}
                            arrow={false}
                            animation="shift-away"
                          >
                            <div className="flex items-center justify-end">
                              <p>{_.forks}</p>
                              <p className="text-sm">
                                <i className="fal fa-code-branch ml-2" />
                              </p>
                            </div>
                          </Tippy>
                        </div>
                      </div>
                    </a>
                  ))
              : Array.from({ length: 6 }).map((_, __) => (
                  <div
                    key={__}
                    className="bg-[#191932]/20 p-4 rounded-lg w-full"
                  >
                    <div className="bg-[#191932]/50 animate-pulse w-full h-[28px] rounded-md" />
                    <div className="mt-5 flex w-full justify-between items-center">
                      <div className="bg-[#191932]/50 animate-pulse w-12 h-[24px] rounded-md" />
                      <div className="bg-[#191932]/50 animate-pulse w-24 h-[24px] rounded-md" />
                      <div className="bg-[#191932]/50 animate-pulse w-12 h-[24px] rounded-md" />
                    </div>
                  </div>
                ))
            : Array.from({ length: 6 }).map((_, __) => (
                <div key={__} className="bg-[#191932]/20 p-4 rounded-lg w-full">
                  <div className="bg-[#191932]/50 animate-pulse w-full h-[28px] rounded-md" />
                  <div className="mt-5 flex w-full justify-between items-center">
                    <div className="bg-[#191932]/50 animate-pulse w-12 h-[24px] rounded-md" />
                    <div className="bg-[#191932]/50 animate-pulse w-24 h-[24px] rounded-md" />
                    <div className="bg-[#191932]/50 animate-pulse w-12 h-[24px] rounded-md" />
                  </div>
                </div>
              ))}
        </div>
      </div>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold">Kullandıklarım</p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 items-center mt-2">
          {_technologies
            ? technologies
              ? technologies.map((_, __) => (
                  <div
                    key={__}
                    className="cursor-pointer bg-[#191932]/20 p-2 px-4 hover:bg-[#191932]/30 shadow-lg hover:shadow-xl hover:shadow-[#191932]/20 transition-all duration-200 rounded-lg w-full"
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="flex justify-center items-center h-[26px]">
                        <img
                          alt="Türker"
                          src={_.src}
                          className="rounded-md"
                          width="24"
                          height="24"
                          style={{ fill: "#fff!important;" }}
                        />
                      </div>
                      <p className="text-md font-semibold">{_.name}</p>
                    </div>
                  </div>
                ))
              : Array.from({ length: 20 }).map((_, __) => (
                <div
                  key={__}
                  className="bg-[#191932]/20 p-4 hover:bg-[#191932]/30 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full"
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="flex-shrink-0 w-[36px] h-[36px] mr-2">
                      <div className="bg-[#191932]/50 w-[36px] h-[36px] rounded-md animate-pulse" />
                    </div>
                    <div className="bg-[#191932]/50 w-44 h-[24px] rounded-md animate-pulse" />
                  </div>
                </div>
                ))
            : Array.from({ length: 20 }).map((_, __) => (
                <div
                  key={__}
                  className="bg-[#191932]/20 p-4 hover:bg-[#191932]/30 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full"
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="flex-shrink-0 w-[36px] h-[36px] mr-2">
                      <div className="bg-[#191932]/50 w-[36px] h-[36px] rounded-md animate-pulse" />
                    </div>
                    <div className="bg-[#191932]/50 w-44 h-[24px] rounded-md animate-pulse" />
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
