import { Card, Space } from "antd";

const RoundArcGradient = () => {
  return (
    <div>
      <Card className="mb-2.5 bg-transparent border-solid border-[#ccc] border-[1px]">
        <div className="mb-2 text-base">
          <h5>太极</h5>
        </div>
        <div className="w-[160px] h-[160px] rounded-full overflow-hidden flex shadow-lg">
          <div className="w-1/2 bg-black relative before:content-[''] before:absolute before:w-[80px] before:h-[80px] before:rounded-full before:top-0 before:right-[-40px] before:bg-black before:z-[1] after:content-[''] after:bg-white after:w-5 after:h-5 after:rounded-full after:absolute after:top-[30px] after:right-[-10px] after:z-[2]" />
          <div className="w-1/2 bg-white relative before:content-[''] before:absolute before:w-[80px] before:h-[80px] before:rounded-full before:bottom-0 before:left-[-40px] before:bg-white before:z-[1] after:content-[''] after:bg-black after:w-5 after:h-5 after:rounded-full after:absolute after:bottom-[30px] after:left-[-10px] after:z-[2]" />
        </div>
      </Card>

      <Card className="mb-2.5">
        <div className="mb-2 text-base">
          <h5>渐变环</h5>
        </div>
        <div
          className="w-[160px] h-[160px] rounded-full relative before:absolute before:rounded-full before:w-[120px] before:h-[120px] before:content-[''] before:top-5 before:left-5 before:bg-white before:z-[1] after:w-5 after:h-5 after:bg-[red] after:rounded-full after:content-[''] after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:z-[2]"
          style={{
            backgroundImage: "conic-gradient(red, transparent)",
          }}
        />
      </Card>

      <Card>
        <div className="mb-2 text-base">
          <h5>渐变箭头</h5>
        </div>
        <div>
          <Space>
            <div className="relative w-[60px] h-[52px] bg-gradient-to-r from-[#90EE90] to-[#008000]">
              <div className="before:absolute before:content-[''] before:z-10 before:top-0 before:right-0 before:border-solid before:border-white before:border-l-transparent before:border-b-transparent before:border-x-[8px] before:border-y-[13px] after:absolute after:content-[''] after:z-10 after:bottom-0 after:right-0 after:border-solid after:border-white after:border-t-transparent after:border-l-transparent after:border-x-[8px] after:border-y-[13px]" />
              <div className="before:absolute before:content-[''] before:z-10 before:w-[44px] before:h-[14px] before:top-0 before:left-0 before:bg-white after:absolute after:content-[''] after:z-10 after:w-[44px] after:h-[14px] after:bottom-0 after:left-0 after:bg-white" />
            </div>

            <div className="relative w-[60px] h-[52px] bg-gradient-to-l from-[#90EE90] to-[#008000]">
              <div className="before:absolute before:content-[''] before:z-10 before:top-0 before:left-0 before:border-solid before:border-white before:border-r-transparent before:border-b-transparent before:border-x-[8px] before:border-y-[13px] after:absolute after:content-[''] after:z-10 after:bottom-0 after:left-0 after:border-solid after:border-white after:border-t-transparent after:border-r-transparent after:border-x-[8px] after:border-y-[13px]" />
              <div className="before:absolute before:content-[''] before:z-10 before:w-[44px] before:h-[14px] before:top-0 before:right-0 before:bg-white after:absolute after:content-[''] after:z-10 after:w-[44px] after:h-[14px] after:bottom-0 after:right-0 after:bg-white" />
            </div>

            <div className="relative w-[52px] h-[60px] bg-gradient-to-b from-[#90EE90] to-[#008000]">
              <div className="before:absolute before:content-[''] before:z-10 before:bottom-0 before:left-0 before:border-solid before:border-white before:border-r-transparent before:border-t-transparent before:border-x-[13px] before:border-y-[8px] after:absolute after:content-[''] after:z-10 after:bottom-0 after:right-0 after:border-solid after:border-white after:border-t-transparent after:border-l-transparent after:border-x-[13px] after:border-y-[8px]" />
              <div className="before:absolute before:content-[''] before:z-10 before:w-[14px] before:h-[44px] before:top-0 before:left-0 before:bg-white after:absolute after:content-[''] after:z-10 after:w-[14px] after:h-[44px] after:top-0 after:right-0 after:bg-white" />
            </div>

            <div className="relative w-[52px] h-[60px] bg-gradient-to-t from-[#90EE90] to-[#008000]">
              <div className="before:absolute before:content-[''] before:z-10 before:top-0 before:left-0 before:border-solid before:border-white before:border-r-transparent before:border-b-transparent before:border-x-[13px] before:border-y-[8px] after:absolute after:content-[''] after:z-10 after:top-0 after:right-0 after:border-solid after:border-white after:border-b-transparent after:border-l-transparent after:border-x-[13px] after:border-y-[8px]" />
              <div className="before:absolute before:content-[''] before:z-10 before:w-[14px] before:h-[44px] before:bottom-0 before:left-0 before:bg-white after:absolute after:content-[''] after:z-10 after:w-[14px] after:h-[44px] after:bottom-0 after:right-0 after:bg-white" />
            </div>
          </Space>
        </div>
      </Card>
    </div>
  );
};

export default RoundArcGradient;
