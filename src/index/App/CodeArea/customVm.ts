import vm from "vm";
import { SourceFile } from "../shared/modules";

export function checkElemType(elem: SourceFile) {
  console.log('contents', elem.contents)
  const ctx = vm.createContext();
  return vm.runInContext("typeof " + elem.contents, ctx);
}
