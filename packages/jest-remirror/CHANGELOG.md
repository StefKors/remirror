# jest-remirror

## 1.0.0-next.29

> 2020-08-28

### Patch Changes

- Updated dependencies [[`05446a62`](https://github.com/remirror/remirror/commit/05446a62d4f1d1cf3c940b2766a7ea5f66a77ebf)]:
  - @remirror/core@1.0.0-next.29
  - @remirror/dom@1.0.0-next.29
  - @remirror/preset-core@1.0.0-next.29
  - jest-prosemirror@1.0.0-next.29

## 1.0.0-next.28

> 2020-08-27

### Minor Changes

- [`0400fbc8`](https://github.com/remirror/remirror/commit/0400fbc8a5f97441f70528f7d6c6f11d560b381d) [#591](https://github.com/remirror/remirror/pull/591) Thanks [@ifiokjr](https://github.com/ifiokjr)! - Add support for nested content within `ReactComponent` node views. Also support adding multiple components to the manager via the `nodeViewComponents` setting. Currently `ReactNodeView` components must be defined at initialization, and marks are not supported.

  - Also enforce minimum required extensions for the manager passed to the `RemirrorProvider`.
  - Some general cleanup and refactoring.
  - Add support for composing refs when using `getRootProps`. Now you can add your own ref to the `getRootProps({ ref })` function call which will be populated at the same time.
  - Test the names of `Extension`'s and `Preset`'s in with `extensionValidityTest`.
  - **BREAKING CHANGES** 💥
    - Rename: `ReactSSRExtension` => `ReactSsrExtension`
    - Rename: `ReactComponentExtension.name` from `reactNodeView` => `reactComponent`.
    - Rename: `NodeViewsExtension` => `NodeViewExtension`
    - Rename: `NodeViewsExtension` => `NodeViewExtension`
    - Rename: `SuggestExtension.name` from `suggestions` => `suggest`

### Patch Changes

- Updated dependencies [[`c0dce043`](https://github.com/remirror/remirror/commit/c0dce0433780e1ddb8b21384eef4b67ae1f74e47), [`d5bbeb4e`](https://github.com/remirror/remirror/commit/d5bbeb4e8e193e695838207706a04f7739cc1448), [`0400fbc8`](https://github.com/remirror/remirror/commit/0400fbc8a5f97441f70528f7d6c6f11d560b381d), [`d23a0434`](https://github.com/remirror/remirror/commit/d23a0434c49ecd5bbaccffd9b8d8c42bc626219a)]:
  - @remirror/core@1.0.0-next.28
  - @remirror/pm@1.0.0-next.28
  - @remirror/dom@1.0.0-next.28
  - @remirror/preset-core@1.0.0-next.28
  - jest-prosemirror@1.0.0-next.28

## 1.0.0-next.26

> 2020-08-24

### Patch Changes

- Updated dependencies [a2bc3bfb]
- Updated dependencies [147d0f2a]
  - @remirror/core@1.0.0-next.26
  - @remirror/dom@1.0.0-next.26
  - @remirror/preset-core@1.0.0-next.26
  - jest-prosemirror@1.0.0-next.26
  - @remirror/pm@1.0.0-next.26

## 1.0.0-next.25

> 2020-08-23

### Patch Changes

- Updated dependencies [e37d64de]
- Updated dependencies [3f2625bf]
  - @remirror/core@1.0.0-next.25
  - @remirror/dom@1.0.0-next.25
  - @remirror/preset-core@1.0.0-next.25
  - jest-prosemirror@1.0.0-next.25

## 1.0.0-next.24

> 2020-08-20

### Patch Changes

- Updated dependencies [65a7ea24]
  - @remirror/core@1.0.0-next.24
  - @remirror/dom@1.0.0-next.24
  - @remirror/preset-core@1.0.0-next.24

## 1.0.0-next.22

> 2020-08-17

### Patch Changes

- 65638a1c: Fix cyclic JSON error when tests when tests failed.
- 45d82746: 💥 Remove `AttributesWithClass`.

  🚀 Add `NodeAttributes` and `MarkAttributes` exports which can be extended in the `Remirror.ExtraNodeAttributes` and `Remirror.ExtraMarkAttributes`.

  🚀 Add `isAllSelection` which checks if the user has selected everything in the active editor.

- Updated dependencies [9ab1d0f3]
- Updated dependencies [65638a1c]
- Updated dependencies [45d82746]
- Updated dependencies [113560bb]
  - @remirror/core@1.0.0-next.22
  - jest-prosemirror@1.0.0-next.22
  - @remirror/dom@1.0.0-next.22
  - @remirror/preset-core@1.0.0-next.22
  - @remirror/pm@1.0.0-next.22

## 1.0.0-next.21

> 2020-08-15

### Patch Changes

- Updated dependencies [3673a0f0]
- Updated dependencies [8c34030e]
- Updated dependencies [baf3f56d]
  - @remirror/core@1.0.0-next.21
  - @remirror/dom@1.0.0-next.21
  - @remirror/preset-core@1.0.0-next.21
  - jest-prosemirror@0.8.4-next.6
  - @remirror/pm@1.0.0-next.21

## 1.0.0-next.20

> 2020-08-14

### Patch Changes

- 770e3d4a: Update package dependencies.
- 92653907: Upgrade package dependencies.
- Updated dependencies [770e3d4a]
- Updated dependencies [92653907]
  - @remirror/pm@1.0.0-next.20
  - jest-prosemirror@1.0.0-next.5
  - @remirror/core@1.0.0-next.20
  - @remirror/dom@1.0.0-next.20
  - @remirror/preset-core@1.0.0-next.20

## 1.0.0-next.17

> 2020-08-02

### Patch Changes

- Updated dependencies [898c62e0]
  - @remirror/core@1.0.0-next.17
  - @remirror/preset-core@1.0.0-next.17
  - @remirror/dom@1.0.0-next.17

## 1.0.0-next.16

> 2020-08-01

### Major Changes

- 6c6d524e: **Breaking Changes** 💥

  Rename `contains` to `containsNodesOfType`.

  Make `isValidPresetConstructor` internal only.

  Remove `EMPTY_CSS_VALUE`, `CSS_ROTATE_PATTERN` from `@remirror/core-constants`.

  Remove method: `clean() | coerce() | fragment() | markFactory() | nodeFactory() | offsetTags() | sequence() | slice() | text() | isTaggedNode() | replaceSelection()` and type: `BaseFactoryParameter | MarkWithAttributes | MarkWithoutAttributes | NodeWithAttributes | NodeWithoutAttributes | TagTracker | TaggedContent | TaggedContentItem | TaggedContentWithText | Tags` exports from `jest-remirror`.

  Remove `SPECIAL_INPUT_KEYS | SPECIAL_KEYS | SPECIAL_MENU_KEYS | SPECIAL_TOGGLE_BUTTON_KEYS` from `multishift`.

### Minor Changes

- 720c9b43: Add validity check function exports to `jest-remirror`.

  - `presetValidityTest` for testing your `Preset`.
  - `extensionValidityTest` for testing your `Extension`.

### Patch Changes

- a7037832: Use exact versions for `@remirror` package `dependencies` and `peerDepedencies`.

  Closes #435

- 68c524ee: Remove ESModule build which is not supported by jest.
- 231f664b: Upgrade dependencies.
- 6c6d524e: Remove use of `export *` for better tree shaking.

  Closes #406

- Updated dependencies [6528323e]
- Updated dependencies [f032db7e]
- Updated dependencies [a7037832]
- Updated dependencies [68c524ee]
- Updated dependencies [6e8b749a]
- Updated dependencies [dcccc5fc]
- Updated dependencies [231f664b]
- Updated dependencies [982a6b15]
- Updated dependencies [6c6d524e]
- Updated dependencies [6c6d524e]
- Updated dependencies [e518ef1d]
- Updated dependencies [be9a9c17]
- Updated dependencies [720c9b43]
  - @remirror/preset-core@1.0.0-next.16
  - @remirror/core@1.0.0-next.16
  - @remirror/dom@1.0.0-next.16
  - @remirror/pm@1.0.0-next.16
  - jest-prosemirror@1.0.0-next.4

## 1.0.0-next.15

> 2020-07-31

### Minor Changes

- 843c18e7: Add `chain` method to `RemirrorTestChain` and update select text to receive `all` for selecting all text.

### Patch Changes

- 9de09793: Fix the dependencies.
- Updated dependencies [cdc5b801]
- Updated dependencies [44516da4]
- Updated dependencies [e5ea0c84]
- Updated dependencies [a404f5a1]
- Updated dependencies [6c3b278b]
- Updated dependencies [f91dcab1]
  - @remirror/core@1.0.0-next.15
  - @remirror/preset-core@1.0.0-next.15
  - @remirror/dom@1.0.0-next.15

## 1.0.0-next.10

> 2020-07-26

### Major Changes

- 9b132f23: Remove `renderEditorString` method for testing SSR editors.

### Patch Changes

- Updated dependencies [6468058a]
  - @remirror/core@1.0.0-next.10
  - @remirror/dom@1.0.0-next.10

## 1.0.0-next.6

> 2020-07-20

### Patch Changes

- cf4656a6: Remove `remirror` from the dependencies of `jest-remirror`

## 1.0.0-next.5

> 2020-07-17

### Patch Changes

- 5ebf2827: Fix broken `jest-prosemirror/environment` import and `jest-remirror/environment` for automatic setup. Also enable the `jest-prosemirror/serializer` to correctly serialize the prosemirror content.
- Updated dependencies [d186b75a]
- Updated dependencies [5ebf2827]
  - remirror@1.0.0-next.5
  - jest-prosemirror@1.0.0-next.3

## 1.0.0-next.4

> 2020-07-16

### Patch Changes

- 5d5970ae: Update repository and website field to point to HEAD rather than a specific branch.
- Updated dependencies [5d5970ae]
  - @remirror/pm@1.0.0-next.4
  - jest-prosemirror@1.0.0-next.2
  - remirror@1.0.0-next.4

## 1.0.0-next.1

> 2020-07-05

### Patch Changes

- Fix missing dist files from previous publish.
- Updated dependencies [undefined]
  - @remirror/pm@1.0.0-next.1
  - jest-prosemirror@1.0.0-next.1
  - remirror@1.0.0-next.1

## 1.0.0-next.0

> 2020-07-05

### Major Changes

- The whole API for remirror has completely changed. These pre-release versions are a breaking change across all packages. The best way to know what's changed is to read the documentaion on the new documentation site `https://remirror.io`.
- 28bd8bea: This is a breaking change to the structure of published npm packages.

  - Move build directory from `lib` to `dist`
  - Remove option for multiple entry points. It is no longer possible to import module from '@remirror/core/lib/custom'
  - Only use one entry file.
  - Remove declaration source mapping for declaration files
  - Remove the src directory from being published.

- 7b817ac2: Rename all types and interfaces postfixed with `Params` to use the postfix `Parameter`. If your code was importing any matching interface you will need to update the name.
- dd16d45d: Rewrite packages using the new API

### Minor Changes

- 9a699e80: Upgrade dependencies to use v26.0.0 of jest.

### Patch Changes

- Updated dependencies [undefined]
- Updated dependencies [8334294e]
- Updated dependencies [28bd8bea]
- Updated dependencies [7b817ac2]
- Updated dependencies [9a699e80]
- Updated dependencies [dd16d45d]
- Updated dependencies [8334294e]
  - @remirror/pm@1.0.0-next.0
  - jest-prosemirror@1.0.0-next.0
  - remirror@1.0.0-next.0

## 0.13.1

### Patch Changes

- Updated dependencies [4dbb7461]
  - @remirror/core-extensions@0.13.1
  - @remirror/react@0.13.1

## 0.11.1

### Patch Changes

- 000fdfb0: Upgraded external dependencies with major releases.
- Updated dependencies [d2a288aa]
- Updated dependencies [5888a7aa]
- Updated dependencies [000fdfb0]
  - jest-prosemirror@0.8.2
  - @remirror/core-extensions@0.11.1

## 0.11.0

### Patch Changes

- Updated dependencies [026d4238]
- Updated dependencies [69d00c62]
- Updated dependencies [c2237aa0]
  - @remirror/react@0.11.0
  - @remirror/core@0.11.0
  - @remirror/core-extensions@0.11.0

## 0.8.1

### Patch Changes

- Updated dependencies [0300d01c]
  - @remirror/core@0.9.0
  - @remirror/core-extensions@0.7.6
  - jest-prosemirror@0.8.1
  - @remirror/react-utils@0.7.6
  - @remirror/react@0.7.7

## 0.8.0

### Minor Changes

- 527395be: `renderEditor` now accepts PrioritizedExtensions for more flexible testing.

### Patch Changes

- Updated dependencies [24f83413]
- Updated dependencies [24f83413]
- Updated dependencies [24f83413]
  - @remirror/core@0.8.0
  - jest-prosemirror@0.8.0
  - @remirror/core-extensions@0.7.5
  - @remirror/react-utils@0.7.5
  - @remirror/react@0.7.6

## 0.7.4

### Patch Changes

- 7380e18f: Update repository url from ifiokjr/remirror to remirror/remirror to reflect new GitHub organisation.
- Updated dependencies [10419145]
- Updated dependencies [7380e18f]
  - @remirror/core-extensions@0.7.4
  - @remirror/core@0.7.4
  - @remirror/react-utils@0.7.4
  - @remirror/react@0.7.5
  - jest-prosemirror@0.7.4

## 0.7.3

### Patch Changes

- 5f85c0de: Bump a new version to test out the changeset API.
- Updated dependencies [5f85c0de]
  - @remirror/core@0.7.3
  - @remirror/core-extensions@0.7.3
  - @remirror/react@0.7.3
  - @remirror/react-utils@0.7.3
  - jest-prosemirror@0.7.3
