import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function EngineTabs({ AutoCAD, Inventor, Revit, Max }) {
    return (
        <Tabs groupId="Engine">
            <TabItem value="AutoCAD" label="AutoCAD Plugin" default>
                <AutoCAD />
            </TabItem>
            <TabItem value="Inventor" label="Inventor Plugin">
                <Inventor />
            </TabItem>
            <TabItem value="Revit" label="Revit Plugin">
                <Revit />
            </TabItem>
            <TabItem value="Max" label="3ds Max Plugin">
                <Max />
            </TabItem>
        </Tabs>
    );
}