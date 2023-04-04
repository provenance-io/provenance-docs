# Identity NFTs

## Why NFTs are Ideal for Identity Verification on Provenance Blockchain

Identity Verification NFTs on Provenance Blockchain offer a secure and user-centric solution for managing digital
identities within the decentralized ecosystem. By leveraging the Scope data structure and Protobuf Records, Identity
Providers can create NFTs that represent a user's identity verification status while maintaining privacy and control.
NFTs on Provenance Blockchain are well-suited for representing identity verification processes because they were
designed to coordinate private, off-chain data with an on-chain asset that can be held in a user wallet. This allows the
user to have control over their identity data and decide which decentralized applications (dApps) can access the NFT
data.

![identity verification check](/img/learn/dapps/identity-badge.png)


## Understanding Provenance NFTs and Their Construction

Provenance NFTs are defined by the [Metadata Module](/docs/pb/modules/metadata-module) using the
[Scope data structure](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance.metadata.v1.Scope)
. To understand how Identity
Verification NFTs are constructed on Provenance Blockchain, it's essential to review [how NFTs are designed](/docs/learn/asset-lifecycle/nfts)
on this platform.

The Scope data structure encapsulates the NFT, containing information like the NFT's owner, data access control, and
associated metadata Records. Each metadata Record within the Scope is defined using [Google Protobufs](https://protobuf.dev/), a language- and
platform-neutral mechanism for serializing structured data.

When creating an Identity Verification NFT, an Identity Provider will define one or more Protobuf Records included in
the Scope. These Records will store the user's identity verification data, such as the verification level, verification
date, and other relevant information. 

The Identity Provider will then create the NFT on the Provenance Blockchain, associating it with the user's account. Once
the NFT is minted, the user will have ownership and control over their identity data.

## Accessing Data from Identity Verification NFTs

To access the data stored within an Identity Verification NFT, a third-party dApp or service must first request
permission from the user. Upon receiving the user's consent, the dApp can then access the relevant Protobuf Records in
the NFT's Scope data structure.

Depending on the Identity Provider's implementation, the data can be accessed through an API provided by the Identity
Provider or an EOS Gateway that directly interfaces with the off-chain encrypted object store holding the identity data.


## Step-by-Step Guide

Define Protobuf Records: The Identity Provider defines one
or more Protobuf Records to be included in the Scope. These Records store identity verification data, such as
verification level, verification date, and other relevant non-sensitive information. Do not include any Personally
Identifying Information (PII) in these Records.


```protobuf title="Example NFT Protobuf (partial) representing investor accreditation data" showLineNumbers
syntax = "proto3";

package identity;

message InvestorAccreditation {

  UUID accreditation_uuid = 1; // Id for this accreditation process
  string creator_address = 2;  // Identity provider Id (blockchain address)
  string owner_address = 3;    // Customer Id (blockchain address)
  Profile profile = 4;         // Customer information and consents
  KycData kyc_data = 5;        // Customer identity data
  AttestationData attestation_data =
      6; // Accredited investor attestations (e.g. 506b)
  VerificationData verification_data =
      7; // Verified investor accreditation (e.g. 506c)
}

message Profile {
  string name = 1;               // Customer name
  string email = 2;              // Customer contact email
  string phone_number = 3;       // Customer contact phone
  repeated Consent consents = 4; // Consent agreements customer has signed
}

message Consent {

  enum Type {
    UNKNOWN_CONSENT = 0;
    TERMS_OF_SERVICE = 1;
    PRIVACY_POLICY = 2;
    ELECTRONIC_COMMUNICATIONS = 3;
    INVESTOR_LIABILITY_DISCLOSURE = 4;
    INVESTOR_AND_SPOUSE_LIABILITY_DISCLOSURE = 5;
    INVESTOR_INCOME_EXPECTATION = 6;
    INVESTOR_AND_SPOUSE_INCOME_EXPECTATION = 7;
    ADDITIONAL_VERIFICATION_INFO_CONSENT = 8;
  }

  UUID uuid = 1;     // ID for this signed consent
  Type type = 2;     // Which form
  int32 version = 3; // Which version of this form
}

message KycData {
  oneof kyc_oneof {
    IndividualKycData individual = 1; // For individuals
    EntityKycData entity = 2;         // For companies
    TrustKycData trust = 3;           // For trusts
  }
}
```