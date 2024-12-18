import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default function EnvTabs({ NodeJsVsCode, DotNetVsCode, DotNetVs2022 }) {
  return (
    <Tabs groupId="development-environment">
      <TabItem value="nodejs-vscode" label="Node.js & VSCode" default>
        <NodeJsVsCode />
      </TabItem>
    </Tabs>
  );
}
