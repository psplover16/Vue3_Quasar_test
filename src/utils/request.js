import axios from "axios";
import { getToken } from "@/utils/cookie";

export const getdata = async (url, method, data, showPopout = true) => {
  console.log(getToken());

  let senddata = {
    method: method,
    url,
    data,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  };
  if (getToken() == null || getToken() == undefined) {
    senddata.headers = {};
  }

  try {
    const getdata = await axios(senddata);
    console.log(getdata)
    // throw new Error('錯誤');

    if (getdata.data.status != 200) {
      if (showPopout) {

      }
    }
    return getdata;
    // else {
    //     return getdata
    // }
  } catch (error) {
    return error.message;
  }
  // .post(`http://${url}/api`, { params: { status: urlParams } })
};
