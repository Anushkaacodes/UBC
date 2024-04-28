const FrameComponent2 = () => {
  return (
    <header className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full text-left text-[1.75rem] text-accent-1 font-inter">
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem]">
        <div className="flex flex-row items-start justify-start gap-[0.5rem]">
          <img
            className="h-[2.5rem] w-[2.5rem] relative min-h-[2.5rem]"
            loading="lazy"
            alt=""
          />
          <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
            <h2 className="m-0 relative text-inherit font-semibold font-inherit whitespace-nowrap">
              Product Profile
            </h2>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[2rem] max-w-full text-[1rem] text-dimgray-100 mq800:gap-[1rem]">
          <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
            <div className="relative leading-[1rem] whitespace-nowrap">
              11 February, Saturday
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[2rem] h-[2rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.187rem] pb-[0rem] pr-[0.25rem] pl-[0rem] text-text-300">
            <div className="flex flex-col items-start justify-start">
              <div className="relative font-semibold inline-block min-w-[5.625rem] whitespace-nowrap">
                Raghav Jha
              </div>
              <div className="relative text-[0.75rem] text-dimgray-100 inline-block min-w-[3.125rem] z-[1]">
                Scientist
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.5rem]">
            <div className="h-[2.5rem] w-[2.5rem] relative shadow-[0px_2px_8px_rgba(245,_245,_245,_0.2)] rounded-[50%] bg-gainsboro" />
            <img
              className="h-[2.5rem] w-[2.5rem] relative overflow-hidden shrink-0 min-h-[2.5rem]"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="self-stretch h-[0.063rem] relative box-border z-[1] border-t-[1px] border-solid border-darkslategray-500" />
    </header>
  );
};

export default FrameComponent2;
