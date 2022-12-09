# Provenance Modules

import { DocSubheader } from '/docs/components/DocSubheader';

<DocSubheader text="Powering the logic of applications."/>

Modules are the code components of the Provenance Blockchain that execute the majority of the business logic for our applications. The [Cosmos SDK](https://docs.cosmos.network/main) enables developers to build modules that utilize the core structure of the SDK to allow the modules to function together. To read more about creating modules, refer to the [Cosmos documentation on modules](https://docs.cosmos.network/main/building-modules/intro).

Provenance uses inherited modules from the Cosmos SDK, and has also developed modules that are specific to Provenance.

- [Inherited modules](/docs/pb/modules/inherited-modules)
- Provenance specific modules:
  - [Metadata](/docs/pb/modules/metadata-module)
  - [Marker](/docs/pb/modules/marker-module)
  - [Attribute](/docs/pb/modules/account)
  - [Name](/docs/pb/modules/name-module)
