# Identity Attribute Values

When crafting attribute values for identity verification on Provenance Blockchain, it is crucial to determine what data
should be included in an attribute value. Since attributes on a blockchain account are publicly readable, it is
essential to consider privacy and security. This article discusses what should or could go into an attribute value for
identity verification on the Provenance Blockchain.



## Ensuring Privacy and Security

The primary rule is to **never include any Personally Identifying Information (PII) in the attribute value**. Once the
attribute data is written to the chain, it is impossible to retract the information. The attribute value's content is left to the
identity provider's discretion. The attribute name should convey the credential type, while the attribute value should
contain a simple, opaque reference identifier to the user's KYC data stored at the identity provider.

:::danger
Never include any Personally Identifying Information (PII) in the attribute value
:::

A minimal attribute value example might be a customer or verification process reference ID. This ID can be used by a
dApp or service to present to the identity provider when requesting user identity details. Alternatively, the identity
provider could include a full URI for obtaining the identity data, provided the customer authorizes it.

## Handling Expiration Dates and Status Fields

Most identity verification processes are valid for a limited time. It may seem logical to include an expiration date or
status field in the attribute value, but this approach has downsides. Including an "expiration date" field relies on the
consuming application to parse and respect the field. Similarly, incorporating a field for status or data state, such as 
"pending," "completed," or "expired," places the responsibility on applications to parse and respect these semantic
values.

A recommended approach is to include an issue date (but not an expiration date) for the attribute. This allows the
consuming application to decide how current their credential requirements must be. Another method is for the identity
provider to delete the attribute from the user account when it expires or becomes invalid. This way, consuming
applications can reason about the attribute using only the presence or absence of the attribute as the definitive flag
for the credential's current validity.

## Coordinating Identity NFTs with Attribute Values

If there is a coordinating identity NFT for the attribute, it's a good idea to include the Scope address in the
attribute value so that calling applications can find the NFT.

The [AttributeType enum](https://github.com/provenance-io/provenance/blob/main/proto/provenance/attribute/v1/attribute.proto#L32)
defines the different types of data that can be stored in an attribute value. It is important to choose the appropriate
type based on the data being stored, ensuring both privacy and functionality.


```protobuf
// AttributeType defines the type of the data stored in the attribute value
enum AttributeType {
  // ATTRIBUTE_TYPE_UNSPECIFIED defines an unknown/invalid type
  ATTRIBUTE_TYPE_UNSPECIFIED = 0 [(gogoproto.enumvalue_customname) = "Unspecified"];
  // ATTRIBUTE_TYPE_UUID defines an attribute value that contains a string value representation of a V4 uuid
  ATTRIBUTE_TYPE_UUID = 1 [(gogoproto.enumvalue_customname) = "UUID"];
  // ATTRIBUTE_TYPE_JSON defines an attribute value that contains a byte string containing json data
  ATTRIBUTE_TYPE_JSON = 2 [(gogoproto.enumvalue_customname) = "JSON"];
  // ATTRIBUTE_TYPE_STRING defines an attribute value that contains a generic string value
  ATTRIBUTE_TYPE_STRING = 3 [(gogoproto.enumvalue_customname) = "String"];
  // ATTRIBUTE_TYPE_URI defines an attribute value that contains a URI
  ATTRIBUTE_TYPE_URI = 4 [(gogoproto.enumvalue_customname) = "Uri"];
  // ATTRIBUTE_TYPE_INT defines an attribute value that contains an integer (cast as int64)
  ATTRIBUTE_TYPE_INT = 5 [(gogoproto.enumvalue_customname) = "Int"];
  // ATTRIBUTE_TYPE_FLOAT defines an attribute value that contains a float
  ATTRIBUTE_TYPE_FLOAT = 6 [(gogoproto.enumvalue_customname) = "Float"];
  // ATTRIBUTE_TYPE_PROTO defines an attribute value that contains a serialized proto value in bytes
  ATTRIBUTE_TYPE_PROTO = 7 [(gogoproto.enumvalue_customname) = "Proto"];
  // ATTRIBUTE_TYPE_BYTES defines an attribute value that contains an untyped array of bytes
  ATTRIBUTE_TYPE_BYTES = 8 [(gogoproto.enumvalue_customname) = "Bytes"];
}
```