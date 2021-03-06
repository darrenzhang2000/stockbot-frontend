import axios from 'axios'

const getTrackedStocks = async (email) => {
    var headers = {
        'accept': 'application/json',
        'X-API-KEY': 'm3a4Yjdgrx4hk0LBwFLnz9JPbIdhZE965VasGCNc'
    };

    var data = {
        email: email,
    }

    var options = {
        method: 'GET',
        url: 'https://morning-brushlands-41565.herokuapp.com/ownedStocks/',
        headers: headers,
        params: data
    };

    let tickers = []
    await axios(options).then(res => {
        tickers = res.data.ownedStocks.map(ownedStock => ownedStock.ticker)
    })
    return tickers

}

const getStockActions = (tickers) => {
    console.log('getting stock actions', tickers)
    
}

export const runTradingAlgorithm = async () => {
    getTrackedStocks('testuser@gmail.com').then(
        tickers => {
            setTimeout(() => {
                console.log('waiting 50 secs')
                getStockActions(tickers)
                runTradingAlgorithm()
            }, 50000)
        }
    )
}
