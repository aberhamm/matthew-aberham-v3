export default function AboutPage() {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '@media (max-width: 639px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#section-1 {\npadding-top: 30px !important; padding-right: 20px !important; padding-bottom: 30px !important; padding-left: 20px !important;\n}\n#div-1 {\nposition: relative !important; display: block !important; margin-top: 12px !important;\n}\n#div-2 {\nmargin-top: 12px !important;\n}\n#a-1 {\npadding-top: 12px !important; padding-right: 0px !important; padding-bottom: 12px !important; padding-left: 0px !important; width: 100% !important;\n}\n#ul-1 {\nflex-direction: column !important;\n}\n#li-1 {\nwidth: 100% !important; margin-right: 0px !important; display: none !important;\n}\n#li-2 {\nwidth: 100% !important; margin-right: 0px !important;\n}\n#li-3 {\nwidth: 100% !important; margin-right: 0px !important;\n}\n#li-4 {\nwidth: 100% !important; margin-right: 0px !important;\n}\n#div-3 {\nflex-direction: column !important; align-items: flex-start !important; justify-content: flex-start !important; margin-top: 0px !important;\n}\n}\n@media (max-width: 1200px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#section-1 {\npadding-bottom: 36px !important;\n}\n#div-1 {\nbottom: 4px !important;\n}\n#svg-1 {\nwidth: 15px !important; height: auto !important; margin-top: 1px !important;\n}\n#li-1 {\nmargin-right: 32px !important;\n}\n#li-2 {\nmargin-right: 32px !important;\n}\n#li-3 {\nmargin-right: 32px !important;\n}\n#li-4 {\nmargin-right: 32px !important;\n}\n#div-3 {\npadding-top: 20px !important;\n}\n}\n',
        }}
      />

      <section
        className="flex h-screen w-full flex-col justify-start px-20 py-12 sm:justify-between sm:pt-0 sm:pr-12 sm:pb-0 sm:pl-12"
        id="section-1"
        style={{
          textEmphasisPosition: 'auto',
        }}
      >
        <div>
          <h1 className="relative text-7xl sm:relative sm:pr-20">
            I’m Matt, an architect of systems and experiences, passionate about
            making things that allow people to learn, share and connect.
            <div
              className="absolute right-0 text-xs min-[1440px]:bottom-[0.50rem] min-[1680px]:bottom-[0.50rem] sm:absolute sm:right-0"
              id="div-1"
            >
              <span className="inline-block rounded-full bg-black" /> 03:23 PM
            </div>
          </h1>

          <div
            className="mt-7 flex w-full text-2xl text-neutral-400 sm:mt-3"
            id="div-2"
          >
            <a
              className="flex items-center justify-between py-5"
              href="matthewaberham.com"
              id="a-1"
            >
              Read More
              <svg
                className="mt-1 ml-2 h-auto w-5 cursor-pointer"
                fill="rgb(157, 158, 160)"
                height="16"
                id="svg-1"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0V9Z"
                  fill="rgb(157, 158, 160)"
                />
              </svg>
            </a>
          </div>

          <ul
            className="flex list-none items-center border-t-2 border-b-2 border-t-zinc-300 border-b-zinc-300 text-2xl sm:justify-end sm:pb-0"
            id="ul-1"
            style={{
              borderBottomStyle: 'solid',
              borderTopStyle: 'solid',
            }}
          >
            <li className="mr-12 sm:mr-auto sm:ml-0" id="li-1">
              <span className="inline-block w-full py-5">Contact</span>
            </li>

            <li className="mr-12 list-item text-neutral-400" id="li-2">
              <a className="inline-block w-full py-5" href="matthewaberham.com">
                Email
              </a>
            </li>

            <li className="mr-12 list-item text-neutral-400" id="li-3">
              <a className="inline-block w-full py-5" href="matthewaberham.com">
                Instagram
              </a>
            </li>

            <li className="list-item text-neutral-400" id="li-4">
              <a
                className="inline-block w-full py-5"
                href="http://www.linkedin.com/in/onurcancoban"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div
          className="mt-2 flex items-end justify-between border-t-2 border-solid border-t-zinc-300 pt-6"
          id="div-3"
        >
          <div className="text-2xl">
            <a className="text-neutral-400" href="matthewaberham.com">
              Scroll down
            </a>
            for the selected works
          </div>

          <div className="hidden text-xs sm:block">
            Last updated March 13, 2022
          </div>
        </div>
      </section>
    </div>
  );
}
