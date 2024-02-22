import { Card } from "antd";
import { PropsWithChildren } from "react";

type IconContainerProps = PropsWithChildren<{
  title?: string;
}>;
const IconContainer = ({ children, title }: IconContainerProps) => {
  return (
    <div className="flex flex-col items-center p-2.5">
      {children}
      <div className="text-base">
        <h5>{title}</h5>
      </div>
    </div>
  );
};

const VariousIcons = () => {
  return (
    <Card>
      <div className="flex flex-wrap items-center">
        <IconContainer title="Server 图标">
          <div className="w-[100px] h-[100px] box-border rounded-full border-[#0000FF4C] border-solid border-[10px] border-t-white border-b-white relative before:absolute before:content-[''] before:w-[60px] before:h-[60px] before:border-[10px] before:box-border before:border-solid before:border-[#0000FF99] before:border-t-white before:border-b-white before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:z-[1] after:content-[''] after:absolute after:w-5 after:h-5 after:bg-[#0000ff] after:rounded-full after:z-[2] after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2" />
        </IconContainer>

        <IconContainer title="Vue 图标">
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
        </IconContainer>

        <IconContainer title="React 图标">
          <div className="w-[80px] h-[80px] relative">
            <div className="absolute top-1/4 border-solid border-[#00d0f2] border-[4px] box-border w-full h-1/2 rounded-[45%/50%] bg-transparent rotate-[56deg]" />
            <div className="absolute top-1/4 border-solid border-[#00d0f2] border-[4px] box-border w-full h-1/2 rounded-[45%/50%] bg-transparent -rotate-[56deg]" />
            <div className="absolute top-1/4 border-solid border-[#00d0f2] border-[4px] box-border w-full h-1/2 rounded-[45%/50%] bg-transparent" />
            <div className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 w-1/5 h-1/5 bg-[#00d0f2] rounded-full" />
          </div>
        </IconContainer>

        <IconContainer title="And Design 图标">
          <div className="p-3">
            <div className="relative w-[60px] h-[60px] -rotate-45">
              <div className="absolute top-0 left-0 w-full h-2 rounded-lg bg-[#1677e1]" />
              <div className="absolute top-0 left-0 w-2 h-full rounded-lg bg-[#1677e1]" />
              <div className="absolute top-0 right-0 w-2 h-1/2 rounded-lg bg-[#1677e1]" />
              <div className="absolute bottom-0 left-0 w-1/2 h-2 rounded-lg bg-[#1677e1]" />
              <div className="absolute bottom-0 right-0 w-2 h-1/3 rounded-lg bg-[#f53c4b]" />
              <div className="absolute bottom-0 right-0 w-1/3 h-2 rounded-lg bg-[#f53c4b]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-lg bg-[#f53c4b]" />
            </div>
          </div>
        </IconContainer>

        <IconContainer title="AntV 图标">
          <div className="relative w-[60px] h-[60px]">
            <div className="absolute top-0 left-0 w-full h-2 rounded-lg flex justify-between">
              <div className="w-3/5 h-2 rounded-lg bg-[#a16cf1]" />
              <div className="w-1/4 h-2 rounded-lg bg-[#ff760c]" />
            </div>
            <div className="absolute top-[4px] -left-[2px] w-2 h-full rounded-lg bg-[#a16cf1] origin-top-left -rotate-[30deg]" />
            <div className="absolute -top-[1px] -right-[3px] w-2 h-full rounded-lg origin-top-left rotate-[30deg] flex flex-col justify-between">
              <div className="w-2 h-1/4 rounded-lg bg-[#ff760c]" />
              <div className="w-2 h-3/5 rounded-lg bg-[#a16cf1]" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-4 border-solid border-transparent border-y-[10px] border-x-[6px] border-t-[#ffa126]" />
          </div>
        </IconContainer>

        <IconContainer title="Youtube 图标">
          <div className="w-[80px] h-[50px] box-border relative border-solid border-[#c32f2b] border-[8px] rounded-[20%/35%] before:absolute before:z-[1] before:content-[''] before:border-solid before:border-transparent before:border-y-[5px] before:border-x-[8px] before:left-1/2 before:-translate-x-1/2 before:bottom-1/2 before:border-l-[#c32f2b] before:border-b-[#c32f2b] after:absolute after:z-[1] after:content-[''] after:border-solid after:border-transparent after:border-y-[5px] after:border-x-[8px] after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:border-l-[#c32f2b] after:border-t-[#c32f2b]" />
        </IconContainer>

        <IconContainer title="HarmonyOS 图标">
          <div className="w-[60px] h-[70px] flex flex-col justify-between items-center">
            <div className="w-[60px] h-[60px] box-border border-solid border-[#1677ff] rounded-full border-[5px]" />
            <div className="w-[35px] h-[5px] bg-[#1677ff]" />
          </div>
        </IconContainer>

        <IconContainer title="Wifi 图标">
          <div className="overflow-hidden w-[74px] h-[50px]">
            <div className="w-[100px] h-[100px] relative left-1/2 top-0 -translate-x-1/2">
              <div className="absolute z-0 border-solid border-transparent border-t-[#007ef6] border-[6px] box-border h-full w-full rounded-full" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] border-solid border-transparent border-t-[#007ef6] border-[6px] box-border rounded-full w-[75%] h-[75%]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] border-solid border-transparent border-t-[#007ef6] border-[6px] box-border rounded-full w-[50%] h-[50%]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[110%] z-[3] w-[10%] h-[10%] bg-[#007ef6] rounded-full" />
            </div>
          </div>
        </IconContainer>

        <IconContainer title="List 图标">
          <div className="w-[60px] h-[45px] flex flex-col justify-between">
            <div className="flex justify-between">
              <div className="w-[8px] h-[8px] rounded-md bg-black" />
              <div className="w-[75%] h-[8px] rounded-md bg-black" />
            </div>
            <div className="flex justify-between">
              <div className="w-[8px] h-[8px] rounded-md bg-black" />
              <div className="w-[75%] h-[8px] rounded-md bg-black" />
            </div>
            <div className="flex justify-between">
              <div className="w-[8px] h-[8px] rounded-md bg-black" />
              <div className="w-[75%] h-[8px] rounded-md bg-black" />
            </div>
          </div>
        </IconContainer>

        <IconContainer title="Scan 图标">
          <div className="w-[60px] h-[60px] relative box-border border-solid border-[#1677e1] border-4 rounded-xl flex items-center">
            <div className="before:absolute before:content-[''] before:-top-1 before:left-1/2 before:-translate-x-1/2 before:w-2/5 before:h-1 before:bg-white before:z-10 after:absolute after:content-[''] after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-2/5 after:h-1 after:bg-white after:z-10" />
            <div className="before:absolute before:content-[''] before:-left-1 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-2/5 before:bg-white before:z-10 after:absolute after:content-[''] after:-right-1 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-2/5 after:bg-white after:z-10" />
            <div className="w-full h-1 bg-[#1677e1] rounded-sm" />
          </div>
        </IconContainer>

        <IconContainer title="PowerOff 图标">
          <div className="w-[60px] h-[60px] rounded-full border-solid border-[red] border-[5px] box-border relative before:absolute before:content-[''] before:-top-[5px] before:left-1/2 before:-translate-x-1/2 before:bg-white before:w-1/2 before:h-2.5 before:z-0 after:content-[''] after:absolute after:left-1/2 after:-top-[5px] after:-translate-x-1/2 after:w-[5px] after:h-3/5 after:bg-[red]" />
        </IconContainer>

        <IconContainer title="Stop 图标">
          <div className="w-[60px] h-[60px] rounded-full border-solid border-[red] border-[5px] box-border relative after:absolute after:content-[''] after:w-full after:h-[5px] after:bg-[red] after:top-1/2 after:left-0 after:-translate-y-1/2 after:rotate-45" />
        </IconContainer>

        <IconContainer title="Lock 图标">
          <div>
            <div className="w-10 h-8 mx-auto border-solid border-black border-4 border-b-0 rounded-t-full" />
            <div className="w-16 h-10 border-solid border-black border-4 rounded-md relative after:absolute after:content-[''] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-1 after:h-1.5 after:bg-black" />
          </div>
        </IconContainer>

        <IconContainer title="UnLock 图标">
          <div>
            <div className="w-10 h-8 mx-auto border-solid border-black border-4 border-b-0 rounded-t-full relative after:content-[''] after:absolute after:w-1 after:h-1.5 after:bottom-0 after:-left-1 after:bg-white" />
            <div className="w-16 h-10 border-solid border-black border-4 rounded-md relative after:absolute after:content-[''] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-1 after:h-1.5 after:bg-black" />
          </div>
        </IconContainer>

        <IconContainer title="Love 图标">
          <div className="p-3.5 pb-2.5">
            <div className="w-10 h-10 bg-[red] relative before:absolute before:content-[''] before:w-full before:h-full before:top-0 before:-left-1/2 before:bg-[red] before:rounded-full after:absolute after:content-[''] after:w-full after:h-full after:left-0 after:-top-1/2 after:bg-[red] after:rounded-full rotate-45" />
          </div>
        </IconContainer>

        <IconContainer title="Sun 图标">
          <div className="w-20 h-20 rounded-full relative">
            <div className="w-full h-full before:absolute before:content-[''] before:w-full before:h-1.5 before:bg-orange-400 before:top-1/2 before:left-0 before:-translate-y-1/2 after:absolute after:content-[''] after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-full after:bg-orange-400" />
            <div className="w-full h-full before:absolute before:content-[''] before:w-full before:h-1.5 before:bg-orange-400 before:top-1/2 before:left-0 before:-translate-y-1/2 after:absolute after:content-[''] after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-full after:bg-orange-400 rotate-45 absolute top-0 left-0" />
            <div className="w-3/4 h-3/4 border-solid border-white bg-orange-400 border-[6px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="w-[45%] h-[45%] bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </IconContainer>

        <IconContainer title="Organizations 图标">
          <div className="w-[80px] h-[60px] relative before:absolute before:content-[''] before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-black after:absolute after:content-[''] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:border-solid after:border-black after:border-4 after:box-border after:w-[90%] after:h-3/4 after:rounded-t-lg">
            <div className="w-2/3 h-full border-solid border-black border-4 bg-white mx-auto relative z-10 rounded-t-lg">
              <div className="w-[80%] h-1 bg-black mx-auto mt-1.5 rounded-sm" />
              <div className="w-[80%] h-1 bg-black mx-auto mt-1.5 rounded-sm" />
              <div className="w-[80%] h-1 bg-black mx-auto mt-1.5 rounded-sm" />
            </div>
          </div>
        </IconContainer>
      </div>
    </Card>
  );
};

export default VariousIcons;
