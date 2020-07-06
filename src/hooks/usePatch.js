import {useContext} from "react";

import {PatchContext} from "../contexts";

export default () => {
  const {...patchContext} = useContext(Patch);
  // TODO: Sanitize.
  return patchContext;
};
