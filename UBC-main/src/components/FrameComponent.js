import { useMemo } from "react";

const FrameComponent = ({ titanGT76, groupInputMinWidth }) => {
  const groupInputStyle = useMemo(() => {
    return {
      minWidth: groupInputMinWidth,
    };
  }, [groupInputMinWidth]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full text-left text-[1.5rem] text-text-300 font-inter">
      <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem] mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[0.25rem]">
          <div className="flex flex-row items-start justify-start gap-[0.5rem]">
            <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
              <div className="w-[1.313rem] h-[1.5rem] relative z-[2]" />
            </div>
            <h3 className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[2.75rem] z-[2] mq450:text-[1.188rem]">
              MSI
            </h3>
          </div>
          <div className="relative text-[0.75rem] font-medium text-dimgray-100 z-[2]">
            Laptop / Gaming Laptop
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[0.5rem] px-[0.687rem] bg-accent-1 rounded-sm flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-chocolate-100">
          <div className="h-[2.063rem] w-[6.438rem] relative rounded-sm bg-accent-1 hidden" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[0.875rem] font-semibold font-inter text-whitesmoke text-left inline-block min-w-[5.063rem] z-[1]">
            <span className="uppercase">A</span>dd Review
          </button>
        </button>
      </div>
      <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[1.25rem] text-[1rem] text-dimgray-100 mq750:flex-wrap">
        <div className="w-[23.813rem] flex flex-row items-start justify-start gap-[1rem] max-w-full mq750:flex-wrap">
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[1rem] pl-[0rem] gap-[0.5rem]">
            <div className="relative font-medium inline-block min-w-[3rem] z-[2]">
              Model
            </div>
            <div className="relative text-[0.875rem] font-semibold text-text-300 inline-block min-w-[4.688rem] z-[2]">
              {titanGT76}
            </div>
          </div>
          <div className="h-[3.5rem] w-[0rem] relative z-[2] mq750:w-full mq750:h-[0rem]" />
          <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[1rem] pl-[0rem] box-border gap-[0.5rem] min-w-[4.875rem]">
            <div className="relative font-medium inline-block min-w-[6.5rem] z-[2]">
              Manufacturer
            </div>
            <div className="relative text-[0.875rem] font-semibold text-text-300 z-[2]">
              <p className="m-0">Micro-Star</p>
              <p className="m-0">International</p>
            </div>
          </div>
          <div className="h-[3.5rem] w-[0rem] relative z-[2] mq750:w-full mq750:h-[0rem]" />
          <div className="flex flex-col items-start justify-start gap-[0.437rem]">
            <div className="relative inline-block min-w-[6.625rem] z-[2]">
              Manufactured
            </div>
            <div className="flex flex-row items-start justify-start gap-[0.5rem] text-[0.875rem] text-text-300">
              <div className="h-[1.25rem] w-[1.25rem] relative rounded-69xl z-[2]" />
              <div className="relative font-semibold inline-block min-w-[2.5rem] z-[2]">
                China
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem]">
          <input
            className="[outline:none] bg-[transparent] rounded-sm box-border flex flex-row items-start justify-start py-[0.375rem] px-[1rem] font-inter font-semibold text-[0.875rem] text-whitesmoke min-w-[3.875rem] z-[2] border-[1px] border-solid border-accent-1 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100"
            value="Add Asset"
            placeholder="Add Asset"
            type="text"
            style={groupInputStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
