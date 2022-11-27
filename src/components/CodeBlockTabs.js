import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function CodeBlockTabes({ NET6, NodeJS }) {
    return (
        <Tabs groupId="CodeBlocks">
            <TabItem value="NET6" label=".NET 6" default>
                <NET6 />
            </TabItem>
            <TabItem value="NodeJS" label="NodeJS">
                <NodeJS />
            </TabItem>
        </Tabs>
    );
}