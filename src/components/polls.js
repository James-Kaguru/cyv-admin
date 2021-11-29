import { useOptions } from '../hooks/useOptions';
import {usePoll} from '../hooks/usePoll'
import Options from './options';


const Poll = ({election_id}) => {
    const {isPending, documents :polls } = usePoll("polls",election_id)
    return ( 
        <section>
            {!isPending ? "loading..." :
                polls.map(({name,id}) =>
                <div key={id} className="mx-3 mb-4 p-3 shadow text-center">
                    <h3 className="text-capitalize">{name}</h3>
                    <Options poll_uid={id}/>
                </div>
                )
            }
        </section>
     );
}
 
export default Poll;