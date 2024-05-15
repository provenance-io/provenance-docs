# Identity Attribute Names

[Names](/docs/sdk/name/) on the Provenance Blockchain are a way to give simpler and easier-to-remember names to complicated blockchain addresses. These names can be used to show who owns and controls certain information on the blockchain. This guide assumes you have an understanding of how names work on Provenance Blockchain.

## Pattern for Identity Attribute Names

Identity Attribute Names on the Provenance Blockchain follow the following pattern: `*.[org].kyc.pb`. Here, `*` is a wildcard that can be replaced with any name, `[org]` is the name of the organization, and `kyc.pb` are restricted namespaces managed by the Provenance Blockchain Foundation.

## Establishing Authority with the Name Hierarchy

The Name hierarchy provides a method for establishing authority, where each level of the hierarchy is owned by an address. In order to establish ownership of a name, you must create an attribute with that name and set the owner to your address. Once you own a name, you can transfer ownership by creating a new attribute with the same name at the new owner's address.

## Adding Your Organization to the KYC Namespace

In order to add your organization to the kyc namespace, you will need to reach out to an owner of the namespace. More on that [here](/docs/sdk/name/concepts#creation-of-root-names)
