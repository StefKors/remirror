import { bool, includes, isString } from '@remirror/core-helpers';
import type { SelectionParameter } from '@remirror/core-types';

import { ChangeReason, ExitReason } from './suggest-constants';
import type {
  CompareMatchParameter,
  SuggestReasonMap,
  SuggestStateMatch,
  SuggestStateMatchParameter,
} from './suggest-types';

/**
 * Is this a change in the current suggestion (added or deleted characters)?
 */
export const isChange = (
  compare: Partial<CompareMatchParameter>,
): compare is CompareMatchParameter =>
  bool(compare.prev && compare.next && compare.prev.queryText.full !== compare.next.queryText.full);

/**
 * Has the cursor moved within the current suggestion (added or deleted
 * characters)?
 */
export const isMove = (compare: Partial<CompareMatchParameter>): compare is CompareMatchParameter =>
  bool(compare.prev && compare.next && compare.prev.range.to !== compare.next.range.to);

/**
 * Are we entering a new suggestion?
 */
export const isEntry = (
  compare: Partial<CompareMatchParameter>,
): compare is Pick<CompareMatchParameter, 'next'> => bool(!compare.prev && compare.next);

/**
 * Are we exiting a suggestion?
 */
export const isExit = (
  compare: Partial<CompareMatchParameter>,
): compare is Pick<CompareMatchParameter, 'prev'> => bool(compare.prev && !compare.next);

/**
 * Is this a jump from one suggestion to another?
 */
export const isJump = (compare: Partial<CompareMatchParameter>): compare is CompareMatchParameter =>
  bool(compare.prev && compare.next && compare.prev.range.from !== compare.next.range.from);

/**
 * Check that the passed in value is an ExitReason
 */
export const isExitReason = (value: unknown): value is ExitReason =>
  isString(value) && Object.values(ExitReason).includes(value as ExitReason);
export const isChangeReason = (value: unknown): value is ChangeReason =>
  isString(value) && Object.values(ChangeReason).includes(value as ChangeReason);

/**
 * An exit which is caused by a changed in the selection and no other change in the document.
 */
export function isSelectionExitReason(value: unknown) {
  return includes(
    [
      ExitReason.MoveEnd,
      ExitReason.MoveStart,
      ExitReason.SelectionOutside,
      ExitReason.JumpForward,
      ExitReason.JumpBackward,
    ],
    value,
  );
}

/**
 * Checks that the reason passed is a split reason. This typically means that we
 * should default to a partial update / creation of the mention.
 */
export const isSplitReason = (value?: unknown): value is ExitReason.Split =>
  value === ExitReason.Split;

/**
 * Checks that the reason was caused by a split at a point where there is no
 * query.
 */
export const isInvalidSplitReason = (value?: unknown): value is ExitReason.InvalidSplit =>
  value === ExitReason.InvalidSplit;

/**
 * Checks that the reason was caused by a deletion.
 */
export const isRemovedReason = (value?: unknown): value is ExitReason.Removed =>
  value === ExitReason.Removed;

/**
 * Checks to see if this is a jump reason.
 */
export const isJumpReason = (map: SuggestReasonMap): map is Required<SuggestReasonMap> =>
  map.exit
    ? [ExitReason.JumpBackward, ExitReason.JumpForward].includes(map.exit.reason)
    : map.change
    ? [ChangeReason.JumpBackward, ChangeReason.JumpForward].includes(map.change.reason)
    : false;

/**
 * True when the match is currently active (i.e. it's query has a value)
 */
export const isValidMatch = (match: SuggestStateMatch | undefined): match is SuggestStateMatch =>
  bool(match && match.queryText.full.length >= match.suggester.matchOffset);

/**
 * True when the current selection is outside the match.
 */
export const selectionOutsideMatch = ({
  match,
  selection,
}: Partial<SuggestStateMatchParameter> & SelectionParameter) =>
  match && (selection.from < match.range.from || selection.from > match.range.end);
