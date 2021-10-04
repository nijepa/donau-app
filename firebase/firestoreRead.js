export default {
  async getFirestoreCol(opts) {
    let collectionRef = null
    if (opts.nav.type) {
      opts.nav.type === 'next'
        ? (collectionRef = await opts.fire
            .collection(opts.opt.coll)
            .orderBy(opts.opt.field) //, 'desc'
            .startAfter(opts.nav.last)
            .limit(opts.opt.limit)
            .get())
        : (collectionRef = await opts.fire
            .collection(opts.opt.coll)
            .orderBy(opts.opt.field)
            .endBefore(opts.nav.first)
            .limitToLast(opts.opt.limit)
            .get())
    } else {
      collectionRef = await opts.fire
        .collection(opts.opt.coll)
        .orderBy(opts.opt.field)
        .limit(opts.opt.limit)
        .get()
    }
    try {
      let last = null
      let first = null
      last = collectionRef.docs[collectionRef.docs.length - 1] 
        first = collectionRef.docs[0]
      const collectionDoc = await collectionRef.docs.map((doc) => {
        const _id = doc.id
        const data = doc.data()
        
        console.log(last)
        return { _id, ...data }
      })
      return { data: collectionDoc, last, first }
    } catch (e) {
      alert(e)
      return
    }
  },
}
