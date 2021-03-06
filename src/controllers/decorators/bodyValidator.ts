import "reflect-metadata";
import { MetadataKeys } from "./MetadataKeys";

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    Reflect.defineMetadata(MetadataKeys.Validator, keys, target, key);
  };
}
