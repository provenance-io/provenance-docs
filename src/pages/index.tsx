import React from 'react'
import { useIsClient } from '@uidotdev/usehooks'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageEssentials from '@site/src/components/HomepageEssentials'
import HomepageHeader from '@site/src/components/HomepageHeader'
import HomepageGetStarted from '@site/src/components/HomepageGetStarted'
import HomepageTutorials from '@site/src/components/HomepageTutorials'
import HomepageConnect from '@site/src/components/HomepageConnect'
import HomepageLearn from '@site/src/components/HomepageLearn'
import HomepageCollaborate from '@site/src/components/HomepageCollaborate'

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
