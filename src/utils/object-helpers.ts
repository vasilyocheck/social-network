export const changeObjInArr = (items: Array<any>, itemId: number, objPropName: string, newObjProp: any) => {
  return items.map((u) => (u[objPropName] === itemId ? { ...u, ...newObjProp } : u));
};
