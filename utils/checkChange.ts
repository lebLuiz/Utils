export const checkChange = (objValue: any, objCheck: any) => {
  const changed: any[] = []

  if (Object.keys(objValue).length > 0 && Object.keys(objCheck).length > 0) {
    for (let i in objValue) {
      if (JSON.stringify(objValue[i]) !== JSON.stringify(objCheck[i])) {
        changed.push(i)
      }
    }
  }
  return changed;
};