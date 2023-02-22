import React, { useState, useRef, useEffect, forwardRef } from "react";
import classNames from "classnames/bind";
import {
  IconProtect,
  IconAppearance,
  IconLanguage,
  IconSetting,
  IconEllipsis
} from "../../../components/Icons";
import styles from "./Setting.module.scss";

const dataSettings = [
  {
    name: "Your data in Youtube",
    icon: IconProtect,
    childData: [],
  },
  {
    name: "Appearance: Device theme",
    icon: IconAppearance,
    childData: [],
  },
  {
    name: "Language: English",
    icon: IconLanguage,
    childData: [],
  },
  {
    name: "Settings",
    icon: IconSetting,
    childData: [],
  },
];

const cx = classNames.bind(styles);

const Setting = forwardRef((props, ref) => {
  const [active, setActive] = useState(false);
  const divActiveRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (divActiveRef.current && !divActiveRef.current.contains(e.target) && active) {
        setActive(false);
      }
    });
  }, [active]);


  return (
    <div className={cx("setting")} ref={ref}>
      <div
        onClick={() => {
          return !active ? setActive(true) : setActive(false);
        }}
        className={cx("buttonOpenSet")}
      >
        {<IconEllipsis className={cx('iconSet')} />}
      </div>
      {active && (
        <div ref={divActiveRef} className={cx("dataInSetting")}>
          {dataSettings.map((dataSetting, index) => {
            return (
              <div key={index} className={cx("itemDataInSetting")}>
                <dataSetting.icon className={cx("icon")} />
                {dataSetting.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
});

export default Setting;
