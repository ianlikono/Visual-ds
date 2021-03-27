import vm from "vm";
import { SourceFile } from "../modules";

export function checkElemType(elem: SourceFile) {
  console.log('contents', elem.contents)
  const ctx = vm.createContext();
  return vm.runInContext("typeof " + elem.contents, ctx);
}
