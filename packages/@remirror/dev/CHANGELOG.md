# @remirror/dev

## 1.0.0-next.30

> 2020-08-28

### Patch Changes

- Updated dependencies [[`de0ba243`](https://github.com/remirror/remirror/commit/de0ba2436729f2fbd3bc8531b0e5fd01d3f34210)]:
  - @remirror/react@1.0.0-next.30

## 1.0.0-next.29

> 2020-08-28

### Patch Changes

- Updated dependencies [[`05446a62`](https://github.com/remirror/remirror/commit/05446a62d4f1d1cf3c940b2766a7ea5f66a77ebf)]:
  - @remirror/react@1.0.0-next.29

## 1.0.0-next.28

> 2020-08-27

### Patch Changes

- Updated dependencies [[`d5bbeb4e`](https://github.com/remirror/remirror/commit/d5bbeb4e8e193e695838207706a04f7739cc1448), [`0400fbc8`](https://github.com/remirror/remirror/commit/0400fbc8a5f97441f70528f7d6c6f11d560b381d)]:
  - @remirror/pm@1.0.0-next.28
  - @remirror/react@1.0.0-next.28

## 1.0.0-next.27

> 2020-08-25

### Patch Changes

- @remirror/react@1.0.0-next.27

## 1.0.0-next.26

> 2020-08-24

### Patch Changes

- @remirror/react@1.0.0-next.26
- @remirror/pm@1.0.0-next.26

## 1.0.0-next.25

> 2020-08-23

### Patch Changes

- @remirror/react@1.0.0-next.25

## 1.0.0-next.24

> 2020-08-20

### Patch Changes

- @remirror/react@1.0.0-next.24

## 1.0.0-next.23

> 2020-08-18

### Patch Changes

- Updated dependencies [d505ebc1]
  - @remirror/react@1.0.0-next.23

## 1.0.0-next.22

> 2020-08-17

### Patch Changes

- Updated dependencies [d300c5f0]
  - @remirror/react@1.0.0-next.22
  - @remirror/pm@1.0.0-next.22

## 1.0.0-next.21

> 2020-08-15

### Patch Changes

- @remirror/react@1.0.0-next.21
- @remirror/pm@1.0.0-next.21

## 1.0.0-next.20

> 2020-08-14

### Patch Changes

- Updated dependencies [95697fbd]
- Updated dependencies [770e3d4a]
- Updated dependencies [92653907]
  - @remirror/react@1.0.0-next.20
  - @remirror/pm@1.0.0-next.20

## 1.0.0-next.17

> 2020-08-02

### Patch Changes

- Updated dependencies [4498814f]
  - @remirror/react@1.0.0-next.17

## 1.0.0-next.16

> 2020-08-01

### Patch Changes

- a7037832: Use exact versions for `@remirror` package `dependencies` and `peerDepedencies`.

  Closes #435

- dcccc5fc: Add browser entrypoint to packages and shrink bundle size.
- 231f664b: Upgrade dependencies.
- 6c6d524e: Remove use of `export *` for better tree shaking.

  Closes #406

- Updated dependencies [6528323e]
- Updated dependencies [a7037832]
- Updated dependencies [dcccc5fc]
- Updated dependencies [231f664b]
- Updated dependencies [6c6d524e]
- Updated dependencies [e518ef1d]
  - @remirror/react@1.0.0-next.16
  - @remirror/pm@1.0.0-next.16

## 1.0.0-next.4

> 2020-07-16

### Patch Changes

- 5d5970ae: Update repository and website field to point to HEAD rather than a specific branch.
- Updated dependencies [e1a1b6ec]
- Updated dependencies [9f495078]
- Updated dependencies [5d5970ae]
- Updated dependencies [64edeec2]
  - @remirror/react@1.0.0-next.4
  - @remirror/pm@1.0.0-next.4

## 1.0.0-next.1

> 2020-07-05

### Patch Changes

- Fix missing dist files from previous publish.
- Updated dependencies [undefined]
  - @remirror/pm@1.0.0-next.1
  - @remirror/react@1.0.0-next.1

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

### Patch Changes

- Updated dependencies [undefined]
- Updated dependencies [28bd8bea]
- Updated dependencies [7b817ac2]
- Updated dependencies [09e990cb]
  - @remirror/pm@1.0.0-next.0
  - @remirror/react@1.0.0-next.0

## 0.13.2

### Patch Changes

- 89392ff7: Upgrade prosemirror-dev-tools to 3.0.0

## 0.13.1

### Patch Changes

- @remirror/react@0.13.1

## 0.11.0

### Patch Changes

- Updated dependencies [026d4238]
- Updated dependencies [69d00c62]
  - @remirror/react@0.11.0

## 0.7.4

### Patch Changes

- 7380e18f: Update repository url from ifiokjr/remirror to remirror/remirror to reflect new GitHub organisation.
- Updated dependencies [7380e18f]
  - @remirror/react@0.7.5

## 0.7.3

### Patch Changes

- 5f85c0de: Bump a new version to test out the changeset API.
- Updated dependencies [5f85c0de]
  - @remirror/react@0.7.3
