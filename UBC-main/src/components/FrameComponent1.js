import { useMemo } from "react";

const FrameComponent1 = ({
  variant1,
  i312700HXRTX3050,
  propAlignSelf,
  propMinWidth,
  propPadding,
  propWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const variant1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const graphicsCardStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="flex flex-col items-start justify-start gap-[0.75rem] text-left text-[0.875rem] text-dimgray-100 font-inter"
      style={frameDivStyle}
    >
      <div
        className="relative font-medium inline-block min-w-[4.188rem] z-[2]"
        style={variant1Style}
      >
        {variant1}
      </div>
      <div
        className="rounded bg-darkslategray-300 flex flex-row items-start justify-start py-[0.375rem] pr-[0.25rem] pl-[0.437rem] whitespace-nowrap z-[4] text-whitesmoke border-[1px] border-solid border-darkslategray-100"
        style={graphicsCardStyle}
      >
        <div
          className="h-[2.063rem] w-[11.063rem] relative rounded bg-darkslategray-300 box-border hidden border-[1px] border-solid border-darkslategray-100"
          style={rectangleDiv1Style}
        />
        <div className="relative font-medium z-[5]">{i312700HXRTX3050}</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
