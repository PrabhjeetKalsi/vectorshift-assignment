// icons.js
// --------------------------------------------------
// Single source of truth mapping a node's accent key to its Material Design
// Icon. Both BaseNode (the node title bar) and DraggableNode (the toolbar
// chip) look icons up here by accent, so a node and its palette chip always
// show the same glyph. Add a node type by adding one entry here.

import {
  mdiTrayArrowDown,
  mdiTrayArrowUp,
  mdiRobotOutline,
  mdiFormatText,
  mdiFilterOutline,
  mdiSigma,
  mdiApi,
  mdiNoteTextOutline,
  mdiTimerOutline,
} from '@mdi/js';

export const NODE_ICONS = {
  input: mdiTrayArrowDown,
  output: mdiTrayArrowUp,
  llm: mdiRobotOutline,
  text: mdiFormatText,
  filter: mdiFilterOutline,
  math: mdiSigma,
  api: mdiApi,
  note: mdiNoteTextOutline,
  delay: mdiTimerOutline,
};
