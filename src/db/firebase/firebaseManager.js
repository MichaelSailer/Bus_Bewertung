import firebase from './firebaseConfig'

class FirebaseManager {

    db = firebase.firestore();

    sendRating = (rating) => {
        return new Promise((resolve,reject) => {
            
            this.db.collection("rating").add({...rating}).then(res => {
                console.log("SUCCESS")
                resolve({...rating,docId: res.id})
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    
    

    getLesenswert = (useCursor) => {
        return new Promise((resolve,reject) => {
                let query = this.db.collection("feed")
                if(useCursor || this.lesenswertItemCursor !== null){
                    query = query.startAfter(this.lesenswertItemCursor)
                }
                query.limit(6).get()
                .then(docs => {
                    let lesenswertes = []
                    docs.forEach(doc => {
                        lesenswertes.push({...doc.data(),id: doc.id})
                    })
                    this.lesenswertItemCursor = docs.docs[docs.docs.length-1]
                    resolve(lesenswertes)
                }).catch(err => reject(err))
            
        })
    }

  



    
}


export default FirebaseManager