# Retrieve File

import { DocSubheader } from '/docs/components/DocSubheader';

<DocSubheader text="Retrieve and decrypt a file"
/>

## Description

Used to retrieve and decrypt raw files from the object store. See [Encrypted Object Store ](https://developer.provenance.io/docs/p8e/overview/encrypted-object-store)for additional information.

## Usage

**URL**: `https://{host}/p8e-cee-api/external/api/v1/eos/file`

**Method**: GET

**Headers**:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="local" label="Local">

:::info
Supply one `x-uuid` header when running locally.
:::

| Key          | Value                      |
| ------------ | -------------------------- |
| Content-Type | multipart/form-data        |
| x-uuid       | \<Provenance Member UUID\> |

</TabItem>
<TabItem value="test-production" label="Test/Production">

:::info
Supply one `apikey` header when running in test or production environments..
:::

| Key          | Value               |
| ------------ | ------------------- |
| Content-Type | multipart/form-data |
| apikey       | \<API Key\>         |

</TabItem>
</Tabs>

**Form Data**:

| Field              | Description                                          | Data Type |
| ------------------ | ---------------------------------------------------- | --------- |
| objectStoreAddress | The URL to the encrypted object store to run against | String    |
| hash               | Hash of the stored file                              | String    |

**Response Status Codes**:

| Code | Meaning                   |
| ---- | ------------------------- |
| 200  | File retrieved            |
| 400  | Illegal/missing arguments |
| 404  | File not found            |
| 500  | Server error              |

**Response Body**: File bytes

## Example

Assuming you followed the example found in the [Store File Example](store-file.md#example) section to store a single file, and received a resulting hash of `gE8i+JHSwPss2y6sEs41m2I1o6M+NZaPeSTEudtqosw=`, you could retrieve that file with the following request:

```bash
curl --location --request GET 'localhost:8080/p8e-cee-api/external/api/v1/eos/file?objectStoreAddress=grpc://localhost:5001&hash=gE8i+JHSwPss2y6sEs41m2I1o6M+NZaPeSTEudtqosw=' \
--header 'x-uuid: deadbeef-face-479b-860c-facefaceface'
```

:::info
Swap out the hash in the example with the resulting hash from your call to store the file if it differs from the one above.
:::
