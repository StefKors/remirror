# @remirror/pm

> All the bundled prosemirror dependencies which are required for the remirror core libraries.

[![Version][version]][npm] [![Weekly Downloads][downloads-badge]][npm] [![Bundled size][size-badge]][size] [![Typed Codebase][typescript]](./src/index.ts) ![MIT License][license]

[version]: https://flat.badgen.net/npm/v/@remirror/pm
[npm]: https://npmjs.com/package/@remirror/pm
[license]: https://flat.badgen.net/badge/license/MIT/purple
[size]: https://bundlephobia.com/result?p=@remirror/pm
[size-badge]: https://flat.badgen.net/bundlephobia/minzip/@remirror/pm
[typescript]: https://flat.badgen.net/badge/icon/TypeScript?icon=typescript&label
[downloads-badge]: https://badgen.net/npm/dw/@remirror/pm/red?icon=npm

## Installation

```bash
yarn add @remirror/pm@next # yarn
pnpm add @remirror/pm@next # pnpm
npm install @remirror/pm@next # npm
```

## Usage

This bundles up the prosemirror libraries into one package to make development and consumption of the remirror codebase simpler. Since the prosemirror libraries all provide es modules then tree shaking with rollup and webpack means that the compiled code only picks out what is used.

This library is a required peer dependency when using remirror in your codebase. While you may never need to use it directly, the following code is an example of how you could potentially consume it.

```ts
import { View } from '@remirror/pm/view';
import { EditorState } from '@remirror/pm/state';
import { Suggest } from '@remirror/pm/suggest';

// Top level (not recommended).
import { Node, Mark } from '@remirror/pm';
```

And that is'

## Credits

This package was bootstrapped with [monots].

[monots]: https://github.com/monots/monots
