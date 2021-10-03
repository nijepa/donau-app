export default {
  async getFirestoreCol(fire, coll, field) {
    let collectionRef = null
    //console.log(this)
    collectionRef = await fire
          .collection(coll)
          .orderBy(field)
          .get()
    try {
      const collectionDoc = await collectionRef.docs.map((doc) => {
        const _id = doc.id
        const data = doc.data()
        return { _id, ...data }
      })
      return collectionDoc
    } catch (e) {
      alert(e)
      return
    }
  }
  
}

