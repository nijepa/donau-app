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
      if (opts.opt.filter) {
        collectionRef = await opts.fire
          .collection(opts.opt.coll)
          .orderBy(opts.opt.field, opts.opt.direction)
          .limit(opts.opt.limit)
          .where('date', '>=', new Date(opts.opt.dateStart))
          .where('date', '<=', new Date(opts.opt.dateEnd))
          .where(opts.opt.filter, '==', true)
          .get()
      } else {
        collectionRef = await opts.fire
          .collection(opts.opt.coll)
          .orderBy(opts.opt.field, opts.opt.direction)
          .limit(opts.opt.limit)
          .get()
      }
    }
    try {
      let last = null
      let first = null
       
        //first = collectionRef.docs[0]
      const collectionDoc = await collectionRef.docs.map((doc) => {
        const _id = doc.id
        const data = doc.data()
        //last = collectionRef.docs[collectionRef.docs.length - 1]
        //console.log(last)
        return { _id, ...data }
      })
      return { data: collectionDoc, last, first }
    } catch (e) {
      alert(e)
      return
    }
  },
}
