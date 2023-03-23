# API Usage Guide

import { DocSubheader } from '/docs/components/DocSubheader';

<DocSubheader text="How to onboard a loan"
/>

At this point you've hopefully looked under the covers at the Loan Package data model and some of the BlockVault contract specifications. Whether you're operating your own BlockVault Contract Execution Environment locally, playing around in the sandbox environment, or ready to onboard a loan to mainnet, the following pages will help connect the dots and point you in the right direction.

Loan Originators, or their Loan Origination System providers, should read about Loan Onboarding and making a Validation Request. The first page will walk through the steps of recording a loan to Provenance Blockchain for the first time, while the second will cover an update to the Loan Package where data and documents are shared with a third-party validation services provider.

Third-Party Validators should read the second and third page to both understand what data the validation requester is putting on BlockVault and how to respond with results, respectively.

:::info
Executing a transaction on any blockchain network is an asynchronous process, and Provenance Blockchain is no different. There will be time between sending a transaction proposal to the memory pool and that transaction being picked up and inserted into a block that gets written to the Provenance Blockchain chain. Be sure to check out the Error Handling page for more information on common&#x20;
:::
