export default {
    // 所有的对象属性必须添加在root节点下（防止和非公共组件的状态属性重复，重复会导致覆盖）
    root : {

        // 打开的tab历史记录
        historyTabs : [],

        // 面包屑信息
        crumbsInfo:[]
    }
}
