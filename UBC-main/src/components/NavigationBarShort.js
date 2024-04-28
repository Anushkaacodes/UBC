const NavigationBarShort = () => {
  return (
    <div className="bg-gray-200 flex flex-col items-start justify-start pt-[9.437rem] px-[2.187rem] pb-[2.781rem] relative gap-[23.312rem] text-center text-[2.25rem] text-accent-1 font-nunito mq450:pt-[4rem] mq450:pb-[1.25rem] mq450:box-border mq1125:hidden mq1125:pt-[6.125rem] mq1125:pb-[1.813rem] mq1125:box-border">
      <div className="w-[0.063rem] h-[64.063rem] relative box-border hidden z-[0] border-r-[1px] border-solid border-darkslategray-500" />
      <div className="w-[6.375rem] h-[64rem] relative bg-gray-200 hidden z-[1]" />
      <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
        <img
          className="h-[22.688rem] w-[1.875rem] relative z-[1]"
          loading="lazy"
          alt=""
        />
      </div>
      <div className="flex flex-col items-end justify-start gap-[3.437rem]">
        <div className="flex flex-row items-start justify-end py-[0rem] pr-[0.381rem] pl-[0.437rem] box-border w-[1.875rem] h-[1.875rem]">
          <img
            className="h-[1.875rem] w-[1.056rem] relative z-[1]"
            loading="lazy"
            alt=""
          />
        </div>
        <img
          className="w-[1.875rem] h-[0.469rem] relative z-[1]"
          loading="lazy"
          alt=""
        />
      </div>
      <h1 className="!m-[0] w-[1.563rem] absolute top-[4.404rem] right-[1.654rem] text-inherit leading-[140%] capitalize font-extrabold font-inherit inline-block [transform:_rotate(-134.7deg)] [transform-origin:0_0] z-[1] mq450:text-[1.375rem] mq450:leading-[1.875rem] mq800:text-[1.813rem] mq800:leading-[2.5rem]">
        C
      </h1>
      <h1 className="!m-[0] w-[1.688rem] h-[3.131rem] absolute top-[3.203rem] left-[4.394rem] text-inherit leading-[140%] capitalize font-extrabold font-inherit inline-block [transform:_rotate(134.7deg)] [transform-origin:0_0] z-[2] mq450:text-[1.375rem] mq450:leading-[1.875rem] mq800:text-[1.813rem] mq800:leading-[2.5rem]">
        U
      </h1>
    </div>
  );
};

export default NavigationBarShort;
