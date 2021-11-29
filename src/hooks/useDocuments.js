import { useState,useEffect,useDebugValue } from "react"

import {db} from "../config/firebase-config" 
import { collection, onSnapshot } from 'firebase/firestore'

export const useDocuments = (collectionName) => {
    const [documents,setDocuments] = useState([])
    const [isPending,setIsPending] = useState(false)
    useEffect(() => {
        const getDocuments = async () => {  
            onSnapshot(collection(db, collectionName),(snapshot) => {
                setDocuments(snapshot.docs.map(doc => ( {...doc.data(),id: doc.id} )))
                setIsPending(true)
            })          
          }
        return getDocuments()
    },[])

    useDebugValue(documents ?? "Loading..")
    return {documents,isPending}
}