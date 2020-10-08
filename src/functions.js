/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export function getById (element) {
  var id = element
  axios.get('/item/' + id + '.json').then(result => {
    return result
  }).catch(e => {
    return e
  })
}
