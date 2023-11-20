import "./index.css";

const Rabbit = () => {
  return (
    <div className="rabbit">
      {/* 头部 */}
      <div className="rabbit-head">
        {/* 面部 */}
        <div className="rabbit-face">
          {/* 眼睛 */}
          <div className="rabbit-eye rabbit-eye-left" />
          <div className="rabbit-eye rabbit-eye-right" />
          {/* 脸部下部 */}
          <div className="rabbit-face-lower">
            <div className="rabbit-nose" />
            <div className="rabbit-mouth">
              <div className="rabbit-mouth-outer" />
              <div className="rabbit-mouth-inner" />
            </div>
            <div className="rabbit-mouth-line" />
          </div>
          {/* 腮红 */}
          <div className="rabbit-blush rabbit-blush-left" />
          <div className="rabbit-blush rabbit-blush-right" />
        </div>
        {/* 耳朵 */}
        <div className="rabbit-ear rabbit-ear-left-wrap">
          <div className="rabbit-ear-left"></div>
        </div>
        <div className="rabbit-ear rabbit-ear-right-wrap">
          <div className="rabbit-ear-left"></div>
        </div>
      </div>

      {/* 身体 */}
      <div className="rabbit-body">
        {/* 躯干 */}
        <div className="rabbit-torso" />
        {/* 围脖 */}
        <div className="rabbit-neck" />
        {/* 手臂 */}
        <div className="rabbit-arm rabbit-arm-left" />
        <div className="rabbit-arm rabbit-arm-right" />
        {/* 腿 */}
        <div className="rabbit-leg rabbit-leg-left">
          <div className="rabbit-leg-foot">
            <div className="rabbit-leg-foot-pad"></div>
          </div>
        </div>
        <div className="rabbit-leg rabbit-leg-right">
          <div className="rabbit-leg-foot">
            <div className="rabbit-leg-foot-pad"></div>
          </div>
        </div>
        {/* 尾巴 */}
        <div className="rabbit-tail" />
      </div>
    </div>
  );
};

export default Rabbit;
