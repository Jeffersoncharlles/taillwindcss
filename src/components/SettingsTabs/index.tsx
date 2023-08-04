'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('my-details')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-600">
        <TabItem
          value="my-details"
          title="My Details"
          isSelected={currentTab === 'my-details'}
        />
        <TabItem
          value="my-profile"
          title="Profile"
          isSelected={currentTab === 'my-profile'}
        />
        <TabItem
          value="my-password"
          title="Password"
          isSelected={currentTab === 'my-password'}
        />
        <TabItem
          value="my-team"
          title="Team"
          isSelected={currentTab === 'my-team'}
        />
        <TabItem
          value="my-plan"
          title="Plan"
          isSelected={currentTab === 'my-plan'}
        />
        <TabItem
          value="my-billing"
          title="Billing"
          isSelected={currentTab === 'my-billing'}
        />
        <TabItem
          value="my-email"
          title="Email"
          isSelected={currentTab === 'my-email'}
        />
        <TabItem
          value="my-notifications"
          title="Notifications"
          isSelected={currentTab === 'my-notifications'}
        />
        <TabItem
          value="my-integrations"
          title="Integrations"
          isSelected={currentTab === 'my-integrations'}
        />
        <TabItem
          value="my-api"
          title="API"
          isSelected={currentTab === 'my-api'}
        />
      </Tabs.List>
    </Tabs.Root>
  )
}
