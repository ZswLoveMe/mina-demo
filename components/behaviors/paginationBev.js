const paginationBev = Behavior({
    data: {
        dataArray: [],
        total: null,
        nonResult: false,
        loading: false
    },
    methods: {
        setMoreData(dataArray) {
            console.log(this.data.dataArray)
            const tempArray =
                this.data.dataArray.concat(dataArray)
            this.setData({
                dataArray: tempArray
            })
        },
        getCurrentStart() {
            return this.data.dataArray.length
        },
        setTotal(total) {
            if (total === 0) {
                this.setData({
                    nonResult: true
                })
            }
            this.data.total = total
        },
        hasMore() {
            if (this.data.dataArray.length >= this.data.total) {
                return false;
            } else {
                return true
            }
        },
        initialize() {
            this.setData({
                dataArray: [],
                nonResult: false,
                loading: false
            })
            this.data.total = null
        },
        locked() {
            this.setData({
                loading: true
            })
        },
        unLocked() {
            this.setData({
                loading: false
            })
        },
        isLocked() {
            return this.data.loading ? true : false
        },
    },
})

export {
    paginationBev
}