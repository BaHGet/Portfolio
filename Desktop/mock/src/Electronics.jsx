const Electronics = ({mocks}) =>{
    return(
            mocks.filter(obj => obj.category ==='Electronics').map((item) =>{
                return(
                <tr key={item.name} className={item.className}>
                    <td 
                    className={item.stocked ? '' : 'red-data'}>{item.name}</td>
                    <td>{item.price}</td>
                </tr>
                )
            })
        )
}
export default Electronics;