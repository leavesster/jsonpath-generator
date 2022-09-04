import type { ArrayType } from "./List.svelte";
import type { ObjType } from "./Obj.svelte";
import type { Primitive } from "./Value.svelte";

declare global {
    interface Window {
        json: {
            set: any;
        }
    }
}

export function isArray(obj: Primitive | ObjType | ArrayType): obj is ArrayType {
    return Array.isArray(obj);
}
export function isObjType(obj: Primitive | ObjType | ArrayType): obj is ObjType {
    return !isArray(obj) && typeof obj === "object";
}
export function isPrimitive(obj: Primitive | ObjType | ArrayType): obj is Primitive {
    return !isArray(obj) && !isObjType(obj);
}