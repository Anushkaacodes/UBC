import { useMemo } from "react";

const Home = ({
  frameDivBoxShadow,
  frameDivBorder,
  frameNavBoxShadow,
  frameNavBorder,
}) => {
  const mainLayoutStyle = useMemo(() => {
    return {
      boxShadow: frameDivBoxShadow,
      border: frameDivBorder,
    };
  }, [frameDivBoxShadow, frameDivBorder]);

  const rectangleDivStyle = useMemo(() => {
    return {
      boxShadow: frameNavBoxShadow,
      border: frameNavBorder,
    };
  }, [frameNavBoxShadow, frameNavBorder]);

  return (
    <div
      className="h-[64rem] w-[16.5rem] bg-gray-200 flex flex-row items-start justify-start py-[0rem] px-[2rem] box-border gap-[2.562rem] mq450:gap-[1.25rem]"
      style={mainLayoutStyle}
    >
      <div
        className="self-stretch w-[16.5rem] relative bg-gray-200 hidden"
        style={rectangleDivStyle}
      />
      <div className="w-[11.938rem] flex flex-col items-start justify-start pt-[2.287rem] px-[0rem] pb-[0rem] box-border shrink-0">
        <nav className="m-0 self-stretch flex flex-col items-start justify-start gap-[3.731rem] text-left text-[1rem] text-accent-1 font-inter">
          <div className="w-[10.938rem] flex flex-row items-start justify-start relative text-center text-[2.25rem] font-nunito">
            <h1 className="!m-[0] w-[1.713rem] absolute top-[1.479rem] left-[4.544rem] text-inherit leading-[140%] capitalize font-extrabold font-inherit inline-block [transform:_rotate(134.9deg)] [transform-origin:0_0] z-[1] mq750:text-[1.813rem] mq750:leading-[2.5rem] mq450:text-[1.375rem] mq450:leading-[1.875rem]">
              U
            </h1>
            <h1 className="!m-[0] h-[3.175rem] w-[1.588rem] absolute top-[2.134rem] left-[3.528rem] text-inherit leading-[140%] capitalize font-extrabold font-inherit inline-block [transform:_rotate(-134.9deg)] [transform-origin:0_0] z-[2] mq750:text-[1.813rem] mq750:leading-[2.5rem] mq450:text-[1.375rem] mq450:leading-[1.875rem]">
              C
            </h1>
            <div className="flex-1 flex flex-row items-start justify-end text-left text-[1rem] text-text-300 font-inter">
              <b className="relative leading-[120%] z-[1]">
                <p className="m-0">UnBoxing</p>
                <p className="m-0">Community</p>
              </b>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[12.206rem] gap-[2rem] mq750:pb-[7.938rem] mq750:box-border">
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
              <div className="flex flex-row items-start justify-start gap-[1rem]">
                <img
                  className="h-[1.813rem] w-[1.813rem] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/frame-1.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                  <div className="relative tracking-[-0.01em] font-medium inline-block min-w-[7.25rem] z-[1]">
                    Product Search
                  </div>
                </div>
              </div>
            </div>
            <a className="[text-decoration:none] self-stretch flex flex-col items-start justify-start gap-[2.5rem] text-text-300">
              <div className="flex flex-row items-start justify-start gap-[1rem]">
                <img
                  className="h-[1.813rem] w-[1.813rem] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/frame-1-1.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                  <a className="[text-decoration:none] relative tracking-[-0.01em] font-medium text-[inherit] inline-block min-w-[5.188rem] z-[1]">
                    Dashboard
                  </a>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[1rem]">
                <div className="h-[1.813rem] w-[1.875rem] relative">
                  <img
                    className="absolute top-[0rem] left-[0rem] w-full h-full z-[1]"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="absolute top-[0rem] left-[0rem] w-full h-full overflow-hidden hidden z-[2]" />
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                  <a className="[text-decoration:none] relative tracking-[-0.01em] font-medium text-[inherit] inline-block min-w-[4.938rem] z-[1]">{`Resources `}</a>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[1.25rem]">
                <div className="h-[1.5rem] w-[1.625rem] relative z-[1]">
                  <img
                    className="absolute top-[0.063rem] left-[0rem] w-[1.625rem] h-[1.375rem] z-[2]"
                    loading="lazy"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                  <a className="[text-decoration:none] relative tracking-[-0.01em] font-medium text-[inherit] z-[1]">
                    Affiliated Programs
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[2.812rem]">
                <div className="flex flex-row items-start justify-start gap-[1.125rem]">
                  <img
                    className="h-[1.5rem] w-[1.75rem] relative min-h-[1.5rem] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/vector-2.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                    <div className="relative tracking-[-0.01em] font-medium inline-block min-w-[4.125rem] z-[1]">
                      Earnings
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[2.5rem]">
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
                    <a className="[text-decoration:none] flex flex-row items-start justify-start gap-[1.25rem] text-[inherit]">
                      <img
                        className="h-[1.813rem] w-[1.5rem] relative z-[1]"
                        loading="lazy"
                        alt=""
                        src="/vector-3.svg"
                      />
                      <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                        <div className="relative tracking-[-0.01em] font-medium inline-block min-w-[4.938rem] z-[1]">
                          Guidelines
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[1rem]">
                    <div className="h-[1.75rem] w-[1.75rem] relative overflow-hidden shrink-0 z-[1]">
                      <img
                        className="absolute top-[0rem] left-[0rem] w-full h-full z-[2]"
                        loading="lazy"
                        alt=""
                        src="/vector-4.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                      <a className="[text-decoration:none] relative tracking-[-0.01em] font-medium text-[inherit] z-[1]">
                        Help Centre /FAQs
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[3.25rem]">
            <div className="w-[8.813rem] flex flex-row items-start justify-between gap-[1.25rem]">
              <img
                className="self-stretch w-[1.063rem] relative max-h-full object-contain min-h-[1.875rem] z-[1]"
                loading="lazy"
                alt=""
                src="/vector-5.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/logout-right.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                    <div className="relative font-semibold inline-block min-w-[3.438rem] z-[1]">
                      <span className="uppercase">L</span>ogout
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[2.75rem] text-text-300">
              <div className="flex flex-row items-start justify-start gap-[1.5rem]">
                <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[1.875rem] h-[0.469rem] relative z-[1]"
                    loading="lazy"
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
                <div className="relative z-[1]">
                  <p className="m-0">Give feedback</p>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[1.5rem]">
                <div className="flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[1.875rem] h-[0.469rem] relative z-[1]"
                    loading="lazy"
                    alt=""
                    src="/vector-7.svg"
                  />
                </div>
                <div className="relative z-[1]">Refer an engineer</div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="self-stretch w-[0.063rem] relative box-border shrink-0 z-[2] border-r-[1px] border-solid border-darkslategray-500" />
    </div>
  );
};

export default Home;
