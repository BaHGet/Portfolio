import SportingGoods from './Sporting-Goods'
import Electronics from './Electronics'

const tableMaker = ({hide, mocks, onChange, onSubmit}) =>{
    
    return(
        <div>
            <h1>Mock</h1>
            <form onSubmit={onSubmit}>
            <input 
            type="text" 
            placeholder="Search..." 
            onChange={onChange}
            />
            <button type='button' onClick={onSubmit}>Search</button>
            </form>

            <p>
                <input type="checkbox" onClick={hide}/>
                Only show products in stock
            </p>

            <table style={{margin : 'auto'}}>
            <thead>
                <tr>
                <td>Name</td>
                <td>Price</td>
                </tr>
            </thead>
            <tbody>
                <tr><th colSpan="2">Sporting Goods</th></tr>
                <SportingGoods mocks={mocks} />
                <tr><th colSpan="2">Electronics</th></tr>
                <Electronics mocks={mocks} />
            </tbody>
            </table>
        </div>
    )
}

export default tableMaker