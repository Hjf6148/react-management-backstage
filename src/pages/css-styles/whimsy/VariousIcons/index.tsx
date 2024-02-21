import { Card } from "antd";

const VariousIcons = () => {
  return (
    <div>
      <Card className="mb-2.5">
        <div className="mb-2 text-base">
          <h5>Server图标</h5>
        </div>
        <div className="w-[100px] h-[100px] box-border rounded-full border-[#0000FF4C] border-solid border-[10px] border-t-white border-b-white relative before:absolute before:content-[''] before:w-[60px] before:h-[60px] before:border-[10px] before:box-border before:border-solid before:border-[#0000FF99] before:border-t-white before:border-b-white before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:z-[1] after:content-[''] after:absolute after:w-5 after:h-5 after:bg-[#0000ff] after:rounded-full after:z-[2] after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2" />
      </Card>

      <Card className="mb-2.5">
        <div className="mb-2 text-base">
          <h5>Vue图标</h5>
        </div>
        <div className="flex">
          <div className="relative justify-end border-[#41b882] border-solid border-x-[20px] border-y-[30px] border-l-transparent border-b-transparent">
            <div className="absolute -top-[30px] -right-[20px] z-[1] border-[#354a5f] border-solid border-x-[13px] border-y-[19px] border-l-transparent border-b-transparent" />
            <div className="absolute -top-[30px] -right-[20px] z-[2] border-white border-solid border-x-[5px] border-y-[8px] border-l-transparent border-b-transparent" />
          </div>
          <div className="relative justify-end border-[#41b882] border-solid border-x-[20px] border-y-[30px] border-r-transparent border-b-transparent">
            <div className="absolute -top-[30px] -left-[20px] z-[1] border-[#354a5f] border-solid border-x-[13px] border-y-[19px] border-r-transparent border-b-transparent" />
            <div className="absolute -top-[30px] -left-[20px] z-[2] border-white border-solid border-x-[5px] border-y-[8px] border-r-transparent border-b-transparent" />
          </div>
        </div>
      </Card>

      <Card>
        <div className="mb-2 text-base">
          <h5>React图标</h5>
        </div>
        <div className="w-[80px] h-[80px] relative">
          <div className="absolute top-1/4 border-solid border-[#00d0f2] border-[4px] box-border w-full h-1/2 rounded-[45%/50%] bg-transparent rotate-[56deg]" />
          <div className="absolute top-1/4 border-solid border-[#00d0f2] border-[4px] box-border w-full h-1/2 rounded-[45%/50%] bg-transparent -rotate-[56deg]" />
          <div className="absolute top-1/4 border-solid border-[#00d0f2] border-[4px] box-border w-full h-1/2 rounded-[45%/50%] bg-transparent" />
          <div className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 w-1/5 h-1/5 bg-[#00d0f2] rounded-full" />
        </div>
      </Card>
    </div>
  );
};

export default VariousIcons;
