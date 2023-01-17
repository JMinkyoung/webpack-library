import React from "react";
import { Story } from '@storybook/react/types-6-0';
import DataDownloadModal from "./DataDownloadModal";
import {DataDownloadModalType} from "./DataDownloadModal.type";

export default {
  title: "DataDownloadModal",
  component: DataDownloadModal,
};

const Template: Story<DataDownloadModalType> = args => <DataDownloadModal {...args}/>

export const Day = Template.bind({})
Day.args = {
  type: "day",
  desc: "기준일을 선택하고 엑셀 다운로드 버튼을 클릭하세요.",
  title: "정기상담, 첫상담, 첫정기상담 이력"
}