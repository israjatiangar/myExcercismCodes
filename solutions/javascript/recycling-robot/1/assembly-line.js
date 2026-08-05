import { ElectronicDevice } from './lib.js';

export function isBoolean(value) {
  return typeof(value) === "boolean"
}

export function isNumber(value) {
  return typeof value === "bigint" ||
    (typeof value ==="number" &&
     !isNaN(value) &&
     value.toString() !== "Infinity"
    )
}

export function isObject(value) {
  return typeof(value) === "object" && value !== null
}

export function isNumericString(value) {
  if(value==="" ||value===null){return false}
  return typeof(value) === "string" && isNumber(Number(value)) 
}

//Things before this line were much harder that after

export function isElectronic(object) {
  return object instanceof ElectronicDevice
}

export function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0
}

export function isEmptyArray(value) {
  return Array.isArray(value) && value.length<=0
}

export function hasType(object) {
  return "type" in object
}

export function assertHasId(object) {
  if ("id" in object){
  }else{
    throw new Error()
  }
}

export function hasIdProperty(object) {
  return Object.hasOwn(object,"id")
}

export function hasDefinedType(object) {
  return (Object.hasOwn(object,"type") && typeof(object.type) !== "undefined") &&
   (Object.hasOwn(object,"color") && typeof(object.color) !== "undefined")
}
