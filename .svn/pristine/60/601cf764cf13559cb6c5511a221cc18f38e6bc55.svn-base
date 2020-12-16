import request from "@/globals/request/axios.js";
import API from "@/globals/request/api.js";

const DataList = {
  getDataList() {
    return request.get(API.dataList);
  },
  addDataItem(params) {
    return request.post(API.addDataItem, params);
  },
  getCataContent(params) {
    return request.post(API.getCataContent, params);
  },
  addJsonNode(params) {
    return request.post(API.addJsonNode, params);
  },
  delJsonFile(fileName) {
    return request.post(API.delJsonFile(fileName));
  },
  delJsonChildrenNode(id, fileName) {
    return request.delete(API.delJsonChildrenNode(id, fileName));
  },
  editJsonNode(params) {
    return request.put(API.editJsonNode, params);
  }
};

export default DataList;
