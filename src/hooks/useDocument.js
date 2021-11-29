import { useState,useEffect,useDebugValue } from "react"

import {db} from "../config/firebase-config" 
import { collection, onSnapshot, query, where} from 'firebase/firestore'

export const useDocument = (collectionName,param) => {
    //TODO remember to specify there where so that we can write one code sinclemost of the calls only have one where 
    //parameter
    const [document,setDocument] = useState([])
    const [isPending,setIsPending] = useState(false)
    useEffect(() => {
        const getDocument = async () => {  
            const q = query(collection(db, collectionName), where("param", "==", param));
            onSnapshot(q, (querySnapshot) => {
                setDocument(querySnapshot.docs.map(doc => ({...doc.data(),id: doc.id}))[0])
                setIsPending(true)
            });         
          }
        return getDocument()
    },[])

    useDebugValue(document ?? "Loading..")
    return {document,isPending}
}