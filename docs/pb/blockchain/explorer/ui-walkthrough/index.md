# Walkthrough

import DocCardList from '@theme/DocCardList';
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import { DocSubheader } from '../../../components/DocSubheader';

<DocSubheader text="What is presented in the Explorer UI" />

Explorer URLs:

- Local: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
- Testnet: [https://explorer.test.provenance.io/dashboard](https://explorer.test.provenance.io/dashboard)
- Mainnet: [https://explorer.provenance.io/dashboard](https://explorer.provenance.io/dashboard)

## Navigation

![The navigation bar](/img/navigation.png)

<DocCardList items={useCurrentSidebarCategory().items} />

## Search

You can also search for a specific item via the search function in the navigation bar.

![Search function](/img/explorer/search.png)

- **Block**: you can search for a specific block, ie `4543350`. This will take you to the [block detail](dashboard/blocks.md#detail) page
- **Validator**: you can search for a specific validator address, ie `tpvaloper1tgq6cpu6hmsrvkvdu82j99tsxxw7qqajn843fe`. This will take you to the [validator detail](staking-validators/validator-details.md) page&#x20;
- **Tx**: you can search for a specific transaction hash, ie `A6B88C69B0FBA4C130E66DDFF8E69A0B07C0F8E6E81A125F15AAF355F307D8AB`. This will take you to the [transaction detail](transactions.md#detail) page&#x20;
- **Address**: you can search for a specific address, ie `tp1q8n4v4m0hm8v0a7n697nwtpzhfsz3f4d40lnsu`. This will take you to the [address detail](account-address.md) page&#x20;
- **Asset**: you can search for a specific asset, ie `nhash`. This will take you to the [asset detail](assets.md) page&#x20;
- **NFT**: you can search for a specific scope address or uuid, ie `scope1qrrp454dmwcy45dh6vfazx74sfhqrkrx04` or `c61ad2ad-dbb0-4ad1-b7d3-13d11bd5826e`. This will take you to the [scope detail](forthcoming/nfts.md) page
