export default {
  async getDocCount(opts) {
    let count = 0
    await opts.fire
      .collection(opts.opt.coll)
      .get()
      .then((querySnapshot) => {
        count = querySnapshot.size
      })
    return count
    //this.pages = Math.ceil(this.count / this.perPage)
  },
}