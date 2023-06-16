/* eslint-disable prettier/prettier */

export function usePeopleInfo() {
  
    async function getPeopleInfo() {
    try {
      const res = await fetch('http://localhost:6060/info')
      const peopleInfo = res.json()
      return peopleInfo
    } catch (error) {
      console.log(error)
    }
  }

  return getPeopleInfo
}
