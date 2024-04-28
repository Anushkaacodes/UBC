import FrameComponent from "./FrameComponent";

const DateAndNotification = () => {
  return (
    <section className="self-stretch flex flex-col items-end justify-start gap-[2.25rem] max-w-full text-left text-[1rem] text-dimgray-100 font-inter mq750:gap-[1.125rem]">
      <div className="flex flex-row items-start justify-start pt-[0rem] pb-[1.562rem] pr-[0rem] pl-[1.25rem] box-border gap-[2rem] max-w-full mq750:flex-wrap mq750:gap-[1rem]">
        <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
          <div className="relative leading-[1rem]">11 February, Saturday</div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[2rem] h-[2rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/notification.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[1.187rem] text-text-300">
          <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
            <div className="flex flex-col items-start justify-start">
              <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[6.688rem]">
                Aisha Sharma
              </a>
              <div className="relative text-[0.75rem] text-dimgray-100 inline-block min-w-[2.75rem] z-[1]">
                Fresher
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.5rem]">
            <div className="h-[2.5rem] w-[2.5rem] relative shadow-[0px_2px_8px_rgba(245,_245,_245,_0.2)] rounded-[50%] bg-gainsboro" />
            <img
              className="h-[2.5rem] w-[2.5rem] relative overflow-hidden shrink-0 min-h-[2.5rem]"
              alt=""
              src="/arrow-drop-down.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full text-center text-[3rem] text-whitesmoke">
        <div className="w-[60.938rem] flex flex-col items-end justify-start gap-[1.687rem] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.437rem] box-border max-w-full">
            <div className="flex flex-col items-start justify-start gap-[1.187rem] max-w-full">
              <h1 className="m-0 relative text-inherit font-semibold font-inherit z-[2] mq750:text-[2.375rem] mq450:text-[1.813rem]">{`Suggest & Review a Product`}</h1>
              <div className="w-[39.5rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-[1.5rem] text-text-300">
                <h3 className="m-0 relative text-inherit leading-[2.125rem] capitalize font-medium font-inherit z-[2] mq450:text-[1.188rem] mq450:leading-[1.688rem]">{`Any Electric & Electronics products`}</h3>
              </div>
            </div>
          </div>
          <div className="relative bg-gray-200 self-stretch rounded box-border flex flex-row items-start justify-start min-w-[15.625rem] z-[2] border-[1px] border-solid border-darkslategray-300">
            <input
              className="[outline:none] py-[0.875rem] px-[2rem] font-inter text-[1rem] text-darkgray [border:none] w-full h-full [background:transparent] ml-[3rem]"
              placeholder="MSI Titan"
              type="text"
            />
            <img
              className="w-[1rem] h-[1rem] absolute z-[2] left-[2rem] top-[1.125rem]"
              alt=""
              src="/icon--magnifyingglass.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.312rem] box-border max-w-full text-[1.5rem] text-text-300">
        <div className="w-[60.938rem] flex flex-row items-start justify-start gap-[2rem] max-w-full mq750:gap-[1rem]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[2rem] max-w-[calc(100%_-_42px)] mq750:gap-[1rem]">
            <div className="self-stretch shadow-[0px_0px_10px_4px_#1a1a1a] rounded-lg bg-gray-200 box-border flex flex-row items-end justify-start py-[0rem] pr-[0rem] pl-[1.875rem] gap-[2.062rem] max-w-full z-[2] border-[1px] border-solid border-darkslategray-500 mq750:gap-[1rem] mq1100:flex-wrap mq1100:p-[1.25rem] mq1100:box-border">
              <div className="self-stretch w-[58.313rem] relative shadow-[0px_0px_10px_4px_#1a1a1a] rounded-lg bg-gray-200 box-border hidden max-w-full border-[1px] border-solid border-darkslategray-500" />
              <div className="h-[12.188rem] w-[10.125rem] flex flex-col items-start justify-start">
                <div className="self-stretch h-[8.5rem] relative z-[1]" />
              </div>
              <div className="flex-1 rounded-lg bg-gray-100 box-border flex flex-col items-start justify-start py-[1.375rem] pr-[2.437rem] pl-[2.5rem] gap-[2rem] min-w-[28.688rem] max-w-full z-[1] border-[1px] border-solid border-darkslategray-500 mq750:gap-[1rem] mq750:min-w-full">
                <div className="w-[44.125rem] h-[15.938rem] relative rounded-lg bg-gray-100 box-border hidden max-w-full border-[1px] border-solid border-darkslategray-500" />
                <FrameComponent titanGT76="Titan GT76" />
                <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-[0.875rem] text-accent-1 mq750:flex-wrap">
                  <div className="w-[21.563rem] flex flex-row items-start justify-start gap-[1rem] max-w-full mq450:flex-wrap">
                    <div className="relative text-[1rem] font-medium text-dimgray-100 inline-block min-w-[3.938rem] z-[2]">
                      Variants
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[3.188rem]">
                      <div className="relative [text-decoration:underline] tracking-[-0.02em] font-medium inline-block min-w-[4.875rem] z-[2]">
                        i3-12700HX
                      </div>
                      <div className="relative [text-decoration:underline] tracking-[-0.02em] font-medium inline-block min-w-[4.875rem] z-[2]">
                        i3-12700HX
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[3.188rem]">
                      <div className="relative [text-decoration:underline] tracking-[-0.02em] font-medium inline-block min-w-[4.875rem] z-[2]">
                        i5-12800HX
                      </div>
                      <div className="relative [text-decoration:underline] tracking-[-0.02em] font-medium inline-block min-w-[4.875rem] z-[2]">
                        i5-12800HX
                      </div>
                    </div>
                    <div className="flex-1 relative [text-decoration:underline] tracking-[-0.02em] font-medium inline-block min-w-[3.188rem] z-[2]">
                      i7-12900HX
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                    <button className="cursor-pointer py-[0.375rem] px-[1.437rem] bg-[transparent] rounded-sm flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-accent-1 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                      <div className="h-[2.063rem] w-[6.438rem] relative rounded-sm box-border hidden border-[1px] border-solid border-accent-1" />
                      <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[0.875rem] font-semibold font-inter text-whitesmoke text-left inline-block min-w-[3.5rem] z-[1]">
                        <span className="uppercase">V</span>alidate
                      </button>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch shadow-[0px_0px_10px_4px_#1a1a1a] rounded-lg bg-gray-200 box-border flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.625rem] gap-[1.687rem] max-w-full z-[2] text-[0.875rem] text-accent-1 border-[1px] border-solid border-darkslategray-500 mq1100:flex-wrap mq1100:pl-[1.25rem] mq1100:pr-[1.25rem] mq1100:pb-[1.25rem] mq1100:box-border">
              <div className="self-stretch w-[58.313rem] relative shadow-[0px_0px_10px_4px_#1a1a1a] rounded-lg bg-gray-200 box-border hidden max-w-full border-[1px] border-solid border-darkslategray-500" />
              <div className="h-[12.313rem] w-[10.75rem] flex flex-col items-start justify-start pt-[3.625rem] px-[0rem] pb-[0rem] box-border">
                <div className="self-stretch flex-1 relative z-[1]" />
              </div>
              <div className="flex-1 rounded-lg bg-gray-100 box-border flex flex-col items-start justify-start pt-[1.375rem] pb-[2.187rem] pr-[2.437rem] pl-[2.5rem] gap-[2rem] min-w-[28.688rem] max-w-full z-[1] border-[1px] border-solid border-darkslategray-500 mq750:gap-[1rem] mq750:min-w-full">
                <div className="w-[44.125rem] h-[15.938rem] relative rounded-lg bg-gray-100 box-border hidden max-w-full border-[1px] border-solid border-darkslategray-500" />
                <FrameComponent
                  titanGT76="Titan GT77"
                  groupInputMinWidth="3.875rem"
                />
                <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq750:flex-wrap">
                  <div className="w-[21.563rem] flex flex-row items-start justify-start gap-[1rem] max-w-full mq450:flex-wrap">
                    <div className="relative text-[1rem] font-medium text-dimgray-100 inline-block min-w-[3.938rem] z-[2]">
                      Variants
                    </div>
                    <a className="[text-decoration:underline] flex-1 relative tracking-[-0.02em] font-medium text-[inherit] inline-block min-w-[3.188rem] z-[2]">
                      i3-12700HX
                    </a>
                    <a className="[text-decoration:underline] flex-1 relative tracking-[-0.02em] font-medium text-[inherit] inline-block min-w-[3.188rem] z-[2]">
                      i5-12800HX
                    </a>
                    <a className="[text-decoration:underline] flex-1 relative tracking-[-0.02em] font-medium text-[inherit] inline-block min-w-[3.188rem] z-[2]">
                      i7-12900HX
                    </a>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                    <button className="cursor-pointer py-[0.375rem] px-[1.437rem] bg-[transparent] rounded-sm flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-darkslategray-100 hover:bg-dimgray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-200">
                      <div className="h-[2.063rem] w-[6.438rem] relative rounded-sm box-border hidden border-[1px] border-solid border-darkslategray-100" />
                      <div className="relative text-[0.875rem] font-semibold font-inter text-dimgray-100 text-left inline-block min-w-[3.5rem] z-[1]">
                        <span className="uppercase">V</span>alidate
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[31rem] w-[0.625rem] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-darkslategray-400 z-[2]">
            <div className="absolute top-[0rem] left-[0rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-darkslategray-400 w-full h-full hidden" />
            <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-darkslategray-100 w-[0.625rem] h-[7.5rem] z-[1]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DateAndNotification;
