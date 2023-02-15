---
title: Identity Verification
---

# Identity Verification on Provenance Blockchain

Identity verification processes, such as Know Your Customer (KYC), Anti-Money Laundering (AML), and 506\(c\) investor
accreditation, are critical for ensuring the security and integrity of financial and blockchain systems. However,
managing these processes can be a complex and challenging task, requiring significant time and resources.

![identity verification check](/img/learn/dapps/identity-verification-check.png)

To simplify and streamline the identity verification process, Provenance Blockchain has developed a solution that uses
Attributes, a name-value pair structure that allows for the storage and management of verified identity information on
the blockchain. Attributes are essentially metadata added to a blockchain account to indicate that an individual or
entity has passed a specific verification process.

For instance, an attribute might be used to verify that a person has completed a KYC process or that an entity is
accredited to invest in a particular security. The data stored in the attribute value can be of various types, including
text, JSON, URL, UUID and other formats.

![identity verification check](/img/learn/dapps/user-account-attributes.png)

One of the main benefits of using Attributes on Provenance Blockchain is that it allows for automatic verification of
identity. Smart contracts can verify that a participant has met specific criteria by checking the attribute values
stored on the blockchain. This approach can significantly reduce the need for manual identity verification and improve
the accuracy of the process.

![attribute use in smart contracts](/img/learn/asset-lifecycle/marker-transfer-approval.png)


Attributes provide a standardized way to manage identity verification records across different financial applications.
Different smart contracts and decentralized applications (dApps) can choose which identity verification providers they
accept, either by using a wildcard expression or by requiring a specific attribute from a particular provider. This
flexibility allows for a wide range of use cases, from simple one-time identity verification to more complex ongoing
verification processes.

However, it's essential to note that smart contracts are limited to the information stored in the attribute value on the
blockchain, while dApps may require a richer data set. In this case, the verification provider has some choices about
how to share the user's data with the dApp. The provider can choose to store the data off-chain, provide the data
on-chain using a hash, or share the data with the dApp in a more traditional way.


----

## Names

- The Name module is a way to give simpler and easier-to-remember names to complicated blockchain addresses.
- These names can be used to show who owns and controls certain information.
- The name hierarchy is modeled after DNS (Domain Name Service, the system used to name websites, such
  as `developer.provenance.io`) and provides a method for establishing authority. Each level of the hierarchy is owned
  by an address

----