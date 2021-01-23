// Reducer => A function that takes in the old state, and an action => new State

const contextReducer = (state, action) => {
    let transactions;
    switch (action.type) {
        case "DELETE_TRANSACTION":
            transactions = state.filter(transaction => transaction.id !== action.payload);
            localStorage.setItem('transactions', JSON.stringify(transactions));
            return transactions;
            break;
        
        case "ADD_TRANSACTION":
            transactions = [action.payload , ...state];
            localStorage.setItem('transactions', JSON.stringify(transactions));
            return transactions;
            break;
        
        default:
            return state;
            break;
    }

}

export default contextReducer;


