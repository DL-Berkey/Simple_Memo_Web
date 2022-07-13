export default class ListManager {
    constructor(memoList, trashList) {
        this.memoList = memoList;
        this.trashList = trashList;
    }


    addMemoList(memo) {
        this.memoList.appendChild(memo);
    }

    
    removeMemoList(memo) {
        this.memoList.removeChild(memo);
    }


    addMemoListFromTrashList(memo) {

    }
}