import React from 'react'
import { useIsClient } from '@uidotdev/usehooks'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageEssentials from '@site/src/components/Homepage/HomepageEssentials'
import HomepageHeader from '@site/src/components/Homepage/HomepageHeader'
import HomepageGetStarted from '@site/src/components/Homepage/HomepageGetStarted'
import HomepageTutorials from '@site/src/components/Homepage/HomepageTutorials'
import HomepageConnect from '@site/src/components/Homepage/HomepageConnect'
import HomepageLearn from '@site/src/components/Homepage/HomepageLearn'
import HomepageCollaborate from '@site/src/components/Homepage/HomepageCollaborate'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  const isClient = useIsClient()

  return (
    <Layout
      title={`${siteConfig.title} Docs`}
      description="Developer site and docs for Provenance Blockchain Foundation"
    >
      <HomepageHeader />
      <main className="bg-mid-section-flare bg-center bg-no-repeat">
        <HomepageEssentials />
        <HomepageGetStarted />
        <HomepageTutorials />
        <HomepageConnect />
        {isClient && <HomepageLearn />}
        <HomepageCollaborate />
      </main>
    </Layout>
  )
}
