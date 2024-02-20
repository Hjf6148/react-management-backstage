import { Card } from "antd";

const Rainbow = () => {
  return (
    <div>
      <Card className="mb-2.5">
        <div className="mb-2 text-base">
          <h5>红橙黄绿蓝靛紫</h5>
          <div className="text-[#999] text-sm">padding实现</div>
        </div>
        <div className="box-border rounded-tl-full rounded-tr-full w-[200px] h-[100px] p-2.5 pb-0 bg-[purple]">
          <div className="box-border rounded-tl-full rounded-tr-full p-2.5 pb-0 bg-[indigo] h-full">
            <div className="box-border rounded-tl-full rounded-tr-full p-2.5 pb-0 bg-[blue] h-full">
              <div className="box-border rounded-tl-full rounded-tr-full p-2.5 pb-0 bg-[green] h-full">
                <div className="box-border rounded-tl-full rounded-tr-full p-2.5 pb-0 bg-[yellow] h-full">
                  <div className="box-border rounded-tl-full rounded-tr-full p-2.5 pb-0 bg-[orange] h-full">
                    <div className="box-border rounded-tl-full rounded-tr-full p-2.5 pb-0 bg-[red] h-full">
                      <div className="box-border rounded-tl-full rounded-tr-full p-2.5 pb-0 bg-white h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="mb-2.5">
        <div className="mb-2 text-base">
          <h5>紫靛蓝绿黄橙红</h5>
          <div className="text-[#999] text-sm">padding实现</div>
        </div>
        <div className="box-border rounded-tl-full rounded-tr-full w-[200px] h-[100px] p-[10px] pb-0 bg-[red]">
          <div className="box-border rounded-tl-full rounded-tr-full p-[10px] pb-0 bg-[orange] h-full">
            <div className="box-border rounded-tl-full rounded-tr-full p-[10px] pb-0 bg-[yellow] h-full">
              <div className="box-border rounded-tl-full rounded-tr-full p-[10px] pb-0 bg-[green] h-full">
                <div className="box-border rounded-tl-full rounded-tr-full p-[10px] pb-0 bg-[blue] h-full">
                  <div className="box-border rounded-tl-full rounded-tr-full p-[10px] pb-0 bg-[indigo] h-full">
                    <div className="box-border rounded-tl-full rounded-tr-full p-[10px] pb-0 bg-[purple] h-full">
                      <div className="box-border rounded-tl-full rounded-tr-full p-[10px] pb-0 bg-white h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="mb-2 text-base">
          <h5>红橙黄绿蓝靛紫</h5>
          <div className="text-[#999] text-sm">border实现</div>
        </div>
        <div className="box-border rounded-tl-full rounded-tr-full w-[200px] h-[100px] border-solid border-[purple] border-[10px] border-b-0">
          <div className="box-border rounded-tl-full rounded-tr-full border-solid border-[indigo] border-[10px] border-b-0 h-full">
            <div className="box-border rounded-tl-full rounded-tr-full border-solid border-[blue] border-[10px] border-b-0 h-full">
              <div className="box-border rounded-tl-full rounded-tr-full border-solid border-[green] border-[10px] border-b-0 h-full">
                <div className="box-border rounded-tl-full rounded-tr-full border-solid border-[yellow] border-[10px] border-b-0 h-full">
                  <div className="box-border rounded-tl-full rounded-tr-full border-solid border-[orange] border-[10px] border-b-0 h-full">
                    <div className="box-border rounded-tl-full rounded-tr-full border-solid border-[red] border-[10px] border-b-0 h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Rainbow;
