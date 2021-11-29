import { useState,useEffect,useDebugValue } from "react"

import {db} from "../config/firebase-config" 
import { collection, onSnapshot, query, where} from 'firebase/firestore'

export const usePoll = (collectionName,election_uid) => {
    const [documents,setDocument] = useState([])
    const [isPending,setIsPending] = useState(false)
    useEffect(() => {
        const getDocument = async () => {  
            const q = query(collection(db, collectionName), where("election_uid", "==", election_uid));
            onSnapshot(q, (querySnapshot) => {
                setDocument(querySnapshot.docs.map(doc => ({...doc.data(),id: doc.id})))
                setIsPending(true)
            });         
          }
        return getDocument()
    },[])

    useDebugValue(documents ?? "Loading..")
    return {documents,isPending}
}