import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";

import { IconSearch } from "../../../components/Icons";
import ItemSearch from "./ItemSearch";

const cx = classNames.bind(styles);

function Search() {
  const [value, setValue] = useState("");
  const [hideValue, setHideValue] = useState(true);
  const [datas, setDatas] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", (e) => { 
      if(wrapperRef.current && !wrapperRef.current.contains(e.target)){
        setHideValue(true);
      } 
    })
  }, [wrapperRef])


  useEffect(() => {
    if (value !== "") {
      fetch(
        `https://tiktok.fullstack.edu.vn/api/users/search?q=${value}&type=less`
      )
        .then((response) => response.json())
        .then((data) => {
          setDatas(data.data);
        });
    }
  }, [value]);

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className={cx("search")}>
        <>
          <input
            placeholder="Search"
            onChange={changeValue}
            onFocus={() => {
              setHideValue(false);
            }}
            value={value}
          />
          <button className={cx("IconSearch")}>
            <IconSearch height="16px" />
          </button>
        </>
        {value.length > 0 && !hideValue && (
          <div ref={wrapperRef} className={cx("searchResult")}>
            {
              datas.map((data)=>{
                return <ItemSearch to = {data.nickname} key={data.id} data = {data.nickname}></ItemSearch>
              })
            }
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
