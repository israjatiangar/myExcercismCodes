export function removeDuplicates(playlist) {
  const uniqList =  new Set(playlist);
  return Array.from(uniqList)
}

export function hasTrack(playlist, track) {
  let pList = new Set(playlist);
  let listSize = pList.size
  pList.add(track)
  return pList.size ===  listSize
}

export function addTrack(playlist, track) {
  const addedPlaylist = new Set(playlist)
  addedPlaylist.add(track)
  return Array.from(addedPlaylist)
}

export function deleteTrack(playlist, track) {
  const removedList = new Set(playlist)
  removedList.add(track)
  removedList.delete(track)
  return Array.from(removedList)
}

export function listArtists(playlist) {
  const getArtistList = new Set()
  for (let songTitle of playlist){
    if(songTitle.includes("-")){
      getArtistList.add(songTitle.slice(songTitle.indexOf("- ")+2))
    }else{
      getArtistList.add(songTitle)
    }
  } //Somewhere in the world there is a better way of doing this
  return Array.from(getArtistList)
}
