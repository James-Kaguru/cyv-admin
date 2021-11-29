import { useOptions } from '../hooks/useOptions';

const FindTotal = (options) => {
    return options.map(o => o.count).reduce((a, b) => { return a + b });
}
const FindPercentage = (options,count) => {
    const sum = options.map(o => o.count).reduce((a, b) => { return a + b });
    if(count){
        const percent = count/sum *100
        return percent.toFixed(2)+"%"
    } else{
        return 0+"%"
    }
}
const Options  = ({poll_uid}) => {
    const {isPending, documents :options } = useOptions ("options",poll_uid) 
    return ( 
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Options</th>
                    <th>Count</th>
                    <th>Percent</th>
                </tr>
            </thead>
            <tbody>
                {!isPending ? <div className="spinner-border text-primary"/> :                 
                    options.map(({name,id,count}) =>
                    <tr key={id} >
                        <td>{name}</td> 
                        <td>{count}</td> 
                        <th><p>{!isPending ? "LOADING..." : FindPercentage(options,count) } </p></th>
                    </tr>                                                          
                )         
                }
            </tbody>
            <thead>
                <tr>
                    <th>Total</th>
                    <th><p>{!isPending ? "LOADING..." : FindTotal(options)} </p></th>
                </tr>
            </thead>
            
        </table>
     );
}
 
export default Options;