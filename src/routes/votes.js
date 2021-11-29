import { useParams } from "react-router-dom";
import Poll from "../components/polls";
import {useDocument} from '../hooks/useDocument'
const Votes = () => {
    const params = useParams()
    
    const {isPending, document :election } = useDocument("election",params.electionParam)
    return ( 
        <section>
            {!isPending ? "loading..." :
                <div>
                    {election.name}
                    <Poll election_id={election.id}/>
                </div>
            }
        </section>
     );
}
 
export default Votes;