const PREFIX_API_1 = "http://192.168.8.166:8091";

export default {
  dataList: `${PREFIX_API_1}/FileDirOpt/getAllJsonFileJSON`,
  addDataItem: `${PREFIX_API_1}/FileDirOpt/writeJsonFile`,
  getCataContent: `${PREFIX_API_1}/FileDirOpt/getJsonByPath`,
  addJsonNode: `${PREFIX_API_1}/FileDirOpt/addJsonNode`,
  delJsonFile: fileName =>
    `${PREFIX_API_1}/FileDirOpt/delJsonFile?fileName=${fileName}`,
  delJsonChildrenNode: (id, fileName) =>
    `${PREFIX_API_1}/FileDirOpt/delJsonNode?id=${id}&fileName=${fileName}`,
  editJsonNode: `${PREFIX_API_1}/FileDirOpt/updJsonNode`
};
