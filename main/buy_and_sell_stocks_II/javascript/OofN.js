var maxProfit = function(prices) {
    let profits=0;
    let min=prices[0];
    let max=prices[0];
    for(let i=1; i<prices.length; i++){
//       search for lowest price before climb then buy
        if (prices[i]<min){
            min=prices[i];
            max=prices[i];
        }
//       search for highest price to sell at before dip
        if(prices[i]>max){
            max=prices[i];
        }
//      sell when prices peak before they dip 
        if (prices[i-1]<prices[i]){
            profits+=max-min;
            min=prices[i];
            max=prices[i];
        }
    }
    return profits;
};
