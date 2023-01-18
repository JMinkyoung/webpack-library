import React from 'react';
import {DataDownloadModalType} from "./DataDownloadModal.type";

const DataDownloadModal: React.FC<DataDownloadModalType> = ({title, desc, type}) => {

  const renderDayType = (type: "day" | "week" | "month") => {
    let radioButton;

    if( type === "day") {
      radioButton = <><input type="radio"/> 일별</>
    }else if( type === "week") {
      radioButton = <><input type="radio"/> 일별<input type="radio"/> 주별</>
    }else {
      radioButton = <><input type="radio"/> 일별<input type="radio"/> 주별<input type="radio"/> 월별</>
    }

    return (
      <div>
        <label>추출 기준: </label>
        {radioButton}
      </div>
    )
  }
  return (
    <div className="border-solid border-2 border-sky-500 rounded-md flex flex-col relative w-1/2 h-80">
      <div className="border-solid border-b-2 border-sky-500 rounded-t-md pl-5 pr-5 flex justify-between items-center w-full h-12 border-solid">
        <span>{title}</span>
        <button>닫기</button>
      </div>
      <div className="flex flex-col justify-center items-center p-20">
        <p>{desc}</p>
        {renderDayType(type)}
      </div>
    </div>
  )
};

export default DataDownloadModal;